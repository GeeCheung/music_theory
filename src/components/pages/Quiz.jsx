import "bootstrap/dist/css/bootstrap.min.css";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../firebase-config";
import Buttons from "../Buttons";
import Topnavbar from "../Sidebar/Sidebar";

const Quiz = () => {
  const musicnotesCollectionRef = collection(db, "musicnotes");
  const [scalequiz, setScalequiz] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue4, setInputValue3] = useState("");
  const scaleKeys = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "Ab",
    "Bb",
    "Db",
    "Eb",
    "Gb",
  ];

  const [keyvalues, setKeyvalues] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    const getMusicnotes = async () => {
      const data = await getDocs(musicnotesCollectionRef);
      setScalequiz(data.docs);
    };
    getMusicnotes();
  }, []);

  const getScalekey = (note, scales) => {
    scalequiz.forEach((document) => {
      if (document["id"] === scales) {
        var getkey =
          document._document.data.value.mapValue.fields[note].stringValue.split(
            " "
          );
        setKeyvalues(getkey);
        setNote({ note });
        alert(note);
      }
    });
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputChange1 = (event) => {
    setInputValue2(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInputValue3(event.target.value);
  };
  const handleQuizCheck = () => {
    if (
      keyvalues[0] === inputValue &&
      //keyvalues[1] === inputValue1 &&
      keyvalues[2] === inputValue2 &&
      //keyvalues[3] === inputValue3 &&
      keyvalues[4] === inputValue4
      /*  keyvalues[5] === inputValue5 &&
      keyvalues[6] === inputValue6 */
    ) {
      alert("working");
      toast.success("working"); // why is this showing when going back to piano page
    }
  };

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * scaleKeys.length);
    const randomKey = scaleKeys[randomIndex];
    getScalekey(randomKey, "Major");
  };

  return (
    <div>
      <div>
        <Topnavbar />
      </div>
      <h1
        style={{ justifyContent: "center", display: "flex", marginTop: "50px" }}
      >
        Quiz
      </h1>

      <Buttons
        color={"light"}
        text={"Get random key"}
        onClick={handleClick}
      ></Buttons>

      <label>
        Get 1st degree?{" "}
        <input
          type="text"
          value={inputValue}
          name="myInput"
          onChange={handleInputChange}
        />{" "}
      </label>
      <label>
        Get 3rd degree?{" "}
        <input
          type="text"
          value={inputValue2}
          name="myInput2"
          onChange={handleInputChange1}
        />{" "}
      </label>
      <label>
        Get 5th degree?{" "}
        <input
          type="text"
          value={inputValue4}
          name="myInput3"
          onChange={handleInputChange2}
        />{" "}
      </label>

      <Buttons
        color={"light"}
        text={"is it correct?"}
        onClick={handleQuizCheck}
      ></Buttons>
    </div>
  );
};

export default Quiz;
