import "bootstrap/dist/css/bootstrap.min.css";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
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
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(0);
  const [scaleKeys, setscaleKeys] = useState([]);

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

  const handleCorrectAnswer = () => {
    setScore(score + 1);
  };

  const handleQuestions = () => {
    setQuestion(question + 1);
  };
  const handleInputChange = (event, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  };

  const handleQuizCheck = () => {
    if (note) {
      const isCorrect = inputValues.every(
        (value, index) => value === keyvalues[index]
      );
      handleQuestions();
      //map thru all inputs by input name, check each input value to their keyvalue, if correct then put border-color - green if wrong then red
      setQuizResult(isCorrect ? "Correct!" : "Incorrect!");
      setTimerOn(isCorrect ? false : true);
      if (isCorrect) {
        handleCorrectAnswer();
        handleNewQ();
      }
    }
  };

  const handleClick = () => {
    if (scaleKeys.length != 0) {
      const randomIndex = Math.floor(Math.random() * scaleKeys.length);
      const randomKey = scaleKeys[randomIndex];
      getScalekey(randomKey, `${selectquiz}`);
      setQuizResult("");
      setCheat("");
      setInputValues(["", "", "", "", "", "", ""]);
      setTimerOn(true);
      setTime(0);
      setScore(0);
      setQuestion(0);
    } else {
      toast.error("Please Select at least 1 Key");
    }
  };

  const handleNewQ = (note) => {
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

  const handleAddValue = (value) => {
    if (scaleKeys.includes(value)) {
      return;
    }
    setscaleKeys((prevValues) => [...prevValues, value]);
  };

  const resetkeys = () => {
    setTime(0);
    setTimerOn(false);
    setQuizResult("");
    setCheat("");
    setQuestion(0);
    setScore(0);
    setNote();
    setscaleKeys([]);
  };

  return (
    <div>
      <Topnavbar />
      <div className="containerquiz">
        <h1
          style={{
            justifyContent: "center",
            display: "flex",
            marginTop: "50px",
          }}
        >
          Quiz
        </h1>
        <div className="quiz_type">
          <select
            className="form-select w-25 p-3 border rounded"
            value={selectquiz}
            onChange={(e) => setSelectQuiz(e.target.value)}
          >
            <option value="Major">Major</option>
            <option value="Minor">Minor</option>
          </select>

          <Button variant="light" onClick={handleClick}>
            Start
          </Button>
          <Buttons color={"light"} text={"Reset"} onClick={resetkeys}></Buttons>
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
            fontSize: "35px",
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
        <div className="timer">
          <p>
            Score: {score}/{question}
          </p>
        </div>
      </div>
      <p className="keyselection"> Select Keys:</p>
      <div className="keyselection">
        <Buttons
          color={"light"}
          text={"C"}
          onClick={() => handleAddValue("C")}
        ></Buttons>
        <Buttons
          color={"light"}
          text={"D"}
          onClick={() => handleAddValue("D")}
        ></Buttons>
        <Buttons
          color={"light"}
          text={"E"}
          onClick={() => handleAddValue("E")}
        ></Buttons>
        <Buttons
          color={"light"}
          text={"F"}
          onClick={() => handleAddValue("F")}
        ></Buttons>
        <Buttons
          color={"light"}
          text={"G"}
          onClick={() => handleAddValue("G")}
        ></Buttons>
        <Buttons
          color={"light"}
          text={"A"}
          onClick={() => handleAddValue("A")}
        ></Buttons>
        <Buttons
          color={"light"}
          text={"B"}
          onClick={() => handleAddValue("B")}
        ></Buttons>
      </div>
      <p className="keyselection">{scaleKeys}</p>
      <ToastContainer position="top-center" />

      <div className="App">
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default Quiz;
