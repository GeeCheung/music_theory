import React from "react";

const Score = ({ score, question }) => {
  return (
    <div className="timer">
      Score: {score}/{question}
    </div>
  );
};

export default Score;
