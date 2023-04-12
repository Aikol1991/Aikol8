import React, { useState } from "react";
import './App.css';
import { Register } from './Register';

function App() {
  const {currentForm, setCurrentForm} = useState('register');

  return (
    <div className="App">
      <Register/>
    </div>
  );
}

export default App;
