//SGN
import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [visible, setVisible] = useState(false);

  const handleParaDisplay = () => {
      setVisible(true);
  }

  return (
    <div id="main">
      {/* ONS  Do not alter the main div */}
      <button id="click" onClick={handleParaDisplay}>Show Para</button>
      {visible && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>}
      
    </div>
  );
}


export default App;
