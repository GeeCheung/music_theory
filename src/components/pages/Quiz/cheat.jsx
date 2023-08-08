import React from "react";
import Buttons from "../../Buttons";

const Cheat = ({ handleCheat, disabled }) => {
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
    </div>
  );
};

export default Cheat;
