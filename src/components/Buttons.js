import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Buttons  = ({ text, note, onClick, color, selectedNote, selectedChord, id, selectedScale, id_scale}) => {
  
  var className = note && selectedNote === text ? 'highlighted' :
  id && selectedChord === id ? 'highlighted' :
  id_scale && selectedScale === id_scale ? 'highlighted' :
  '';

  return (
    <Button variant = {color}  className={className}  onClick={onClick} > 
      {text} 
    </Button>
  )
}

export default Buttons
