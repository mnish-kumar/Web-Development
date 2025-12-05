import { useState } from 'react';
import FaceEmotion from './components/FacialExpression'
import MoodSongs from './components/MoodSongs'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {


  const [songs, setsongs] = useState([
    {
      title: "After fetch songs present here",
      artist: "Firstly fetch songs",
      url: "test_url",
    },
  ]);

  return (
    <div className="app-shell">
      <FaceEmotion setsongs = {setsongs}/>
      <MoodSongs songs = {songs}/>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App