import { React, useState } from "react";
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
    </div>
  );
};

export default StoreNote;
