import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Buttons  = ({  text, onClick }) => {
  
  return (
    <Button
      variant = "success"
      onClick={onClick}
    >
      {text}
    </Button>
  )
}

export default Buttons
