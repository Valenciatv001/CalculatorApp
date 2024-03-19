import React, { useState } from 'react';
import './calculator.css'; 

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (value) => {
    switch(value) {
      case '+/':
        
        setDisplayValue((prevValue) => prevValue.startsWith('-') ? prevValue.slice(1) : '-' + prevValue);
        break;
      case '%':
       
        setDisplayValue((prevValue) => String(parseFloat(prevValue) / 100));
        break;
      case '=':
        try {
          setDisplayValue(eval(displayValue));
        } catch(error) {
          setDisplayValue('Error');
        }
        break;
      case 'AC':
        setDisplayValue('');
        break;
      default:
        setDisplayValue((prevValue) => prevValue + value);
        break;
    }
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('AC')} className="number-button">AC</button>
        <button onClick={() => handleButtonClick('+/')} className="number-button">+/-</button>
        <button onClick={() => handleButtonClick('%')} className="number-button">%</button>
        <button onClick={() => handleButtonClick('/')} className="operation-button">/</button>
        <button onClick={() => handleButtonClick('9')} className="number-button">9</button>
        <button onClick={() => handleButtonClick('8')} className="number-button">8</button>
        <button onClick={() => handleButtonClick('7')} className="number-button">7</button>
        <button onClick={() => handleButtonClick('+')} className="operation-button">+</button>
        <button onClick={() => handleButtonClick('6')} className="number-button">6</button>
        <button onClick={() => handleButtonClick('5')} className="number-button">5</button>
        <button onClick={() => handleButtonClick('4')} className="number-button">4</button>
        <button onClick={() => handleButtonClick('-')} className="operation-button">-</button>
        <button onClick={() => handleButtonClick('3')} className="number-button">3</button>
        <button onClick={() => handleButtonClick('2')} className="number-button">2</button>
        <button onClick={() => handleButtonClick('1')} className="number-button">1</button>
        <button onClick={() => handleButtonClick('*')} className="operation-button">x</button>
        <button onClick={() => handleButtonClick('0')} className="clear-button">0</button>
        <button onClick={() => handleButtonClick('.')} className="number-button">.</button>
        <button onClick={() => handleButtonClick('=')} className="operation-button">=</button>
      </div>
    </div>
  );
};

export default Calculator;
