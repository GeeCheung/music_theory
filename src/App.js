import Button from './components/Button'
import React, { useState } from 'react'
import { Piano } from './components/Piano.js';

const App = () => {

  const [musictheory, setMusictheory] = useState([
      {
        "C" : "C D E F G A B",
        "Db" : "Db Eb F Gb Ab Bb C",
        "D" : "D E F# G A B C#",
        "Eb" : "Eb F G Ab Bb C D",
        "E" : "E F# G# A B C# D#",
        "F" : "F G A Bb C D E",
        "Gb" : "Gb Ab Bb Cb Db Eb F",
        "G" : "G A B C D E F#",
        "Ab" : "Ab Bb C Db Eb F G",
        "A" : "A B C# D E F# G#",
        "Bb" : "Bb C D Eb F G A",
        "B" : "B C# D# E F# G# A#",
    },
      {
        "C" : "C D Eb F G Ab Bb",
        "Db" : "Db Eb E Gb Ab A B",
        "D" : "D E F G A Bb C",
        "Eb" : "Eb Fb Gb Ab Bb Cb Db",
        "E" : "E Eb G A B C D",
        "F" : "F G Ab Bb C Db Eb",
        "Gb" : "Gb Ab A B Db D E",
        "G" : "G A Bb C D Eb F",
        "Ab" : "Ab Bb B Db Eb E Gb",
        "A" : "A B C D E F G",
        "Bb" : "Bb C Db Eb F Gb Ab",
        "B" : "B Db D E Gb G A",
    }
  ]
);

  var [note, setNote] = useState('');
  var [inversion, setIversion] = useState('');
  var [textValue, setTextValue] = useState('');


// get Inversion of the selected chord
const getInversion = (note,chord) =>  {
  
    if (note && chord) {

      var inversion = musictheory[0][note];
      var [first, , third, , fifth] = inversion.split(" ");

      if (chord == "Root"){
        setTextValue(`${chord} for ${note} is ${first}, ${third}, ${fifth}`);
      }

      if (chord  != "Root") {

        if (chord == "First"){
          setTextValue(`${chord} inversion for  ${note} is ${third}, ${fifth}, ${first}`);
        } 

        if (chord == "Second"){
          setTextValue(`${chord} inversion for ${note} is ${fifth}, ${first}, ${third}`);
          } 
    }  
      
  }  
}


//get the fifth note in the scale 
const getfith = (note) =>  {

  if (note) {
  var fifth = musictheory[0][note];
  var myArray = fifth.split(" ");
  myArray = myArray[4]

    setTextValue(`${note} perfect fifth is ${myArray}`);
  }
}


//get relative minor 
const getRelativeMinor = (note) =>  {
  
  if (note) {
    var relative = musictheory[0][note];
    var myArray = relative.split(" ");
    myArray = myArray[5]

    setTextValue(`${note} relative minor is ${myArray}m`);
  }

}


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
    <div className="App">
      <h1>Music Theory</h1>
      <Button text={"C"} onClick={() => setNote("C")}></Button>
      <Button text={"Db"} onClick={() => setNote("Db")}></Button>
      <Button text={"D"} onClick={() => setNote("D")}></Button>
      <Button text={"Eb"} onClick={() => setNote("Eb")}></Button>
      <Button text={"E"} onClick={() => setNote("E")}></Button>
      <Button text={"F"} onClick={() => setNote("F")}></Button>
      <Button text={"Gb"} onClick={() => setNote("Gb")}></Button>
      <Button text={"G"} onClick={() => setNote("G")}></Button>
      <Button text={"Ab"} onClick={() => setNote("Ab")}></Button>
      <Button text={"A"} onClick={() => setNote("A")}></Button>
      <Button text={"Bb"} onClick={() => setNote("Bb")}></Button>
      <Button text={"B"} onClick={() => setNote("B")}></Button>
      <p>Stored note: {note}</p>
      <h3>Inversion</h3>
      <Button text={"Root"} onClick={() => setIversion("Root")}></Button>
      <Button text={"First"} onClick={() => setIversion("First")}></Button>
      <Button text={"Second"} onClick={() => setIversion("Second")}></Button>
      <p>Stored inversion: {inversion}</p>
      <br></br>
      <Button text={"Get Perfect Fifth"} onClick={() => getfith(note)} ></Button>
      <Button text={"Get Inversion"} onClick={() => getInversion(note, inversion)} ></Button>
      <Button text={"Get Relative Minor"} onClick={() => getRelativeMinor(note)} ></Button>
      <Button text={"Get Major scale"} onClick={() => getMajorsScale(note)} ></Button>
      <Button text={"Get Minor scale"} onClick={() => getMinorsScale(note)} ></Button>
      <Button text={"Get Pentatonic Major scale"} onClick={() => getPentatonicScaleMajor(note)} ></Button>
      <Button text={"Get Pentatonic Minor scale"} onClick={() => getPentatonicScaleMinor(note)} ></Button>
      <Button text={"Get Blues Major scale"} onClick={() => getBluesScaleMajor(note)} ></Button>
        <h2>{textValue}</h2>
        <br></br>
        <h3>Diatonic chords</h3>
        <p>major I, minor ii, minor iii, major IV, major V, minor vi, and diminished vii </p>
        <p>minor i, diminished ii, major III, minor iv, minor v, major VI, and major VII</p>
        <h3>Chromatic chords</h3>
        <p>NOTE THAT NOT IN THE SCALE</p>
        <br></br>
        <Piano />
        
    </div>
  );
}

export default App;