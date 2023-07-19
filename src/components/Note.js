import React from 'react';
import Buttons from './Buttons';


const StoreNote = ({ note, setNote }) => {
  return (
    <div>
      <h3>Notes</h3>
      <Buttons text={"C"} onClick={() => setNote("C")}></Buttons>
      <Buttons text={"Db"} onClick={() => setNote("Db")}></Buttons>
      <Buttons text={"D"} onClick={() => setNote("D")}></Buttons>
      <Buttons text={"Eb"} onClick={() => setNote("Eb")}></Buttons>
      <Buttons text={"E"} onClick={() => setNote("E")}></Buttons>
      <Buttons text={"F"} onClick={() => setNote("F")}></Buttons>
      <Buttons text={"Gb"} onClick={() => setNote("Gb")}></Buttons>
      <Buttons text={"G"} onClick={() => setNote("G")}></Buttons>
      <Buttons text={"Ab"} onClick={() => setNote("Ab")}></Buttons>
      <Buttons text={"A"} onClick={() => setNote("A")}></Buttons>
      <Buttons text={"Bb"} onClick={() => setNote("Bb")}></Buttons>
      <Buttons text={"B"} onClick={() => setNote("B")}></Buttons>
      <p>Stored note: {note}</p>
    </div>
  );
};

export default StoreNote;
