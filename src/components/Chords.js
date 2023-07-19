import React from 'react';
import Button from './Button';

const StoreChords = ({ note, setTextValue, musictheory, inversion }) => {

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
      setTextValue(`Seventh chord for ${note} is ${first}, ${third}, ${fifth}, ${seventh}`);
  
    }   
  }
  
  // get 9th of the selected chord
  const get9thChord = (note) =>  {
    
    if (note) {
  
      var inversion = musictheory[0][note];
      var [first, second , third, , fifth, ,seventh] = inversion.split(" ");
      setTextValue(`Ninth chord for ${note} is ${first}, ${second}, ${third}, ${fifth}, ${seventh}`);
  
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

  return (
    <div>
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
    </div>
  );
};

export default StoreChords;
