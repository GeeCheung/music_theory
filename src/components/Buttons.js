import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const Buttons = ({
  text,
  note,
  onClick,
  color,
  selectedNote,
  id,
  className,
}) => {
  if (note) {
    var className = note && selectedNote === id ? "highlighted" : "";
  } else {
    var className = "";
  }

  return (
    <Button variant={color} className={className} onClick={onClick}>
      {text}
    </Button>
  );
};

export default Buttons;
