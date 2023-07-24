import React from 'react';
import Buttons from './Buttons';

const StoreChords = ({ note, setTextValue, musictheory, inversion, setnoteArray, scales, whatchord}) => {

const getChord = (note) =>  {
  
    if (note) {

      musictheory.forEach(document => {
         if(document["id"] === scales){
             var getChord = document._document.data.value.mapValue.fields[note].stringValue.split(" ");
             var [first, second , third, , fifth, ,seventh]  = getChord;
             
             switch(whatchord) {
              case "fifth":
                setnoteArray([getChord[4]]);
                setTextValue(`${note} perfect fifth is ${getChord[4]}`); 
                break;
              case "relative_minor":
                setnoteArray([getChord[5]]);
                setTextValue(`${note} relative minor fifth is ${getChord[5]}`); 
                break;
              case "7th":
                var seventhchords = [first , third, fifth, seventh];
                 setnoteArray(seventhchords);
                 setTextValue(`seventh chord for ${note} is ${first}, ${third}, ${fifth}, ${seventh}`); 
                break;
              case "9th":
                var ninthchords = [first, second , third, fifth, seventh];
                setnoteArray(ninthchords);
                setTextValue(`Ninth chord for ${note} is ${first}, ${second}, ${third}, ${fifth}, ${seventh}`); 
                break;
              default:
                break;
            }
         }
      });
     
    }

  }
  
  // get Inversion of the selected chord
  const getInversion = (note,chord) =>  {
    
    if (note && chord) {

      musictheory.forEach(document => {
        if(document["id"] === "Major"){
            var inversion = document._document.data.value.mapValue.fields[note].stringValue;
            var [first, , third, , fifth] = inversion.split(" ");
           
             if (chord === "Root"){
              var newArrayOfChords = [first, third, fifth];
              setnoteArray(newArrayOfChords);
              setTextValue(`${chord} for ${note} is ${first}, ${third}, ${fifth}`);
            }
        
           else {
        
              if (chord === "First"){
                 newArrayOfChords = [third, fifth, first];
                setnoteArray(newArrayOfChords);
                setTextValue(`${chord} inversion for  ${note} is ${third}, ${fifth}, ${first}`);
              } 
        
              if (chord === "Second"){
                newArrayOfChords = [fifth, first, third];
                setnoteArray(newArrayOfChords);
                setTextValue(`${chord} inversion for ${note} is ${fifth}, ${first}, ${third}`);
                } 
          }  

        }
     }); 
  }  
  }



  return (
    <div>
      <h3>Chords</h3>
      <Buttons color={"success"} text={"Get Dominant 5th"} scales = {"Major"} onClick={() => getChord(note, scales = "Major", whatchord ="fifth")} ></Buttons>
     {/*  <Buttons color={"success"} text={"Get Triad Inversion"} onClick={() => getInversion(note, inversion, scales = "Major", whatchord ="Inversion")} ></Buttons> */}
      <Buttons color={"success"} text={"Get 7th chord"} onClick={() => getChord(note, scales = "Major", whatchord= "7th")} ></Buttons>
      <Buttons color={"success"} text={"Get 9th chord"} onClick={() => getChord(note, scales = "Major", whatchord= "9th")} ></Buttons>
      <Buttons color={"success"} text={"Get Relative Minor"} onClick={() => getChord(note, scales = "Major", whatchord ="relative_minor")} ></Buttons>
     {/*  <Buttons color={"success"} text={"Get Augmented chord"} onClick={() => getInversion(note, inversion)} ></Buttons>
      <Buttons color={"success"} text={"Get Dimminshed chord"} onClick={() => getInversion(note, inversion)} ></Buttons>
      <Buttons color={"success"} text={"Get Dominant 7th"} onClick={() => getInversion(note, inversion)} ></Buttons>
      <Buttons color={"success"} text={"Get Augmented 7th chord"} onClick={() => getInversion(note, inversion)} ></Buttons>
      <Buttons color={"success"} text={"Get Dominant 7th b5 chord"} onClick={() => getInversion(note, inversion)} ></Buttons>
      <Buttons color={"success"} text={"Get Minor 7th chord"} onClick={() => getInversion(note, inversion)} ></Buttons>
      <Buttons color={"success"} text={"Get Minor(Major7) chord"} onClick={() => getInversion(note, inversion)} ></Buttons>
      <Buttons color={"success"} text={"Get half Dimminshed chord"} onClick={() => getInversion(note, inversion)} ></Buttons>
      <Buttons color={"success"} text={"Get Dimminshed 7th chord"} onClick={() => getInversion(note, inversion)} ></Buttons> */}
    </div>
  );
};

export default StoreChords;
