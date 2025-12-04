import { useState } from "react";
import "./MoodSongs.css";

const MoodSongs = () => {
  const [songs, setsongs] = useState([
    {
      title: "test-title",
      artist: "test-artist",
      url: "test_url",
    },
    {
      title: "test-title-2",
      artist: "test-artist-2",
      url: "test_url_2",
    },
    {
      title: "test-title-3",
      artist: "test-artist-3",
      url: "test_url_3",
    },
  ]);

  return (
    <div className="songs-panel">
      <div className="songs-header">
        <h2>Recommended Songs</h2>
        <span>Mood-based playlist</span>
      </div>
      <div className="songs-list">
        {songs.map((song, index) => (
          <div className="song-card" key={index}>
            <div className="song-meta">
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
            <div className="audio-player">
              <i className="ri-pause-line"></i>
              <i className="ri-play-line"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodSongs;
