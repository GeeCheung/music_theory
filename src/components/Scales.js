import React from 'react';
import Button from './Button';


const StoreScales = ({ note, musictheory, setTextValue }) => {

// get Major scales 
const getMajorsScale = (note) =>  {
  
    var scale = musictheory[0][note];
  
    if (note) {
      setTextValue(`${note} Major scale is ${scale}`);
    }
  
  }
  
  // get Minor scales 
  const getMinorsScale = (note) =>  {
    
    var scale = musictheory[1][note];
  
    if (note) {
      setTextValue(`${note} Minor scale is ${scale}`);
    }
  
  }
  
  // get pentatonic scale Major
  const getPentatonicScaleMajor = (note) =>  {
    
    if (note) {
      
      var scale = musictheory[0][note];
      var myArray = scale.split(" ");
      var newArray = [];
      for (var i = 0; i < myArray.length; i++) {
        if( i == 3 || i == 6) {
          continue;
        }
        newArray.push(myArray[i]);
      }
      setTextValue(newArray.join(" "));
    }
  
  }
  
  // get pentatonic scale Minor
  const getPentatonicScaleMinor = (note) =>  {
  
    if (note) {
      
      var scale = musictheory[1][note];
      var myArray = scale.split(" ");
      var newArray = [];
      for (var i = 0; i < myArray.length; i++) {
        if( i == 1 || i == 5) {
          continue;
        }
        newArray.push(myArray[i]);
      }
      setTextValue(newArray.join(" "));
    }
  
  }
  
  // get blues scale Major
  const getBluesScaleMajor = (note) =>  {
    
      if (note) {
      
        var scale = musictheory[0][note];
        var myArray = scale.split(" ");
        var newArray = [];
        for (var i = 0; i < myArray.length; i++) {
          if( i != 3 && i != 6) {
            newArray.push(myArray[i]);
          }
        }
        setTextValue(newArray.join(" "));
      }
    
  }
  
  return (
    <div>
     <h3>Scales</h3>
      <Button text={"Get Major scale"} onClick={() => getMajorsScale(note)} ></Button>
      <Button text={"Get Minor scale"} onClick={() => getMinorsScale(note)} ></Button>
      <Button text={"Get Pentatonic Major scale"} onClick={() => getPentatonicScaleMajor(note)} ></Button>
      <Button text={"Get Pentatonic Minor scale"} onClick={() => getPentatonicScaleMinor(note)} ></Button>
      <Button text={"Get Blues Major scale"} onClick={() => getBluesScaleMajor(note)} ></Button>
      <Button text={"Get Blues Minor scale"} onClick={() => getBluesScaleMajor(note)} ></Button>
      <br></br>
    </div>
  );
};

export default StoreScales;
