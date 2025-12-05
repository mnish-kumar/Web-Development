import { useRef, useEffect, useState, useCallback } from "react";
import * as faceapi from "face-api.js";
import axios from "axios";
import {toast} from "react-toastify"

export default function FaceEmotion({setsongs}) {
  const videoRef = useRef();
  const [status, setStatus] = useState("Loading models...");
  const [stream, setStream] = useState(null);

  // Load models once
  useEffect(() => {
    async function loadModels() {
      try {
        const MODEL_URL = "/models";
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
          faceapi.nets.faceLandmark68TinyNet.loadFromUri(MODEL_URL),
        ]);
        setStatus("Models loaded — starting camera");
        startCamera();
      } catch (err) {
        setStatus("Model loading error: " + err.message);
      }
    }
    loadModels();

    return () => {
      // Cleanup on unmount
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  // Start camera
  const startCamera = useCallback(async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 480, height: 360 } 
      });
      videoRef.current.srcObject = mediaStream;
      setStream(mediaStream);
      setStatus("Detecting emotions...");
      
      videoRef.current.onloadedmetadata = () => {
        videoRef.current.play();
      };
    } catch (err) {
      setStatus("Camera access denied: " + err.message);
    }
  }, []);

  //  Detection loop with requestAnimationFrame
  


  // Mood detection button
  const detectMood = useCallback(async () => {
    if (!videoRef.current) return;

    const video = videoRef.current;
    const options = new faceapi.TinyFaceDetectorOptions({
      inputSize: 224,
      scoreThreshold: 0.5,
    });

    try {
      const detections = await faceapi.detectAllFaces(video, options).withFaceLandmarks(true).withFaceExpressions();

      if (!detections.length) {
        console.log("No face detected");
        setStatus("No face detected");
      } else {
        const { expressions } = detections[0];

        const maxExpression = Object.entries(expressions).reduce(
          (best, [name, value]) => (value > best.value ? { name, value } : best),
          { name: null, value: 0 }
        );

        
        // get api hit karna hai -> http://localhost:3000/songs?mood=happy
        const expression = `${maxExpression.name}`;
        axios.get(`http://localhost:3000/songs?mood=${expression}`)
        .then(response => {
          setsongs(response.data.songs);
          toast.success(`Mood fetched: ${expression}.`);
        })
      }
    } catch (err) {
      console.error("Detection error:", err);
      setStatus("Detection error: " + err.message);
      toast.error("Detection error");
    }
  }, [setsongs]);


  return (
    <div className="frame">
      
      <div className="video-wrapper">
        <p className="status-text">{status}</p>
        <video
          ref={videoRef}
          width="300"
          height="260"
          className="video-element"
          muted
        />
      </div>
      <div className="btn-row">
        <h1>Live Mood Detection</h1>
        <p>Your current mood is being analyzed in <br />real-time. Enjoy music tailored to your feelings.</p>
        <button
          className="primary-btn"
          onClick={detectMood}
        >
          Detect Mood
        </button>
      </div>
    </div>
  );
}