import { React, useState } from 'react';
import Buttons from './Buttons';

const StoreNote = ({ note, setNote }) => {
  
  const [selectedNote, setSelectedNote] = useState('');

  const handleNoteClick = (note) => {
    setSelectedNote(note);
    setNote(note);

  };

  return (
    <div>
      <h3>Notes</h3>
      <Buttons text={"C"}  selectedNote={selectedNote}  onClick={() => handleNoteClick("C")}></Buttons>
      <Buttons text={"Db"} selectedNote={selectedNote}  onClick={() => handleNoteClick("Db")}></Buttons>
      <Buttons text={"D"} selectedNote={selectedNote} onClick={() => handleNoteClick("D")}></Buttons>
      <Buttons text={"Eb"} selectedNote={selectedNote} onClick={() => handleNoteClick("Eb")}></Buttons>
      <Buttons text={"E"}  selectedNote={selectedNote} onClick={() => handleNoteClick("E")}></Buttons>
      <Buttons text={"F"}  selectedNote={selectedNote}onClick={() => handleNoteClick("F")}></Buttons>
      <Buttons text={"Gb"} selectedNote={selectedNote} onClick={() => handleNoteClick("Gb")}></Buttons>
      <Buttons text={"G"}  selectedNote={selectedNote} onClick={() => handleNoteClick("G")}></Buttons>
      <Buttons text={"Ab"} selectedNote={selectedNote} onClick={() => handleNoteClick("Ab")}></Buttons>
      <Buttons text={"A"}  selectedNote={selectedNote} onClick={() => handleNoteClick("A")}></Buttons>
      <Buttons text={"Bb"} selectedNote={selectedNote} onClick={() => handleNoteClick("Bb")}></Buttons>
      <Buttons text={"B"}  selectedNote={selectedNote} onClick={() => handleNoteClick("B")}></Buttons>
    </div>
  );
};

export default StoreNote;
