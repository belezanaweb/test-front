import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ place, texto, ...props }) => {
  const navigate = useNavigate();
  function handleButton() {
    navigate(place);
  }

  return (
    <button onClick={handleButton} path={place}>
      {texto}
    </button>
  );
};

export default Button;
