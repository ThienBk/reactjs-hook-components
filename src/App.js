import React, { useCallback, useState } from "react";
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/router/NavBar";

function App() {
  const [show, setShow] = useState(false)
  
  return (
    <div>
      <NavBar />
      
    </div>
  );
}

export default App;
