import React from "react";
import { ToastContainer } from "react-toastify";
import Buttons from "../../Buttons";

const Quiz_input = ({ handleAddValue, scaleKeys }) => {
  const isKeySelected = (key) => scaleKeys.includes(key);
  return (
    <div>
      <div className="keyselection-div">
        <div className="keyselection-column">
          <Buttons
            color={isKeySelected("C") ? "danger" : "light"}
            text={"C"}
            onClick={() => handleAddValue("C")}
          ></Buttons>
          <Buttons
            color={isKeySelected("D") ? "danger" : "light"}
            text={"D"}
            onClick={() => handleAddValue("D")}
          ></Buttons>
          <Buttons
            color={isKeySelected("E") ? "danger" : "light"}
            text={"E"}
            onClick={() => handleAddValue("E")}
          ></Buttons>
        </div>
        <div className="keyselection-column">
          <Buttons
            color={isKeySelected("F") ? "danger" : "light"}
            text={"F"}
            onClick={() => handleAddValue("F")}
          ></Buttons>
          <Buttons
            color={isKeySelected("G") ? "danger" : "light"}
            text={"G"}
            onClick={() => handleAddValue("G")}
          ></Buttons>
          <Buttons
            color={isKeySelected("A") ? "danger" : "light"}
            text={"A"}
            onClick={() => handleAddValue("A")}
          ></Buttons>
        </div>
        <div className="keyselection-column">
          <Buttons
            color={isKeySelected("Ab") ? "danger" : "light"}
            text={"Ab"}
            onClick={() => handleAddValue("Ab")}
          ></Buttons>
          <Buttons
            color={isKeySelected("Bb") ? "danger" : "light"}
            text={"Bb"}
            onClick={() => handleAddValue("Bb")}
          ></Buttons>
          <Buttons
            color={isKeySelected("C#") ? "danger" : "light"}
            text={"C#"}
            onClick={() => handleAddValue("C#")}
          ></Buttons>
        </div>
        <div className="keyselection-column">
          <Buttons
            color={isKeySelected("Eb") ? "danger" : "light"}
            text={"Eb"}
            onClick={() => handleAddValue("Eb")}
          ></Buttons>
          <Buttons
            color={isKeySelected("F#") ? "danger" : "light"}
            text={"F#"}
            onClick={() => handleAddValue("F#")}
          ></Buttons>
          <Buttons
            color={isKeySelected("B") ? "danger" : "light"}
            text={"B"}
            onClick={() => handleAddValue("B")}
          ></Buttons>

          <ToastContainer position="top-center" />
        </div>
      </div>
    </div>
  );
};

export default Quiz_input;
