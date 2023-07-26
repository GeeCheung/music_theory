import { useState } from 'react';
import Buttons from './Buttons';


const StoreScales = ({ note, musictheory, setTextValue, setnoteArray, scales, pentantonic, insert }) => {


  const [selectedScale, setSelectedScale] = useState('');

  const handleScaleClick = (note) => {
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
            setTextValue(`${getscalesnotes.join(" ")}`); 
       }
    });
   
  } else {
    alert("Please select a note")
  }
  
  }
  
  
  return (
    <div>
       <br/>
     <h3 className='subh'>Scales</h3>
     <div className='subh'>
      <Buttons color={"light"} id_scale={"1"} text={"Get Major scale"} selectedScale={selectedScale} onClick={() => handleScaleClick(note, scales = "Major", pentantonic = false, insert = "1")} ></Buttons>
      <Buttons color={"light"} id_scale={"2"} text={"Get Minor scale"} selectedScale={selectedScale}  onClick={() => handleScaleClick(note, scales = "Minor" , pentantonic = false, insert = "2")} ></Buttons>
      <Buttons color={"light"} id_scale={"3"}  text={"Get Pentatonic Major scale"} selectedScale={selectedScale}  onClick={() => handleScaleClick(note, scales = "Major", pentantonic = true, insert = "3")} ></Buttons>
      <Buttons color={"light"} id_scale={"4"} text={"Get Pentatonic Minor scale"}  selectedScale={selectedScale}  onClick={() => handleScaleClick(note,  scales = "Minor", pentantonic = true,   insert = "4")} ></Buttons>
      <Buttons color={"light"} id_scale={"5"} text={"Get Blues Major scale"} selectedScale={selectedScale}  onClick={() => handleScaleClick(note,  scales = "Blues_Major",   insert = "5")} ></Buttons>
      <Buttons color={"light"} id_scale={"6"} text={"Get Blues Minor scale"} selectedScale={selectedScale}  onClick={() => handleScaleClick(note, scales = "Blues_Minor",  insert = "6")} ></Buttons>
      </div>
    </div>
  );
};

export default StoreScales;
