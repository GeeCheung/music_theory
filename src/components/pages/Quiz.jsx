import "bootstrap/dist/css/bootstrap.min.css";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../firebase-config";
import Buttons from "../Buttons";
import DisplayValueBox from "../DisplayValue.js";
import Topnavbar from "../Sidebar/Sidebar";

const Quiz = () => {
  const musicnotesCollectionRef = collection(db, "musicnotes");
  const [scalequiz, setScalequiz] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [inputValue4, setInputValue4] = useState("");
  const [inputValue5, setInputValue5] = useState("");
  const [inputValue6, setInputValue6] = useState("");
  const [inputValue7, setInputValue7] = useState("");

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
    "F#",
    "F#/Gb",
  ];

  const [keyvalues, setKeyvalues] = useState("");
  const [note, setNote] = useState();
  const [quizResult, setQuizResult] = useState("");
  const [cheat, setCheat] = useState("");

  useEffect(() => {
    const getMusicnotes = async () => {
      const data = await getDocs(musicnotesCollectionRef);
      console.log(data.docs);
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
        setNote(note);
      }
    });
  };

  const handleInputChange = (event, inputNumber) => {
    const inputValue = event.target.value;
    switch (inputNumber) {
      case 1:
        setInputValue(inputValue);
        break;
      case 2:
        setInputValue2(inputValue);
        break;
      case 3:
        setInputValue3(inputValue);
        break;
      case 4:
        setInputValue4(inputValue);
        break;
      case 5:
        setInputValue5(inputValue);
        break;
      case 6:
        setInputValue6(inputValue);
        break;
      case 7:
        setInputValue7(inputValue);
        break;
      default:
        break;
    }
  };

  const handleQuizCheck = () => {
    if (
      keyvalues[0] === inputValue &&
      keyvalues[1] === inputValue2 &&
      keyvalues[2] === inputValue3 &&
      keyvalues[3] === inputValue4 &&
      keyvalues[4] === inputValue5 &&
      keyvalues[5] === inputValue6 &&
      keyvalues[6] === inputValue7
    ) {
      setQuizResult("Success!");
    } else {
      setQuizResult("Incorrect!");
    }
  };

  const handleCheat = () => {
    if (keyvalues) {
      setCheat(`${keyvalues.join(" ")}`);
    }
  };

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * scaleKeys.length);
    const randomKey = scaleKeys[randomIndex];
    getScalekey(randomKey, "Major");
    setCheat("");
    setQuizResult("");
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

      <div className="chords">
        <Buttons
          color={"light"}
          text={"Get random key"}
          onClick={handleClick}
        ></Buttons>
      </div>
      <div>
        <DisplayValueBox value={note} />
      </div>
      <div className="chords">
        <label>
          1st{" "}
          <input
            className="inputquiz"
            type="text"
            value={inputValue}
            name="myInput"
            onChange={(event) => handleInputChange(event, 1)}
          />{" "}
        </label>
        <label>
          2nd{" "}
          <input
            className="inputquiz"
            type="text"
            value={inputValue2}
            name="myInput"
            onChange={(event) => handleInputChange(event, 2)}
          />{" "}
        </label>
        <label>
          3rd{" "}
          <input
            className="inputquiz"
            type="text"
            value={inputValue3}
            name="myInput"
            onChange={(event) => handleInputChange(event, 3)}
          />{" "}
        </label>
        <label>
          4th{" "}
          <input
            className="inputquiz"
            type="text"
            value={inputValue4}
            name="myInput"
            onChange={(event) => handleInputChange(event, 4)}
          />{" "}
        </label>
        <label>
          5th{" "}
          <input
            className="inputquiz"
            type="text"
            value={inputValue5}
            name="myInput"
            onChange={(event) => handleInputChange(event, 5)}
          />{" "}
        </label>
        <label>
          6th{" "}
          <input
            className="inputquiz"
            type="text"
            value={inputValue6}
            name="myInput"
            onChange={(event) => handleInputChange(event, 6)}
          />{" "}
        </label>
        <label>
          7th{" "}
          <input
            className="inputquiz"
            type="text"
            value={inputValue7}
            name="myInput"
            onChange={(event) => handleInputChange(event, 7)}
          />{" "}
        </label>
      </div>
      <div className="chords">
        <Buttons
          color={"light"}
          text={"Check your answers"}
          onClick={handleQuizCheck}
        ></Buttons>
      </div>
      <div className="chords">
        <Buttons color={"light"} text={"cheat"} onClick={handleCheat}></Buttons>
      </div>
      <p
        style={{
          justifyContent: "center",
          display: "flex",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        {cheat}
      </p>
      <p
        style={{
          color: quizResult === "Success!" ? "green" : "red",
          justifyContent: "center",
          display: "flex",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        {quizResult}
      </p>
    </div>
  );
};

export default Quiz;
