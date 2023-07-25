import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Buttons  = ({ text, note, onClick, color, selectedNote, selectedChord, id, selectedScale, sle}) => {

  var classNameN = "highlighteddef"
  
if(note){
   classNameN = selectedNote === text ? 'highlighted' : '';
}

if(id){
  classNameN = selectedChord ===  id ? 'highlightedC': "";
}

if(sle){
  classNameN = selectedScale ===  sle ? 'highlightedS': "";
}

  return (
    <Button variant = {color}  className={classNameN}  onClick={onClick} > 
      {text} 
    </Button>
  )
}

export default Buttons
