import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Buttons  = ({  text, onClick, color }) => {
  
  return (
    <Button variant = {color} onClick={onClick}>
      {text}
    </Button>
  )
}

export default Buttons
