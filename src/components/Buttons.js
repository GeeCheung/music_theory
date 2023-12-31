import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./Button.css";

const Buttons = ({
  text,
  note,
  onClick,
  color,
  selectedNote,
  id,
  className,
  disabled,
}) => {
  if (note) {
    var className = note && selectedNote === id ? "highlighted" : "";
  } else {
    var className = "";
  }

  return (
    <Button
      disabled={disabled}
      variant={color}
      className={className}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default Buttons;
