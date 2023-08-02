import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import Buttons from "../Buttons";
import DisplayValueBox from "../DisplayValue.js";
import Footer from "../Footer/Footer";
import Topnavbar from "../Navbars/TopNavbar";

const Quiz = () => {
  const [scalequiz, setScalequiz] = useState([]);
  const [note, setNote] = useState("");
  const [quizResult, setQuizResult] = useState("");
  const [cheat, setCheat] = useState("");
  const [inputValues, setInputValues] = useState(["", "", "", "", "", "", ""]);
  const [keyvalues, setKeyvalues] = useState([]);
  const [selectquiz, setSelectQuiz] = useState("Major");
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

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
    "Eb",
    "F#",
    "C#",
  ];

  useEffect(() => {
    const musicnotesCollectionRef = collection(db, "musicnotes");
    const getMusicnotes = async () => {
      const data = await getDocs(musicnotesCollectionRef);
      setScalequiz(data.docs);
    };
    getMusicnotes();
  }, []);

  const getScalekey = (note, scales) => {
    scalequiz.forEach((document) => {
      if (document["id"] === scales) {
        const getkey =
          document._document.data.value.mapValue.fields[note].stringValue.split(
            " "
          );
        setKeyvalues(getkey);
        setNote(note);
        setCheat(getkey.join(" "));
      }
    });
  };

  const handleInputChange = (event, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  };

  const handleQuizCheck = () => {
    const isCorrect = inputValues.every(
      (value, index) => value === keyvalues[index]
    );
    setQuizResult(isCorrect ? "Correct!" : "Incorrect!");
    setTimerOn(isCorrect ? false : true);
  };

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * scaleKeys.length);
    const randomKey = scaleKeys[randomIndex];
    getScalekey(randomKey, `${selectquiz}`);
    setQuizResult("");
    setCheat("");
    setInputValues(["", "", "", "", "", "", ""]);
    setTimerOn(true);
    setTime(0);
  };

  const handleCheat = () => {
    if (keyvalues) {
      setCheat(`${keyvalues.join(" ")}`);
    }
  };

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div>
      <Topnavbar />
      <h1
        style={{ justifyContent: "center", display: "flex", marginTop: "50px" }}
      >
        Quiz
      </h1>

      <div className="chords">
        {" "}
        <select
          value={selectquiz}
          onChange={(e) => setSelectQuiz(e.target.value)}
        >
          <option>Major</option>
          <option>Minor</option>
        </select>
      </div>

      <div className="chords">
        <Buttons
          color={"light"}
          text={"Get random key"}
          onClick={handleClick}
        />
      </div>
      <div>
        <DisplayValueBox value={note} />
      </div>
      <div className="chords">
        {inputValues.map((inputValue, index) => (
          <label
            key={index}
            style={{ marginLeft: "10px", textAlign: "center" }}
          >
            {index + 1}{" "}
            <input
              className="inputquiz"
              type="text"
              value={inputValue}
              name={`myInput${index}`}
              onChange={(event) => handleInputChange(event, index)}
            />
          </label>
        ))}
      </div>
      <div className="chords">
        <Buttons
          color={"light"}
          text={"Check your answers"}
          onClick={handleQuizCheck}
        />
      </div>
      <div className="chords">
        <Buttons color={"light"} text={"cheat"} onClick={handleCheat} />
      </div>
      <p
        style={{
          justifyContent: "center",
          display: "flex",
          fontWeight: "bold",
          fontSize: "20px",
          margin: "0px",
          padding: "0px",
        }}
      >
        {cheat}
      </p>
      <p
        style={{
          color: quizResult === "Correct!" ? "green" : "red",
          justifyContent: "center",
          display: "flex",
          fontWeight: "bold",
          fontSize: "50px",
          margin: "0px",
          padding: "0px",
        }}
      >
        {quizResult}
      </p>
      <div className="timer">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="App">
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default Quiz;
