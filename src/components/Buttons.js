import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Buttons  = ({ text, onClick, color, selectedNote  }) => {
  
  return (
    <Button variant = {color}  className={selectedNote === text ? 'highlighted' : ''}  onClick={onClick} > 
      {text}
    </Button>
  )
}

export default Buttons
