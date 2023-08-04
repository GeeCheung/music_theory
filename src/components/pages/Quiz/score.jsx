import React from "react";

const Score = ({ score, question }) => {
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
