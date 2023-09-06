import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

  const chordOptions = [
    { value: "", label: "Select a chord" },
    { value: "fifth", label: "Dominant 5th" },
    { value: "triads", label: "Triad" },
    { value: "7th", label: "7th chord" },
    { value: "9th", label: "9th chord" },
    { value: "relative_minor", label: "Relative Minor" },
  ];

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
    <div>
      <select
        value={selectedChord}
        onChange={(e) =>
          handleChordClick(
            note,
            (scales = "Major"),
            (whatchord = e.target.value)
          )
        }
      >
        {chordOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StoreChords;
