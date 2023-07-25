import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase-config";
import StoreChords from '../Chords';
import DisplayValueBox from '../DisplayValue.js';
import StoreNote from '../Note.js';
import { Piano } from '../Piano.js';
import { Piano2 } from '../Piano_2.js';
import StoreScales from '../Scales';

const Account = () => {

  const{user, logout} = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };
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
      <br />
      <div className="contentDiv">
      <p> User email: {user && user.email}</p>
      <button style={{width: "100px"}}  onClick={handleLogout} >Logout</button>
        <StoreNote note={note} setNote={setNote} />
       {/*  <StoreInversion inversion={inversion} setInversion={setInversion} /> */}
        <StoreChords note={note} inversion={inversion} textValue={textValue} setTextValue={setTextValue}
                    musictheory={musictheory} setnoteArray={setnoteArray}/>
        <StoreScales note={note} musictheory={musictheory} setTextValue={setTextValue} setnoteArray={setnoteArray} />
        
      </div>

      <div className="pianoDiv1">
      <DisplayValueBox value={textValue} /> 
      </div>
      

      <div className="pianoDiv1">
        <Piano2 noteArray={noteArray} />
        <Piano />
      </div>
    </div>
  )
}

export default Account
