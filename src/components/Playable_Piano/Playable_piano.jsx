import React, { useState } from "react";
import "./style.css";

const PlayablePiano = () => {
  const [volume, setVolume] = useState(0.5);
  const [showKeys, setShowKeys] = useState(true);

  const handleVolume = (e) => {
    setVolume(e.target.value);
  };

  const toggleShowKeys = () => {
    setShowKeys(!showKeys);
  };

  const playTune = (key) => {
    const encodedFileName = encodeURIComponent(key);
    const audio = new Audio(`tunes/${encodedFileName}.wav`);

    audio.volume = volume;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    if (clickedKey) {
      clickedKey.classList.add("active");
      setTimeout(() => {
        clickedKey.classList.remove("active");
      }, 150);
    }
  };

  const keys = [
    "c",
    "c#",
    "d",
    "d#",
    "e",
    "f",
    "f#",
    "g",
    "g#",
    "a",
    "a#",
    "b",
  ];

  const pianoKeys = keys.map((key) => (
    <li
      key={key}
      className={`key ${key.includes(["#"]) ? "black" : "white"} ${
        showKeys ? "" : "hide"
      }`}
      data-key={key}
      onClick={() => playTune(key)}
    >
      <span>{showKeys ? key : ""}</span>
    </li>
  ));

  return (
    <div className="wrapper">
      <header>
        <h5 style={{ margin: "0" }}>Playable PIANO</h5>
        <div className="column volume-slider">
          <span>Volume</span>
          <input
            type="range"
            min="0"
            max="1"
            value={volume}
            step="any"
            onChange={handleVolume}
          />
        </div>
        <div className="column keys-checkbox">
          <span>Show Keys</span>
          <input type="checkbox" checked={showKeys} onChange={toggleShowKeys} />
        </div>
      </header>
      <ul className="piano-keys">{pianoKeys}</ul>
    </div>
  );
};

export default PlayablePiano;
