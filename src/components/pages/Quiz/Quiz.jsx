import "bootstrap/dist/css/bootstrap.min.css";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../../../firebase-config";
import Buttons from "../../Buttons";
import DisplayValueBox from "../../DisplayValue.js";
import Footer from "../../Footer/Footer";
import Topnavbar from "../../Navbars/TopNavbar";
import Cheat from "./cheat";
import Quizinfo from "./quiz_info";
import Quiz_input from "./quiz_input";
import Score from "./score";
import Timer from "./timer";

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

  const StartQuiz = () => {
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

  const resetkeys = () => {
    setTime(0);
    setTimerOn(false);
    setQuizResult("");
    setQuestion(0);
    setScore(0);
    setNote();
    setscaleKeys([]);
    setKeyvalues([]);
    setInputValues(["", "", "", "", "", "", ""]);
    setCheat("");
  };

  const handleInputChange = (event, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value.trim();
    setInputValues(newInputValues);
  };

  const handleNewQ = () => {
    const randomIndex = Math.floor(Math.random() * scaleKeys.length);
    const randomKey = scaleKeys[randomIndex];

    getScalekey(randomKey, `${selectquiz}`);
    setQuizResult("");
    setInputValues(["", "", "", "", "", "", ""]);
    setCheat("");
    setTimerOn(true);
    setTime(0);
  };

  const handleQuizCheck = () => {
    if (note) {
      const isCorrect = inputValues.every(
        (value, index) => value === keyvalues[index]
      );
      handleQuestions();
      setQuizResult(isCorrect ? "Correct!" : "Incorrect!");
      setTimerOn(isCorrect ? false : true);
      if (isCorrect) {
        handleCorrectAnswer();
        handleNewQ();
      }
    }
  };

  const handleCheat = () => {
    if (keyvalues) {
      setCheat(`${keyvalues.join(" ")}`);
    }
  };

  const handleAddValue = (value) => {
    if (scaleKeys.includes(value)) {
      return;
    }
    setscaleKeys((prevValues) => [...prevValues, value]);
  };

  const handleCorrectAnswer = () => {
    setScore(score + 1);
  };

  const handleQuestions = () => {
    setQuestion(question + 1);
  };

  useEffect(() => {
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
      <div className="containerquiz">
        <h1 className="quiztitle">Quiz</h1>
        <div className="quiz_type">
          <select
            className="chords"
            value={selectquiz}
            onChange={(e) => setSelectQuiz(e.target.value)}
          >
            <option value="Major">Major</option>
            <option value="Minor">Minor</option>
          </select>
        </div>
        <div className="chords">
          {" "}
          <Buttons color={"light"} text={"Start"} onClick={StartQuiz}></Buttons>
          <Buttons color={"light"} text={"Reset"} onClick={resetkeys}></Buttons>
        </div>
        <DisplayValueBox value={note} />
        <div className="inputsquiz">
          {" "}
          {inputValues.map((inputValue, index) => (
            <label key={index} className="inputvalues">
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
        <Cheat handleCheat={handleCheat} cheat={cheat} />
        <p className="checkanwerresult">{quizResult}</p>
        <Score score={score} question={question} />
        <Timer time={time} />
        <div className="keyselection">
          {" "}
          <Quiz_input handleAddValue={handleAddValue} scaleKeys={scaleKeys} />
        </div>
        <Quizinfo />
      </div>
      <Footer />
    </div>
  );
};

export default Quiz;
