import React, { useState, useEffect } from "react";
import "./App.css";
import Drum from "./components/Drum-UI";

function App() {
  const [display, setDisplay] = useState("Press a Key!");
  const [volume, setVolume] = useState(1);
  const [recording, setRecording] = useState("");
  const [names, setNames] = useState("");
  const [speed, setSpeed] = useState(0.5);

  const clearAll = () => {
    document.getElementById("clear").classList.add("active");
    setTimeout(() => {
      document.getElementById("clear").classList.remove("active");
    }, 100);
    setDisplay("Press a Key!");
    setRecording("");
    setNames("");
  };

  const playRecording = () => {
    document.getElementById("play").classList.add("active");
    setTimeout(() => {
      document.getElementById("play").classList.remove("active");
    }, 100);

    let recordArray = recording.split(" ");
    let namesArray = names.split(" ");
    let index = 0;

    const interval = setInterval(() => {
      const sound = document.getElementById(recordArray[index]);
      setDisplay(namesArray[index]);
      sound.volume = volume;
      sound.currentTime = 0;
      sound.play();
      index++;
    }, speed * 600);
    setTimeout(
      () => clearInterval(interval),
      (recordArray.length - 1) * speed * 600
    );
  };

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
    sound.parentNode.classList.add("active");
    setTimeout(() => {
      sound.parentNode.classList.remove("active");
    }, 100);
    setDisplay(str);
    sound.volume = volume;
    sound.currentTime = 0;
    sound.play();
    setRecording((prev) => prev + id + " ");
    setNames((prev) => prev + str + " ");
  };

  return (
    <div className="App">
      <Drum
        display={display}
        handleClick={handleClick}
        setVolume={setVolume}
        volume={volume}
        playRecording={playRecording}
        recording={recording}
        clearAll={clearAll}
        setSpeed={setSpeed}
        speed={speed}
      />
    </div>
  );
}

export default App;
