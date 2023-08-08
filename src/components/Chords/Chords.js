import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Buttons from "../Buttons";
import "./Chords.css";

const StoreChords = ({
  note,
  setTextValue,
  musictheory,
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
      toast.error("Please select a key");
    }
  };

  return (
    <div className="chords">
      <Buttons
        color={"dark"}
        text={"Get Dominant 5th"}
        onClick={() =>
          handleChordClick(note, (scales = "Major"), (whatchord = "fifth"))
        }
      ></Buttons>
      <Buttons
        color={"dark"}
        text={"Get Triad"}
        onClick={() =>
          handleChordClick(note, (scales = "Major"), (whatchord = "triads"))
        }
      ></Buttons>
      <Buttons
        color={"dark"}
        text={"Get 7th chord"}
        onClick={() =>
          handleChordClick(note, (scales = "Major"), (whatchord = "7th"))
        }
      ></Buttons>
      <Buttons
        color={"dark"}
        text={"Get 9th chord"}
        onClick={() =>
          handleChordClick(note, (scales = "Major"), (whatchord = "9th"))
        }
      ></Buttons>
      <Buttons
        color={"dark"}
        text={"Get Relative Minor"}
        onClick={() =>
          handleChordClick(
            note,
            (scales = "Major"),
            (whatchord = "relative_minor")
          )
        }
      ></Buttons>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default StoreChords;
