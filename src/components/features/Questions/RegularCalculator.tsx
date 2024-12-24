import React, { useEffect, useState } from 'react';
import DraggableItem from './DraggableItem';

const RegularCalculator = () => {
  const [input, setInput] = useState('');
  const recognizedKeys = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9", '+', '-', 'x', '/']

  const handleDeleteOneChar = () => {
    const newExpression = input.slice(0, -1)
    setInput(newExpression)
  }

  const handleCalculation = () => {
    // Replace display operators with JavaScript operators for eval (since times and divison are acc * and /)
    const sanitizedInput = input.replace(/÷/g, '/').replace(/×/g, '*');
    // Use eval to calculate the result
    setInput(eval(sanitizedInput).toString());
  }

  useEffect(() => {
    const handleKeyPress = (event: { key: string }) => {
      if (recognizedKeys.includes(event.key)) {
        setInput((prevState) => `${prevState}${event.key}`);
      } else if (event.key === "Backspace") {
        handleDeleteOneChar();
      } else if (event.key == "Enter") {
        handleCalculation()
      }
    };
  
    document.addEventListener("keydown", handleKeyPress);
  
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  
  

  const handleButtonClick = (value: string) => {
    if (value === 'DEL') {
      setInput('');
    } else if (value === '=') {
      try {
        handleCalculation()
      } catch {
        setInput('Error');
      }
    } else if (value == "C" && input !== "0") {
        handleDeleteOneChar()
    } else {
      // Prevent multiple consecutive operators (e.g., "++", "--", "**", "//")
      if (/[\+\-\×\÷\.]$/.test(input) && /[\+\-\×\÷\.]/.test(value)) {
        return;
      }
      setInput(input + value);
    }
  };

  const buttons = [
    '7', '8', '9', '÷',
    '4', '5', '6', '×',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'DEL', 'C'
  ];

  return (
    <DraggableItem
      title="Regular Calculator"
      content={
        <div className="bg-gray-100 p-4 rounded shadow-lg w-80">
          {/* Display */}
          <div className="bg-white p-4 mb-4 text-right text-xl font-mono rounded border border-gray-300">
            {input || '0'}
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-4 gap-2">
            {buttons.map((btn) => (
              <button
                key={btn}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded shadow font-bold text-lg"
                onClick={() => handleButtonClick(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      }
    />
  );
};

export default RegularCalculator;