import React from 'react';
import Button from './Button';


const StoreInversion = ({ inversion, setInversion }) => {
  return (
    <div>
      <h3>Inversion</h3>
      <Button text={"Root"} onClick={() => setInversion("Root")}></Button>
      <Button text={"First"} onClick={() => setInversion("First")}></Button>
      <Button text={"Second"} onClick={() => setInversion("Second")}></Button>
      <p>Stored note: {inversion}</p>
    </div>
  );
};

export default StoreInversion;
