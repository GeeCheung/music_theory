import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Buttons from "./Buttons";

const StoreChords = ({
  note,
  setTextValue,
  musictheory,
  inversion,
  setnoteArray,
  scales,
  whatchord,
}) => {
  const [selectedChord, setSelectedChord] = useState("");

  const handleChordClick = (note, scales, whatchord) => {
    setSelectedChord(whatchord);
    getChord(note, scales, whatchord);
  };

  const getChord = (note) => {
    if (note) {
      musictheory.forEach((document) => {
        if (document["id"] === scales) {
          var getChord =
            document._document.data.value.mapValue.fields[
              note
            ].stringValue.split(" ");
          var [first, second, third, , fifth, , seventh] = getChord;

          switch (whatchord) {
            case "triads":
              var triadchords = [first, third, fifth];
              setnoteArray(triadchords);
              setTextValue(`${triadchords.join(" ")}`);
              break;
            case "fifth":
              setnoteArray([getChord[4]]);
              setTextValue(`${getChord[4]}`);
              break;
            case "relative_minor":
              setnoteArray([getChord[5]]);
              setTextValue(`${getChord[5]}`);
              break;
            case "7th":
              var seventhchords = [first, third, fifth, seventh];
              setnoteArray(seventhchords);
              setTextValue(`${seventhchords.join(" ")}`);
              break;
            case "9th":
              var ninthchords = [first, second, third, fifth, seventh];
              setnoteArray(ninthchords);
              setTextValue(`${ninthchords.join(" ")}`);
              break;
            default:
              break;
          }
        }
      });
    } else {
      toast.error("Please Select A Note");
    }
  };

  // get Inversion of the selected chord
  /*   const getInversion = (note, chord) => {
    if (note && chord) {
      musictheory.forEach((document) => {
        if (document["id"] === "Major") {
          var inversion =
            document._document.data.value.mapValue.fields[note].stringValue;
          var [first, , third, , fifth] = inversion.split(" ");

          if (chord === "Root") {
            var newArrayOfChords = [first, third, fifth];
            setnoteArray(newArrayOfChords);
            setTextValue(
              `${chord} for ${note} is ${first}, ${third}, ${fifth}`
            );
          } else {
            if (chord === "First") {
              newArrayOfChords = [third, fifth, first];
              setnoteArray(newArrayOfChords);
              setTextValue(
                `${chord} inversion for  ${note} is ${third}, ${fifth}, ${first}`
              );
            }

            if (chord === "Second") {
              newArrayOfChords = [fifth, first, third];
              setnoteArray(newArrayOfChords);
              setTextValue(
                `${chord} inversion for ${note} is ${fifth}, ${first}, ${third}`
              );
            }
          }
        }
      });
    }
  }; */

  return (
    <div>
      <br />
      <h3 className="subh">Chords</h3>
      <div className="subh">
        <Buttons
          color={"light"}
          text={"Get Dominant 5th"}
          id={"fifth"}
          selectedChord={selectedChord}
          onClick={() =>
            handleChordClick(note, (scales = "Major"), (whatchord = "fifth"))
          }
        ></Buttons>
        <Buttons
          color={"light"}
          text={"Get Triad"}
          id={"triads"}
          selectedChord={selectedChord}
          onClick={() =>
            handleChordClick(note, (scales = "Major"), (whatchord = "triads"))
          }
        ></Buttons>
        <Buttons
          color={"light"}
          text={"Get 7th chord"}
          id={"7th"}
          selectedChord={selectedChord}
          onClick={() =>
            handleChordClick(note, (scales = "Major"), (whatchord = "7th"))
          }
        ></Buttons>
        <Buttons
          color={"light"}
          text={"Get 9th chord"}
          id={"9th"}
          selectedChord={selectedChord}
          onClick={() =>
            handleChordClick(note, (scales = "Major"), (whatchord = "9th"))
          }
        ></Buttons>
        <Buttons
          color={"light"}
          text={"Get Relative Minor"}
          id={"relative_minor"}
          selectedChord={selectedChord}
          onClick={() =>
            handleChordClick(
              note,
              (scales = "Major"),
              (whatchord = "relative_minor")
            )
          }
        ></Buttons>

        {/* <Buttons color={"success"} text={"Get Augmented chord"} onClick={() => getInversion(note, inversion)} ></Buttons>
      <Buttons color={"success"} text={"Get Dimminshed chord"} onClick={() => getInversion(note, inversion)} ></Buttons>
      <Buttons color={"success"} text={"Get Dominant 7th"} onClick={() => getInversion(note, inversion)} ></Buttons>
      <Buttons color={"success"} text={"Get Augmented 7th chord"} onClick={() => getInversion(note, inversion)} ></Buttons>
      <Buttons color={"success"} text={"Get Dominant 7th b5 chord"} onClick={() => getInversion(note, inversion)} ></Buttons>
      <Buttons color={"success"} text={"Get Minor 7th chord"} onClick={() => getInversion(note, inversion)} ></Buttons>
      <Buttons color={"success"} text={"Get Minor(Major7) chord"} onClick={() => getInversion(note, inversion)} ></Buttons>
      <Buttons color={"success"} text={"Get half Dimminshed chord"} onClick={() => getInversion(note, inversion)} ></Buttons>
      <Buttons color={"success"} text={"Get Dimminshed 7th chord"} onClick={() => getInversion(note, inversion)} ></Buttons> */}
      </div>
    </div>
  );
};

export default StoreChords;
