import "bootstrap/dist/css/bootstrap.min.css";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import StoreChords from "../Chords";
import DisplayValueBox from "../DisplayValue.js";
import StoreNote from "../Note.js";
import { Piano2 } from "../Piano_2.js";
import StoreScales from "../Scales";
import Topnavbar from "../Sidebar/Sidebar";

const Account = () => {
  const [musictheory, setMusictheory] = useState([]);
  const [note, setNote] = useState();
  const [inversion, setInversion] = useState();
  const [textValue, setTextValue] = useState();
  const [noteArray, setnoteArray] = useState([]);

  const musicnotesCollectionRef = collection(db, "musicnotes");

  useEffect(() => {
    const getMusicnotes = async () => {
      const data = await getDocs(musicnotesCollectionRef);
      setMusictheory(data.docs);
    };

    getMusicnotes();
  }, []);

  return (
    <div>
      <div>
        <Topnavbar />
      </div>

      <div>
        <div className="notes">
          <StoreNote note={note} setNote={setNote} />
        </div>
        <div className="chords">
          <StoreChords
            note={note}
            inversion={inversion}
            textValue={textValue}
            setTextValue={setTextValue}
            musictheory={musictheory}
            setnoteArray={setnoteArray}
          />
        </div>

        <div className="scales">
          <StoreScales
            note={note}
            musictheory={musictheory}
            setTextValue={setTextValue}
            setnoteArray={setnoteArray}
          />
        </div>
      </div>

      <div>
        <DisplayValueBox value={textValue} />
      </div>

      <div className="pianoDiv">
        <Piano2 noteArray={noteArray} />
        {/*    <Piano /> */}
      </div>
    </div>
  );
};

export default Account;
