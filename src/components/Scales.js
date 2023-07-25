import { useState } from 'react';
import Buttons from './Buttons';


const StoreScales = ({ note, musictheory, setTextValue, setnoteArray, scales, pentantonic, insert }) => {


  const [selectedScale, setSelectedScale] = useState('');

  const handleScaleClick = (note, insert) => {
    setSelectedScale(insert);
    getScale(note);
  };

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
            setTextValue(`${note} scale is ${getscalesnotes.join(" ")}`); 
       }
    });
   
  }
  
  }
  
  
  return (
    <div>
       <br/>
     <h3 className='subh'>Scales</h3>
     <div className='subh'>
      <Buttons color={"light"} sle={"test"} text={"Get Major scale"} onClick={() => handleScaleClick(note, scales = "Major", pentantonic = false, insert = "test")} ></Buttons>
      <Buttons color={"light"} sle={"2"} text={"Get Minor scale"} onClick={() => handleScaleClick(note, scales = "Minor" , pentantonic = false, '2')} ></Buttons>
      <Buttons color={"light"}  text={"Get Pentatonic Major scale"} onClick={() => handleScaleClick(note, scales = "Major", pentantonic = true,  '3')} ></Buttons>
      <Buttons color={"light"} text={"Get Pentatonic Minor scale"} onClick={() => handleScaleClick(note,  scales = "Minor", pentantonic = true,  '4')} ></Buttons>
      <Buttons color={"light"} text={"Get Blues Major scale"} onClick={() => handleScaleClick(note,  scales = "Blues_Major")} ></Buttons>
      <Buttons color={"light"} text={"Get Blues Minor scale"} onClick={() => handleScaleClick(note, scales = "Blues_Minor" )} ></Buttons>
      </div>
    </div>
  );
};

export default StoreScales;
