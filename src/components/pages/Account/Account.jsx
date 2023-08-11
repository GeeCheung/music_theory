import "bootstrap/dist/css/bootstrap.min.css";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase-config";
import StoreChords from "../../Chords/Chords";
import DisplayValueBox from "../../DisplayValue.js";
import Footer from "../../Footer/Footer";
import Topnavbar from "../../Navbars/TopNavbar";
import StoreNote from "../../Notes/Note.js";
import Piano_hear from "../../Play_Piano/Piano";
import StoreScales from "../../Scales/Scales";
import "./Account.css";

const Account = () => {
  const [musictheory, setMusictheory] = useState([]);
  const [note, setNote] = useState();
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
    <div className="accountpage">
      <Topnavbar />

      <div>
        <StoreNote note={note} setNote={setNote} />
        <StoreChords
          note={note}
          textValue={textValue}
          setTextValue={setTextValue}
          musictheory={musictheory}
          setnoteArray={setnoteArray}
        />
        <StoreScales
          note={note}
          musictheory={musictheory}
          setTextValue={setTextValue}
          setnoteArray={setnoteArray}
        />
        <DisplayValueBox value={textValue} />
        <Piano_hear />
      </div>
      <Footer />
    </div>
  );
};

export default Account;
