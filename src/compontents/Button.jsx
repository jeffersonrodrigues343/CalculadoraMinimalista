import React from 'react';
import './Button.css';

// Adicionamos 'className' às propriedades que o componente pode receber
const Button = ({ label, className }) => {
  // Usamos uma template string para combinar a classe base 'btn' com qualquer classe customizada
  return (
    <button className={`btn ${className || ''}`}>
      {label}
    </button>
  );
};

export default Button;