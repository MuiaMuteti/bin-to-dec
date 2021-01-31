import './App.css';
import Input from './components/Input';
import ModeSelector from './components/ModeSelector';
import Output from './components/Output';

import {useState} from 'react';

//top level component
function App() {
  //current mode, binary or decimal
  const [mode, setMode] = useState("binary");
  //store user input
  const [inputDigits, setInputDigits] = useState("");

  //set mode and clear previous input
  function changeMode(mode) {
    setMode(mode);
    setInputDigits("");
  }

  //set user input onchange
  function handleInputChange(newDigits) {
    setInputDigits(newDigits);
  }

  //return output based on mode
  function result() {
    const isBinary = (mode === "binary");
    const radix = isBinary? 2 : 10;
    let result = parseInt(inputDigits, radix);
    if (isNaN(result)) {
      return 0;
    }
    if (isBinary) {
      return result;
    } else {
      return result.toString(2);
    }
  }

// set appropriate header
  const isBinary = (mode === "binary");
  const from = isBinary ? "Binary" : "Decimal";
  const to = isBinary ? "Decimal" : "Binary";

  return (
    <div className="App">
      <h1>{from} to {to} Converter</h1>
      <ModeSelector
        mode={mode}
        handleChange={changeMode}
         />
      <Input 
        isBinary={isBinary}
        valueDigits={inputDigits}
        handleInputChange={handleInputChange} />
      <Output 
        isBinary={isBinary}
        result={result()} />
    </div>
  );
}

export default App;
