import React from "react";
import { ToastContainer } from "react-toastify";
import Buttons from "../../Buttons";

const QuizInput = ({ handleAddValue, scaleKeys }) => {
  const isKeySelected = (key) => scaleKeys.includes(key);
  return (
    <div>
      <div className="keyselection-div">
        <div className="keyselection-column">
          <Buttons
            color={isKeySelected("C") ? "dark" : "light"}
            text={"C"}
            onClick={() => handleAddValue("C")}
          ></Buttons>
          <Buttons
            color={isKeySelected("D") ? "dark" : "light"}
            text={"D"}
            onClick={() => handleAddValue("D")}
          ></Buttons>
          <Buttons
            color={isKeySelected("E") ? "dark" : "light"}
            text={"E"}
            onClick={() => handleAddValue("E")}
          ></Buttons>
        </div>
        <div className="keyselection-column">
          <Buttons
            color={isKeySelected("F") ? "dark" : "light"}
            text={"F"}
            onClick={() => handleAddValue("F")}
          ></Buttons>
          <Buttons
            color={isKeySelected("G") ? "dark" : "light"}
            text={"G"}
            onClick={() => handleAddValue("G")}
          ></Buttons>
          <Buttons
            color={isKeySelected("A") ? "dark" : "light"}
            text={"A"}
            onClick={() => handleAddValue("A")}
          ></Buttons>
        </div>
        <div className="keyselection-column">
          <Buttons
            color={isKeySelected("Ab") ? "dark" : "light"}
            text={"Ab"}
            onClick={() => handleAddValue("Ab")}
          ></Buttons>
          <Buttons
            color={isKeySelected("Bb") ? "dark" : "light"}
            text={"Bb"}
            onClick={() => handleAddValue("Bb")}
          ></Buttons>
          <Buttons
            color={isKeySelected("C#") ? "dark" : "light"}
            text={"C#"}
            onClick={() => handleAddValue("C#")}
          ></Buttons>
        </div>
        <div className="keyselection-column">
          <Buttons
            color={isKeySelected("Eb") ? "dark" : "light"}
            text={"Eb"}
            onClick={() => handleAddValue("Eb")}
          ></Buttons>
          <Buttons
            color={isKeySelected("F#") ? "dark" : "light"}
            text={"F#"}
            onClick={() => handleAddValue("F#")}
          ></Buttons>
          <Buttons
            color={isKeySelected("B") ? "dark" : "light"}
            text={"B"}
            onClick={() => handleAddValue("B")}
          ></Buttons>

          <ToastContainer position="top-center" />
        </div>
      </div>
    </div>
  );
};

export default QuizInput;
