import React from 'react';
import Buttons from './Buttons';


const StoreInversion = ({ inversion, setInversion }) => {
  return (
    <div>
      <h3>Inversion</h3>
      <Buttons text={"Root"} onClick={() => setInversion("Root")}></Buttons>
      <Buttons text={"First"} onClick={() => setInversion("First")}></Buttons>
      <Buttons text={"Second"} onClick={() => setInversion("Second")}></Buttons>
      <p>Stored note: {inversion}</p>
    </div>
  );
};

export default StoreInversion;
