import "bootstrap/dist/css/bootstrap.min.css";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../../../firebase-config";
import Buttons from "../../Buttons";
import DisplayValueBox from "../../DisplayValue.js";
import Footer from "../../Footer/Footer";
import Topnavbar from "../../Navbars/TopNavbar";
import Leaderboard from "./Leaderbaord/Leaderboard";
import "./Quiz.css";
import Cheat from "./cheat";
import Quizinfo from "./quiz_info";
import QuizInput from "./quiz_input";
import Score from "./score";
import Timer from "./timer";

const Quiz = () => {
  const [scalequiz, setScalequiz] = useState([]);
  const [note, setNote] = useState("");
  const [cheat, setCheat] = useState("");
  const [inputValues, setInputValues] = useState(["", "", "", "", "", "", ""]);
  const [keyvalues, setKeyvalues] = useState([]);
  const [selectquiz, setSelectQuiz] = useState("Major");
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(0);
  const [scaleKeys, setscaleKeys] = useState([]);
  const [isCorrect, setIsCorrect] = useState();
  const [disabled, setDisabled] = useState(true);
  const [storedtime, setStoredtime] = useState(0);
  const [storednote, setStorednote] = useState("");

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
    if (scaleKeys.length !== 0) {
      const randomIndex = Math.floor(Math.random() * scaleKeys.length);
      const randomKey = scaleKeys[randomIndex];

      getScalekey(randomKey, `${selectquiz}`);

      setCheat("");
      setInputValues(["", "", "", "", "", "", ""]);
      setTimerOn(true);
      setTime(0);
      setScore(0);
      setQuestion(0);
      setDisabled(false);
    } else {
      toast.error("Please Select at least 1 Key");
    }
  };

  const resetkeys = () => {
    setTime(0);
    setTimerOn(false);

    setQuestion(0);
    setScore(0);
    setNote();
    setscaleKeys([]);
    setKeyvalues([]);
    setInputValues(["", "", "", "", "", "", ""]);
    setCheat("");
    setDisabled(true);
  };

  const handleInputChange = (event, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value.trim();
    setInputValues(newInputValues);
  };

  const handleNewQ = (note) => {
    var randomIndex = Math.floor(Math.random() * scaleKeys.length);
    var randomKey = scaleKeys[randomIndex];

    if (scaleKeys.length > 1) {
      while (note === randomKey) {
        randomIndex = Math.floor(Math.random() * scaleKeys.length);
        randomKey = scaleKeys[randomIndex];
        getScalekey(randomKey, `${selectquiz}`);
      }
    }

    getScalekey(randomKey, `${selectquiz}`);

    setIsCorrect(true);

    setTimeout(() => {
      setIsCorrect();
    }, 130);

    setInputValues(["", "", "", "", "", "", ""]);
    setCheat("");
    setTimerOn(true);
    setStoredtime(time);
    setStorednote(note);
    setTime(0);
  };

  const handleQuizCheck = () => {
    if (note) {
      const isCorrect = inputValues.every(
        (value, index) => value === keyvalues[index]
      );

      handleQuestions();
      setTimerOn(isCorrect ? false : true);

      if (isCorrect) {
        handleCorrectAnswer();
        handleNewQ(note);
      } else if (!isCorrect) {
        setInputValues(["", "", "", "", "", "", ""]);
        setIsCorrect(false);
        setTimeout(() => {
          setIsCorrect();
        }, 130);
      }
    }
  };

  const handleCheat = () => {
    setInputValues([...keyvalues]);
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
    <div className="quizpage">
      <Topnavbar />

      <Quizinfo />
      <div className="quiz_type">
        <select
          value={selectquiz}
          onChange={(e) => setSelectQuiz(e.target.value)}
        >
          <option value="Major">Major</option>
          <option value="Minor">Minor</option>
        </select>
      </div>
      <QuizInput handleAddValue={handleAddValue} scaleKeys={scaleKeys} />
      <div className="quiz_class">
        {" "}
        <Buttons color={"success"} text={"Start"} onClick={StartQuiz}></Buttons>
        <Buttons
          color={"secondary"}
          text={"Reset"}
          onClick={resetkeys}
        ></Buttons>
      </div>
      <DisplayValueBox value={note} />
      <div className="inputsquiz">
        {" "}
        {inputValues.map((inputValue, index) => (
          <label key={index}>
            {index + 1}{" "}
            <input
              className={`inputquiz ${
                isCorrect
                  ? "owncorrect"
                  : isCorrect === false
                  ? "ownincorrect"
                  : ""
              }`}
              type="text"
              value={inputValue}
              name={`myInput${index}`}
              onChange={(event) => handleInputChange(event, index)}
            />
          </label>
        ))}
      </div>
      <div className="quiz_class">
        <Buttons
          disabled={disabled}
          color={"light"}
          text={"Submit"}
          onClick={handleQuizCheck}
        />
        <Cheat handleCheat={handleCheat} cheat={cheat} disabled={disabled} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <Score score={score} question={question} />
        <Timer time={time} />
      </div>

      <Leaderboard storedtime={storedtime} note={storednote} />

      <Footer />
    </div>
  );
};

export default Quiz;
