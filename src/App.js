import React, { useState } from 'react';
import StoreChords from './components/Chords';
import DisplayValueBox from './components/DisplayValue.js';
import Info from './components/InfoText';
import StoreNote from './components/Note.js';
import { Piano } from './components/Piano.js';
import { Piano2 } from './components/Piano_2.js';
import StoreScales from './components/Scales';
import StoreInversion from './components/SetInversion.js';


const App = () => {

  const [musictheory] = useState([
      {
        "C" : "C D E F G A B",
        "Db" : "Db Eb F Gb Ab Bb C",
        "D" : "D E Gb G A B Db",
        "Eb" : "Eb F G Ab Bb C D",
        "E" : "E Gb Ab A B Db Eb",
        "F" : "F G A Bb C D E",
        "Gb" : "Gb Ab Bb Cb Db Eb F",
        "G" : "G A B C D E Eb",
        "Ab" : "Ab Bb C Db Eb F G",
        "A" : "A B Db D E Gb Ab",
        "Bb" : "Bb C D Eb F G A",
        "B" : "B Db Eb E Gb Ab Bb",
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
  var [noteArray, setnoteArray] = useState([]);

  return (
    <div className="App">
      <h1>Music Theory</h1>
      <StoreNote note={note} setNote={setNote} />
      <StoreInversion inversion={inversion} setInversion={setInversion} />
      <StoreChords note={note} inversion={inversion} textValue={textValue} setTextValue={setTextValue}
                   musictheory={musictheory} setnoteArray={setnoteArray}/>
      <StoreScales note={note} musictheory={musictheory} setTextValue={setTextValue} setnoteArray={setnoteArray} />
      <DisplayValueBox value={textValue}/>      
      <Piano2 noteArray={noteArray} />
      <Piano />
      <Info />
    </div>
  );
}

export default App;