import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Buttons from "../Buttons";
import "./Scales.css";

const StoreScales = ({
  note,
  musictheory,
  setTextValue,
  setnoteArray,
  scales,
  pentantonic,
}) => {
  const handleScaleClick = (note) => {
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

  return (
    <div className="scales">
      <Buttons
        color={"dark"}
        text={"Get Major scale"}
        onClick={() =>
          handleScaleClick(note, (scales = "Major"), (pentantonic = false))
        }
      ></Buttons>
      <Buttons
        color={"dark"}
        text={"Get Minor scale"}
        onClick={() =>
          handleScaleClick(note, (scales = "Minor"), (pentantonic = false))
        }
      ></Buttons>
      <Buttons
        color={"dark"}
        text={"Get Pentatonic Major scale"}
        onClick={() =>
          handleScaleClick(note, (scales = "Major"), (pentantonic = true))
        }
      ></Buttons>
      <Buttons
        color={"dark"}
        text={"Get Pentatonic Minor scale"}
        onClick={() =>
          handleScaleClick(note, (scales = "Minor"), (pentantonic = true))
        }
      ></Buttons>
      <Buttons
        color={"dark"}
        text={"Get Blues Major scale"}
        onClick={() => handleScaleClick(note, (scales = "Blues_Major"))}
      ></Buttons>
      <Buttons
        color={"dark"}
        text={"Get Blues Minor scale"}
        onClick={() => handleScaleClick(note, (scales = "Blues_Minor"))}
      ></Buttons>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default StoreScales;
