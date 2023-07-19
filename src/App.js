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

//get the Dominant fifth note in the scale 
const getfith = (note) =>  {

  if (note) {
  var fifth = musictheory[0][note];
  var myArray = fifth.split(" ");
  myArray = myArray[4]

    setTextValue(`${note} perfect fifth is ${myArray}`);
  }
}

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

// get 7th of the selected chord
const get7thChord = (note) =>  {
  
  if (note) {

    var inversion = musictheory[0][note];
    var [first, , third, , fifth, ,seventh] = inversion.split(" ");
    setTextValue(`seventh chord for ${note} is ${first}, ${third}, ${fifth}, ${seventh}`);

  }   
}

// get 9th of the selected chord
const get9thChord = (note) =>  {
  
  if (note) {

    var inversion = musictheory[0][note];
    var [first, second , third, , fifth, ,seventh] = inversion.split(" ");
    setTextValue(`seventh chord for ${note} is ${first}, ${second}, ${third}, ${fifth}, ${seventh}`);

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
      <br></br>
      <h3>Notes</h3>
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
      <h3>Chords</h3>
      <Button text={"Get Dominant 5th"} onClick={() => getfith(note)} ></Button>
      <Button text={"Get Triad Inversion"} onClick={() => getInversion(note, inversion)} ></Button>
      <Button text={"Get 7th chord"} onClick={() => get7thChord(note)} ></Button>
      <Button text={"Get 9th chord"} onClick={() => get9thChord(note)} ></Button>
      <Button text={"Get Augmented chord"} onClick={() => getInversion(note, inversion)} ></Button>
      <Button text={"Get Dimminshed chord"} onClick={() => getInversion(note, inversion)} ></Button>
      <Button text={"Get Dominant 7th"} onClick={() => getInversion(note, inversion)} ></Button>
      <Button text={"Get Augmented 7th chord"} onClick={() => getInversion(note, inversion)} ></Button>
      <Button text={"Get Dominant 7th b5 chord"} onClick={() => getInversion(note, inversion)} ></Button>
      <Button text={"Get Minor 7th chord"} onClick={() => getInversion(note, inversion)} ></Button>
      <Button text={"Get Minor(Major7) chord"} onClick={() => getInversion(note, inversion)} ></Button>
      <Button text={"Get half Dimminshed chord"} onClick={() => getInversion(note, inversion)} ></Button>
      <Button text={"Get Dimminshed 7th chord"} onClick={() => getInversion(note, inversion)} ></Button>
      <Button text={"Get Relative Minor"} onClick={() => getRelativeMinor(note)} ></Button>
      <h3>Scales</h3>
      <Button text={"Get Major scale"} onClick={() => getMajorsScale(note)} ></Button>
      <Button text={"Get Minor scale"} onClick={() => getMinorsScale(note)} ></Button>
      <Button text={"Get Pentatonic Major scale"} onClick={() => getPentatonicScaleMajor(note)} ></Button>
      <Button text={"Get Pentatonic Minor scale"} onClick={() => getPentatonicScaleMinor(note)} ></Button>
      <Button text={"Get Blues Major scale"} onClick={() => getBluesScaleMajor(note)} ></Button>
        <h2>{textValue}</h2> {/* make this to box value  */}
        <br></br>
        <h3>Diatonic chords</h3>
        <p>A chord which is diatonic is simply a chord built from notes of the key.
           In the key of C again (C, D, E, F, G, A and B), the chord C major (C, E, G) would be 
           diatonic to the key of C because its 3 notes are part of the C major scale.</p>
        <p>major I, minor ii, minor iii, major IV, major V, minor vi, and diminished vii </p>
        <p>minor i, diminished ii, major III, minor iv, minor v, major VI, and major VII</p>
        <h3>Chromatic chords</h3>
        <p>A chromatic chord is a chord that contains at least one note that is not native 
          to the key of your song.</p>
        <h3>Augmented chords</h3>
        <p>An augmented chord is a triad with a sharpened fifth – 
          that is, a fifth note, raised one semitone. So an augmented C would play C – E – G#.</p>
        <h3>Diminished chords</h3>
        <p>Diminished chords have a flat fifth degree compared to a
           minor chord, so the formula for a diminished triad is always 1 – ♭3 – ♭5.</p>
        <h3>7th chords</h3>
        <p> seventh chord is a chord consisting of a triad plus a note 
          forming an interval of a seventh above the chord's root.</p>
        <br></br>
        <Piano />
        
    </div>
  );
}

export default App;