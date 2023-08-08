import React from "react";

const Score = ({ score, question }) => {
  return (
    <div className="score">
      Score: {score}/{question}
    </div>
  );
};

export default Score;
