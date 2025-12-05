import { useRef, useState } from "react";
import "./MoodSongs.css";

const MoodSongs = ({ songs }) => {
  const audioRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = (index) => {
    // pause any currently playing audio
    if (currentIndex !== null && currentIndex !== index) {
      const prevAudio = audioRefs.current[currentIndex];
      if (prevAudio) prevAudio.pause();
    }

    const audio = audioRefs.current[index];
    if (!audio) return;

    audio.play();
    setCurrentIndex(index);
    setIsPlaying(true);
  };

  const handlePause = (index) => {
    const audio = audioRefs.current[index];
    if (!audio) return;

    audio.pause();
    setIsPlaying(false);
  };

  const handleTogglePlay = (index) => {
    const clickedAudio = audioRefs.current[index];

    // no audio element or no src => do nothing
    if (!clickedAudio || !clickedAudio.src) return;

    if (currentIndex === index && isPlaying) {
      clickedAudio.pause();
      setIsPlaying(false);
      setCurrentIndex(null);
      return;
    }

    if (currentIndex !== null && currentIndex !== index) {
      const prevAudio = audioRefs.current[currentIndex];
      if (prevAudio) {
        prevAudio.pause();
        prevAudio.currentTime = 0;
      }
    }

    clickedAudio.play();
    setCurrentIndex(index);
    setIsPlaying(true);
  };

  return (
    <div className="songs-panel">
      <div className="songs-header">
        <h2>Recommended Songs</h2>
        <span>Mood-based playlist</span>
      </div>
      <div className="songs-list">
        {songs.map((song, index) => (
          <div className="song-card" key={song._id || index}>
            <div className="song-meta">
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
            <div className="audio-player">
              <audio
                ref={(el) => (audioRefs.current[index] = el)}
                src={song.audio}
              />
              {currentIndex === index && isPlaying ? (
                <i
                  className="ri-pause-line"
                  style={{ cursor: "pointer" }}
                  onClick={() => song.audio && handleTogglePlay(index)}
                ></i>
              ) : (
                <i
                  className="ri-play-line"
                  style={{ cursor: "pointer" }}
                  onClick={() => song.audio && handleTogglePlay(index)}
                ></i>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodSongs;