import React, { useState } from 'react';
import StoreChords from './components/Chords';
import DisplayValueBox from './components/DisplayValue.js';
import Info from './components/InfoText';
import StoreNote from './components/Note.js';
import { Piano } from './components/Piano.js';
import StoreScales from './components/Scales';
import StoreInversion from './components/SetInversion.js';



const App = () => {

  const [musictheory] = useState([
      {
        "C" : "C D E F G A B",
        "Db" : "Db Eb F Gb Ab Bb C",
        "D" : "D E F# G A B C#",
        "Eb" : "Eb F G Ab Bb C D",
        "E" : "E F# G# A B C# D#",
        "F" : "F G A Bb C D E",
        "Gb" : "Gb Ab Bb Cb Db Eb F",
        "G" : "G A B C D E F#",
        "Ab" : "Ab Bb C Db Eb F G",
        "A" : "A B C# D E F# G#",
        "Bb" : "Bb C D Eb F G A",
        "B" : "B C# D# E F# G# A#",
    },
      {
        "C" : "C D Eb F G Ab Bb",
        "Db" : "Db Eb E Gb Ab A B",
        "D" : "D E F G A Bb C",
        "Eb" : "Eb Fb Gb Ab Bb Cb Db",
        "E" : "E Eb G A B C D",
        "F" : "F G Ab Bb C Db Eb",
        "Gb" : "Gb Ab A B Db D E",
        "G" : "G A Bb C D Eb F",
        "Ab" : "Ab Bb B Db Eb E Gb",
        "A" : "A B C D E F G",
        "Bb" : "Bb C Db Eb F Gb Ab",
        "B" : "B Db D E Gb G A",
    }
  ]
);

  var [note, setNote] = useState();
  var [inversion, setInversion] = useState();
  var [textValue, setTextValue] = useState();

  return (
    <div className="App">
      <h1>Music Theory</h1>
      <StoreNote note={note} setNote={setNote} />
      <StoreInversion inversion={inversion} setInversion={setInversion} />
      <StoreChords note={note} inversion={inversion} textValue={textValue} setTextValue={setTextValue} musictheory={musictheory}/>
      <StoreScales note={note} musictheory={musictheory} setTextValue={setTextValue}/>
      <DisplayValueBox value={textValue}/>      
      <Piano />
      <br></br>
      <Info />
    </div>
  );
}

export default App;