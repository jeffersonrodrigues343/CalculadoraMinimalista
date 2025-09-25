import {useState} from 'react';
import './App.css'
import Button from './compontents/Button'
function App() {
// ----- A MEMÓRIA (ESTADO) ---
  const [numeroNoVisor, setNumeroNoVisor] = useState('0');
  
  // Nossa função:
  
  function handleButtonClick(){
    console.log("Um botão foi clicado!");
  }
  return (
    // O container principal da nossa calculadora
    <div className="calculator">

      {/* O visor onde os núemros e resultados aparecerão*/}
      <div className="display">
        <div className="history"></div>    {/* Texto de exemplo */}
        <div className="main-result">0</div>         {/* Texto de exemplo */}
      </div>

      <div className="buttons">
        {/* Linha 1*/}
        <Button label = "AC" className="func" />
        <Button label = "CE" className="func"/>
        <Button label = "÷" className="op" />
        <Button label = "x" className="op" />

        {/* Linha 2 */}
        <Button label = "7" />
        <Button label = "8" />
        <Button label = "9" />
        <Button label = "-" className="op" />

        {/* Linha 3 */}
        <Button label = "4" />
        <Button label = "5" />
        <Button label = "6" />
        <Button label= "+" className="op" />

        {/* Linha 4 e 5 */}
        <Button label = "1" />
        <Button label = "2" />
        <Button label = "3" />
        <Button label = "=" className="equals" />
        <Button label = "." />
      </div>

    </div>
  )
}

export default App

