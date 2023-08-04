import React from "react";
import Buttons from "../../Buttons";

const Cheat = ({ cheat, handleCheat }) => {
  return (
    <div>
      <div className="chords">
        <Buttons color={"light"} text={"Cheat"} onClick={handleCheat} />
      </div>

      <p className="cheattext">{cheat}</p>
    </div>
  );
};

export default Cheat;
