import "bootstrap/dist/css/bootstrap.min.css";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import StoreChords from "../Chords/Chords";
import DisplayValueBox from "../DisplayValue.js";
import Footer from "../Footer/Footer";
import Topnavbar from "../Navbars/TopNavbar";
import StoreNote from "../Notes/Note.js";
import Pianotokey from "../Piano/Piano_2";
import StoreScales from "../Scales/Scales";

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

      <div className="containeraccount">
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
        <Pianotokey noteArray={noteArray} />
        {/*    <Piano /> */}
      </div>
      <br />
      <div className="App">
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default Account;
