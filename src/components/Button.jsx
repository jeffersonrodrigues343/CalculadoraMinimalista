import React from 'react';
import './Button.css'; // Liga ao ficheiro de estilos

// 1. Recebe 'label', 'className', e 'onClick' como propriedades (props)
const Button = ({ label, className, onClick }) => {

  // 2. Função interna que será chamada quando o botão HTML for clicado
  const handleClick = () => {
    // 3. Verifica se a função 'onClick' foi passada (é uma boa prática)
    if (onClick) {
      // 4. CHAMA a função handleButtonClick que veio do App.jsx,
      //    passando o 'label' deste botão específico (ex: "7", "+", "AC")
      onClick(label);
    }
  };

  return (
    // 5. O elemento <button> do HTML.
    //    A sua propriedade 'onClick' está ligada à nossa função 'handleClick'.
    <button className={`btn ${className || ''}`} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;