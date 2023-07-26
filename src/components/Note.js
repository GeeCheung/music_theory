import { React, useState } from "react";
import Buttons from "./Buttons";

const StoreNote = ({ setNote, note }) => {
  const [selectedNote, setSelectedNote] = useState("");

  const handleNoteClick = (note) => {
    setSelectedNote(note);
    setNote(note);
  };

  return (
    <div>
      <h3 className="subh">Notes</h3>
      <div className="subh">
        <Buttons
          color={"light"}
          text={"C"}
          note={note}
          selectedNote={selectedNote}
          onClick={() => handleNoteClick("C")}
        ></Buttons>
        <Buttons
          color={"light"}
          text={"Db"}
          note={note}
          selectedNote={selectedNote}
          onClick={() => handleNoteClick("Db")}
        ></Buttons>
        <Buttons
          color={"light"}
          text={"D"}
          note={note}
          selectedNote={selectedNote}
          onClick={() => handleNoteClick("D")}
        ></Buttons>
        <Buttons
          color={"light"}
          text={"Eb"}
          note={note}
          selectedNote={selectedNote}
          onClick={() => handleNoteClick("Eb")}
        ></Buttons>
        <Buttons
          color={"light"}
          text={"E"}
          note={note}
          selectedNote={selectedNote}
          onClick={() => handleNoteClick("E")}
        ></Buttons>
        <Buttons
          color={"light"}
          text={"F"}
          note={note}
          selectedNote={selectedNote}
          onClick={() => handleNoteClick("F")}
        ></Buttons>
        <Buttons
          color={"light"}
          text={"Gb"}
          note={note}
          selectedNote={selectedNote}
          onClick={() => handleNoteClick("Gb")}
        ></Buttons>
        <Buttons
          color={"light"}
          text={"G"}
          note={note}
          selectedNote={selectedNote}
          onClick={() => handleNoteClick("G")}
        ></Buttons>
        <Buttons
          color={"light"}
          text={"Ab"}
          note={note}
          selectedNote={selectedNote}
          onClick={() => handleNoteClick("Ab")}
        ></Buttons>
        <Buttons
          color={"light"}
          text={"A"}
          note={note}
          selectedNote={selectedNote}
          onClick={() => handleNoteClick("A")}
        ></Buttons>
        <Buttons
          color={"light"}
          text={"Bb"}
          note={note}
          selectedNote={selectedNote}
          onClick={() => handleNoteClick("Bb")}
        ></Buttons>
        <Buttons
          color={"light"}
          text={"B"}
          note={note}
          selectedNote={selectedNote}
          onClick={() => handleNoteClick("B")}
        ></Buttons>
      </div>
    </div>
  );
};

export default StoreNote;
