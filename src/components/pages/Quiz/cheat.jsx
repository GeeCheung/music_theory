import React, { useState } from "react";
import Buttons from "../../Buttons";

const Cheat = () => {
  const [cheat, setCheat] = useState("");
  const [keyvalues, setKeyvalues] = useState([]);

  const handleCheat = () => {
    if (keyvalues) {
      setCheat(`${keyvalues.join(" ")}`);
    }
  };
  return (
    <div>
      <div className="chords">
        <Buttons color={"light"} text={"cheat"} onClick={handleCheat} />
      </div>

      <p className="cheatbtn">{cheat}</p>
    </div>
  );
};

export default Cheat;
