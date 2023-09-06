import React from "react";
import Buttons from "../../Buttons";

const Cheat = ({ handleCheat, disabled }) => {
  return (
    <div>
      <Buttons
        disabled={disabled}
        color={"light"}
        text={"Cheat"}
        onClick={handleCheat}
      />
    </div>
  );
};

export default Cheat;
