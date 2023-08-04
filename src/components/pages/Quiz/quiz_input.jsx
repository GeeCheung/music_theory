import React from "react";
import { ToastContainer } from "react-toastify";
import Buttons from "../../Buttons";

const Quiz_input = ({ handleAddValue, scaleKeys }) => {
  return (
    <div>
      <p className="quiz_type"> Select Keys:</p>

      <div className="keyselection">
        <Buttons
          color={"light"}
          text={"C"}
          onClick={() => handleAddValue("C")}
        ></Buttons>
        <Buttons
          color={"light"}
          text={"D"}
          onClick={() => handleAddValue("D")}
        ></Buttons>
        <Buttons
          color={"light"}
          text={"E"}
          onClick={() => handleAddValue("E")}
        ></Buttons>
        <Buttons
          color={"light"}
          text={"F"}
          onClick={() => handleAddValue("F")}
        ></Buttons>
        <Buttons
          color={"light"}
          text={"G"}
          onClick={() => handleAddValue("G")}
        ></Buttons>
        <Buttons
          color={"light"}
          text={"A"}
          onClick={() => handleAddValue("A")}
        ></Buttons>
        <Buttons
          color={"light"}
          text={"Ab"}
          onClick={() => handleAddValue("Ab")}
        ></Buttons>
        <Buttons
          color={"light"}
          text={"Bb"}
          onClick={() => handleAddValue("Bb")}
        ></Buttons>
        <Buttons
          color={"light"}
          text={"C#"}
          onClick={() => handleAddValue("C#")}
        ></Buttons>
        <Buttons
          color={"light"}
          text={"Eb"}
          onClick={() => handleAddValue("Eb")}
        ></Buttons>
        <Buttons
          color={"light"}
          text={"F#"}
          onClick={() => handleAddValue("F#")}
        ></Buttons>
      </div>

      <p className="quiz_type">{scaleKeys}</p>

      <ToastContainer position="top-center" />
    </div>
  );
};

export default Quiz_input;
