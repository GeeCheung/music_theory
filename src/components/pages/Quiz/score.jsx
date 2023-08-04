import React from "react";

const Score = ({ score, question }) => {
  return (
    <div className="timer">
      <p>
        Score: {score}/{question}
      </p>
    </div>
  );
};

export default Score;
