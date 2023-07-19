import React from 'react';
import Button from './Button';


const StoreNote = ({ note, setNote }) => {
  return (
    <div>
      <h3>Notes</h3>
      <Button text={"C"} onClick={() => setNote("C")}></Button>
      <Button text={"Db"} onClick={() => setNote("Db")}></Button>
      <Button text={"D"} onClick={() => setNote("D")}></Button>
      <Button text={"Eb"} onClick={() => setNote("Eb")}></Button>
      <Button text={"E"} onClick={() => setNote("E")}></Button>
      <Button text={"F"} onClick={() => setNote("F")}></Button>
      <Button text={"Gb"} onClick={() => setNote("Gb")}></Button>
      <Button text={"G"} onClick={() => setNote("G")}></Button>
      <Button text={"Ab"} onClick={() => setNote("Ab")}></Button>
      <Button text={"A"} onClick={() => setNote("A")}></Button>
      <Button text={"Bb"} onClick={() => setNote("Bb")}></Button>
      <Button text={"B"} onClick={() => setNote("B")}></Button>
      <p>Stored note: {note}</p>
    </div>
  );
};

export default StoreNote;
