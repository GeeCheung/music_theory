import React from 'react';
import Buttons from './Buttons';


const StoreScales = ({ note, musictheory, setTextValue, setnoteArray, scales, pentantonic }) => {

const getScale = (note) =>  {
  if (note) {

    musictheory.forEach(document => {
       if(document["id"] === scales){
           var getscalesnotes = document._document.data.value.mapValue.fields[note].stringValue.split(" ");

          if(pentantonic){

            var newArray = [];
            
           for (var i = 0; i < getscalesnotes.length; i++) {

            switch(document["id"]) {
              case "Major":
                if( i !== 3 && i !== 6) {
                  newArray.push(getscalesnotes[i]);
                }
                break;
              case "Minor":
                if( i !== 1 && i !== 5) {
                  newArray.push(getscalesnotes[i]);
                }
                break;
            }

          }
          
          setnoteArray(newArray);
          setTextValue(newArray.join(" "));

          return;
          
        }
        
            setnoteArray(getscalesnotes);
            setTextValue(`${note} scale is ${getscalesnotes}`); 
       }
    });
   
  }
  
  }
  
  
  return (
    <div>
     <h3>Scales</h3>
      <Buttons color={"danger"} text={"Get Major scale"} onClick={() => getScale(note, scales = "Major", pentantonic = false)} ></Buttons>
      <Buttons color={"danger"} text={"Get Minor scale"} onClick={() => getScale(note, scales = "Minor" , pentantonic = false)} ></Buttons>
      <Buttons color={"danger"} text={"Get Pentatonic Major scale"} onClick={() => getScale(note, scales = "Major", pentantonic = true)} ></Buttons>
      <Buttons color={"danger"} text={"Get Pentatonic Minor scale"} onClick={() => getScale(note,  scales = "Minor", pentantonic = true)} ></Buttons>
      <Buttons color={"danger"} text={"Get Blues Major scale"} onClick={() => getScale(note,  scales = "Blues_Major")} ></Buttons>
      <Buttons color={"danger"} text={"Get Blues Minor scale"} onClick={() => getScale(note, scales = "Blues_Minor" )} ></Buttons>
    </div>
  );
};

export default StoreScales;
