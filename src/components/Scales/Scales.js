import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Scales.css";

const StoreScales = ({
  note,
  musictheory,
  setTextValue,
  setnoteArray,
  scales,
  pentantonic,
}) => {
  const [selectedScale, setSelectedScale] = useState("");
  const [pentatonic, setPentatonic] = useState(false);

  const handleScaleClick = (note, whatscale) => {
    setSelectedScale(whatscale);
    getScale(note);
  };

  const getScale = (note) => {
    if (note) {
      musictheory.forEach((document) => {
        if (document["id"] === scales) {
          var getscalesnotes =
            document._document.data.value.mapValue.fields[
              note
            ].stringValue.split(" ");

          if (pentantonic) {
            var newArray = [];

            for (var i = 0; i < getscalesnotes.length; i++) {
              switch (document["id"]) {
                case "Major":
                  if (i !== 3 && i !== 6) {
                    newArray.push(getscalesnotes[i]);
                  }
                  break;
                case "Minor":
                  if (i !== 1 && i !== 5) {
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
      toast.error("Please select a key");
    }
  };

  const handlePentatonicChange = (isPentatonic) => {
    setPentatonic(isPentatonic);
  };

  const scaleOptions = [
    { value: "", label: "Select a Scale" },
    { value: "Major", label: "Major scale" },
    { value: "Minor", label: "Minor scale" },
    { value: "Blues_Major", label: "Blues Major scale" },
    { value: "Blues_Minor", label: "Blues Minor scale" },
  ];

  const pentatonicOptions = [
    { value: "Minor", label: "Minor Pentatonic" },
    { value: "Major", label: "Major Pentatonicle" },
  ];

  return (
    <div>
      <select
        value={selectedScale}
        onChange={(e) => handleScaleClick(note, (scales = e.target.value))}
      >
        {scaleOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
        {pentatonicOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StoreScales;
