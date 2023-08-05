import React from "react";
import Buttons from "../../Buttons";

const Cheat = ({ cheat, handleCheat, disabled }) => {
  return (
    <div>
      <div className="chords">
        <Buttons
          disabled={disabled}
          color={"light"}
          text={"Cheat"}
          onClick={handleCheat}
        />
      </div>

      <p className="cheattext">{cheat}</p>
    </div>
  );
};

export default Cheat;
