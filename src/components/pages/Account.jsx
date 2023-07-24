import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { db } from "../../firebase-config";
import StoreChords from '../Chords';
import DisplayValueBox from '../DisplayValue.js';
import StoreNote from '../Note.js';
import { Piano } from '../Piano.js';
import { Piano2 } from '../Piano_2.js';
import StoreScales from '../Scales';
import StoreInversion from '../SetInversion.js';


const Account = () => {

  const [musictheory,setMusictheory] = useState([]);
  var [note, setNote] = useState();
  var [inversion, setInversion] = useState();
  var [textValue, setTextValue] = useState();
  var [noteArray, setnoteArray] = useState([]);

  const musicnotesCollectionRef = collection(db, "musicnotes");

  useEffect (() => {
     
    const getMusicnotes = async () => {
      const data = await getDocs(musicnotesCollectionRef);
      setMusictheory(data.docs);
    };
   
    getMusicnotes();
  }, []);
  
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Music Theory</h1>
      <div className="contentDiv">
        <StoreNote note={note} setNote={setNote} />
        <StoreInversion inversion={inversion} setInversion={setInversion} />
        <StoreChords note={note} inversion={inversion} textValue={textValue} setTextValue={setTextValue}
                    musictheory={musictheory} setnoteArray={setnoteArray}/>
        <StoreScales note={note} musictheory={musictheory} setTextValue={setTextValue} setnoteArray={setnoteArray} />
        
      </div>
      <DisplayValueBox value={textValue} /> 

      <div className="pianoDiv1">
        <Piano2 noteArray={noteArray} />
      </div>
      <br></br>
      <div className="pianoDiv2">
        <Piano />
      </div>
    </div>
  )
}

export default Account
