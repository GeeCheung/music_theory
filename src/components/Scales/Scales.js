import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Buttons from "../Buttons";

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
      toast.error("Please Select A Note");
    }
  };

  return (
    <div className="scales">
      <br />
      <h1>Scales</h1>
      <div className="scales">
        <Buttons
          color={"light"}
          text={"Get Major scale"}
          onClick={() =>
            handleScaleClick(note, (scales = "Major"), (pentantonic = false))
          }
        ></Buttons>
        <Buttons
          color={"light"}
          text={"Get Minor scale"}
          onClick={() =>
            handleScaleClick(note, (scales = "Minor"), (pentantonic = false))
          }
        ></Buttons>
        <Buttons
          color={"light"}
          text={"Get Pentatonic Major scale"}
          onClick={() =>
            handleScaleClick(note, (scales = "Major"), (pentantonic = true))
          }
        ></Buttons>
        <Buttons
          color={"light"}
          text={"Get Pentatonic Minor scale"}
          onClick={() =>
            handleScaleClick(note, (scales = "Minor"), (pentantonic = true))
          }
        ></Buttons>
        <Buttons
          color={"light"}
          text={"Get Blues Major scale"}
          onClick={() => handleScaleClick(note, (scales = "Blues_Major"))}
        ></Buttons>
        <Buttons
          color={"light"}
          text={"Get Blues Minor scale"}
          onClick={() => handleScaleClick(note, (scales = "Blues_Minor"))}
        ></Buttons>
        <ToastContainer position="top-center" />
      </div>
    </div>
  );
};

export default StoreScales;
