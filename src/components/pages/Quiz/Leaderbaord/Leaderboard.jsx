import React from "react";

const Leaderboard = ({ storedtime, note }) => {
  return (
    <div>
      <div className="timer">
        <span>
          Your speed for the key of {note} {" - "}
          {("0" + Math.floor((storedtime / 60000) % 60)).slice(-2)}:
        </span>
        <span>{("0" + Math.floor((storedtime / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((storedtime / 10) % 100)).slice(-2)}</span>
      </div>
    </div>
  );
};

export default Leaderboard;
