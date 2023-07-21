import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import StoreChords from './components/Chords';
import DisplayValueBox from './components/DisplayValue.js';
import Info from './components/InfoText';
import StoreNote from './components/Note.js';
import { Piano } from './components/Piano.js';
import { Piano2 } from './components/Piano_2.js';
import StoreScales from './components/Scales';
import StoreInversion from './components/SetInversion.js';
import { db } from "./firebase-config";


const App = () => {

  const [musictheory,setMusictheory] = useState([]);
  var [note, setNote] = useState();
  var [inversion, setInversion] = useState();
  var [textValue, setTextValue] = useState();
  var [noteArray, setnoteArray] = useState([]);

  const musicnotesCollectionRef = collection(db, "musicnotes");

  useEffect (() => {
     
    const getMusicnotes = async () => {
      const data = await getDocs(musicnotesCollectionRef);
      console.log(data);
      setMusictheory(data.docs.map((doc) => ({ ...doc.data() , id: doc.id })));
    };
   
    getMusicnotes();
  }, []);

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