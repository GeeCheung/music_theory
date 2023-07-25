import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Buttons  = ({ text, note, onClick, color, selectedNote, selectedChord, id, selectedScale, id_scale}) => {

  var classNameN = "highlighteddef"
  
if(note){
   classNameN = selectedNote === text ? 'highlighted' : '';
}

if(id){
  classNameN = selectedChord ===  id ? 'highlightedC': "";
}

if(id_scale){
  classNameN = selectedScale === id_scale ? 'highlightedS': "";
}

  return (
    <Button variant = {color}  className={classNameN}  onClick={onClick} > 
      {text} 
    </Button>
  )
}

export default Buttons
