import React from 'react';
import Buttons from './Buttons';


const StoreScales = ({ note, musictheory, setTextValue, setnoteArray }) => {

// get Major scales 
const getMajorsScale = (note) =>  {
  
    var majorscale = musictheory[0][note];
     majorscale = majorscale.split(" ");
    if (note) {
      setnoteArray(majorscale);
      setTextValue(`${note} Major scale is ${majorscale}`);
    }
  
  }
  
  // get Minor scales 
  const getMinorsScale = (note) =>  {
    var minorscale = musictheory[1][note]
    minorscale = minorscale.split(" ");
    if (note) {
      setnoteArray(minorscale);
      setTextValue(`${note} Minor scale is ${minorscale}`);
    }
  
  }
  
  // get pentatonic scale Major
  const getPentatonicScaleMajor = (note) =>  {
    
    if (note) {
      
      var scale = musictheory[0][note];
      var myArray = scale.split(" ");
      var newArray = [];
      for (var i = 0; i < myArray.length; i++) {
        if( i === 3 || i === 6) {
          continue;
        }
        newArray.push(myArray[i]);
      }
      setnoteArray(newArray);
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
        if( i === 1 || i === 5) {
          continue;
        }
        newArray.push(myArray[i]);
      }
      setnoteArray(newArray);
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
          if( i !== 3 && i !== 6) {
            newArray.push(myArray[i]);
          }
        }
        setTextValue(newArray.join(" "));
      }
    
  }
  
  return (
    <div>
     <h3>Scales</h3>
      <Buttons color={"danger"} text={"Get Major scale"} onClick={() => getMajorsScale(note)} ></Buttons>
      <Buttons color={"danger"} text={"Get Minor scale"} onClick={() => getMinorsScale(note)} ></Buttons>
      <Buttons color={"danger"} text={"Get Pentatonic Major scale"} onClick={() => getPentatonicScaleMajor(note)} ></Buttons>
      <Buttons color={"danger"} text={"Get Pentatonic Minor scale"} onClick={() => getPentatonicScaleMinor(note)} ></Buttons>
      <Buttons color={"danger"} text={"Get Blues Major scale"} onClick={() => getBluesScaleMajor(note)} ></Buttons>
      <Buttons color={"danger"} text={"Get Blues Minor scale"} onClick={() => getBluesScaleMajor(note)} ></Buttons>
      <br></br>
    </div>
  );
};

export default StoreScales;
