import { React, useState } from "react";
import Buttons from "../Buttons";
import "./Note.css";

const StoreNote = ({ setNote, note }) => {
  const [selectedNote, setSelectedNote] = useState("");

  const handleNoteClick = (note) => {
    setSelectedNote(note);
    setNote(note);
  };

  const noteOptions = [
    "C",
    "C#",
    "D",
    "Eb",
    "E",
    "F",
    "F#",
    "G",
    "Ab",
    "A",
    "Bb",
    "B",
  ];

  return (
    <div>
      <select
        className="note-dropdown"
        value={selectedNote}
        onChange={(e) => handleNoteClick(e.target.value)}
      >
        <option value="">Select a note</option>
        {noteOptions.map((noteOption) => (
          <option key={noteOption} value={noteOption}>
            {noteOption}
          </option>
        ))}
      </select>

      <div className="notes">
        <Buttons
          color={"dark"}
          text={"C"}
          id={"C"}
          note={note}
          selectedNote={selectedNote}
          onClick={() => handleNoteClick("C")}
        ></Buttons>
        <Buttons
          color={"dark"}
          text={"C#"}
          id={"C#"}
          note={note}
          selectedNote={selectedNote}
          onClick={() => handleNoteClick("C#")}
        ></Buttons>
        <Buttons
          color={"dark"}
          text={"D"}
          id={"D"}
          note={note}
          selectedNote={selectedNote}
          onClick={() => handleNoteClick("D")}
        ></Buttons>
        <Buttons
          color={"dark"}
          text={"Eb"}
          id={"Eb"}
          note={note}
          selectedNote={selectedNote}
          onClick={() => handleNoteClick("Eb")}
        ></Buttons>
        <Buttons
          color={"dark"}
          text={"E"}
          id={"E"}
          note={note}
          selectedNote={selectedNote}
          onClick={() => handleNoteClick("E")}
        ></Buttons>
        <Buttons
          color={"dark"}
          text={"F"}
          id={"F"}
          note={note}
          selectedNote={selectedNote}
          onClick={() => handleNoteClick("F")}
        ></Buttons>
        <Buttons
          color={"dark"}
          text={"F#"}
          id={"F#"}
          note={note}
          selectedNote={selectedNote}
          onClick={() => handleNoteClick("F#")}
        ></Buttons>
        <Buttons
          color={"dark"}
          text={"G"}
          id={"G"}
          note={note}
          selectedNote={selectedNote}
          onClick={() => handleNoteClick("G")}
        ></Buttons>
        <Buttons
          color={"dark"}
          text={"Ab"}
          id={"Ab"}
          note={note}
          selectedNote={selectedNote}
          onClick={() => handleNoteClick("Ab")}
        ></Buttons>
        <Buttons
          color={"dark"}
          text={"A"}
          id={"A"}
          note={note}
          selectedNote={selectedNote}
          onClick={() => handleNoteClick("A")}
        ></Buttons>
        <Buttons
          color={"dark"}
          text={"Bb"}
          id={"Bb"}
          note={note}
          selectedNote={selectedNote}
          onClick={() => handleNoteClick("Bb")}
        ></Buttons>
        <Buttons
          color={"dark"}
          text={"B"}
          id={"B"}
          note={note}
          selectedNote={selectedNote}
          onClick={() => handleNoteClick("B")}
        ></Buttons>
      </div>
    </div>
  );
};

export default StoreNote;
