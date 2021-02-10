import React, { useState, useEffect } from "react";
import "./App.css";
import Drum from "./components/Drum-UI";

function App() {
  const [display, setDisplay] = useState("Press a Key!");

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  function handleKeyPress(event) {
    if (event.keyCode === 81) {
      document.getElementById("Heater-1").click();
    }
    if (event.keyCode === 87) {
      document.getElementById("Heater-2").click();
    }
    if (event.keyCode === 69) {
      document.getElementById("Heater-3").click();
    }
    if (event.keyCode === 65) {
      document.getElementById("Heater-4").click();
    }
    if (event.keyCode === 83) {
      document.getElementById("Clap").click();
    }
    if (event.keyCode === 68) {
      document.getElementById("Open-HH").click();
    }
    if (event.keyCode === 90) {
      document.getElementById("Kick-n'-Hat").click();
    }
    if (event.keyCode === 88) {
      document.getElementById("Kick").click();
    }
    if (event.keyCode === 67) {
      document.getElementById("Closed-HH").click();
    }
  }

  const handleClick = (id, str) => () => {
    // Returns a function that executes another function
    const sound = document.getElementById(id);
    setDisplay(str);
    sound.currentTime = 0;
    sound.play();
    sound.parentNode.classList.add("active");
    setTimeout(() => {
      sound.parentNode.classList.remove("active");
    }, 100);
  };

  return (
    <div className="App">
      <Drum display={display} handleClick={handleClick} />
    </div>
  );
}

export default App;
