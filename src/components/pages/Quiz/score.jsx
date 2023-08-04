import React, { useState } from "react";

const Score = () => {
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(0);

  const handleCorrectAnswer = () => {
    setScore(score + 1);
  };

  const handleQuestions = () => {
    setQuestion(question + 1);
  };

  return (
    <div>
      <div className="timer">
        <p>
          Score: {score}/{question}
        </p>
      </div>
    </div>
  );
};

export default Score;
