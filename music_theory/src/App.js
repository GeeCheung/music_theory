import Button from './components/Button'
import React, { useState } from 'react'

const App = () => {

  const [value, setValue] = useState('');

  const onClick = () => {
    const newValue = "C";
    setValue(newValue);
  };

  return (
    <div className="App">
      <h3>Music Theory</h3>
      <Button text={"C"} onClick={onClick}></Button>
      <Button text={"D"} onClick={onClick}></Button>
      <Button text={"E"} onClick={onClick}></Button>
      <Button text={"F"} onClick={onClick}></Button>
      <Button text={"G"} onClick={onClick}></Button>
      <Button text={"A"} onClick={onClick}></Button>
      <Button text={"B"} onClick={onClick}></Button>
      <p>Stored Value: {value}</p>
      <h3>Inversion</h3>
      <Button text={"Root"} onClick={onClick}></Button>
      <Button text={"First"} onClick={onClick}></Button>
      <Button text={"Second"} onClick={onClick}></Button>
      <br></br>
      <Button text={"Submit"} onClick={onClick}></Button>
    </div>
  );
}

export default App;