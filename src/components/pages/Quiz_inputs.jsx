import React from "react";

const Quiz_inputs = () => {
  const inputElements = [
    { id: 1, value: inputValue },
    { id: 2, value: inputValue2 },
    { id: 3, value: inputValue3 },
    { id: 4, value: inputValue4 },
    { id: 5, value: inputValue5 },
    { id: 6, value: inputValue6 },
    { id: 7, value: inputValue7 },
  ];

  const shuffleArray = (array) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const shuffledInputElements = shuffleArray([...inputElements]);

  return (
    <div>
      {" "}
      {shuffledInputElements.map(({ id, value }) => (
        <label key={id}>
          {id}th{" "}
          <input
            className="inputquiz"
            type="text"
            value={value}
            name="myInput"
            onChange={(event) => handleInputChange(event, id)}
          />
        </label>
      ))}
    </div>
  );
};

export default Quiz_inputs;
