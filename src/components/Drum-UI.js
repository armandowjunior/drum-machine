import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faDrum } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faDrum);

const Drum = (props) => {
  return (
    <div id="drum-machine">
      <p id="title">
        <span>
          <FontAwesomeIcon icon="drum" />
        </span>
        Drum Machine
      </p>
      <h2 id="display">{props.display}</h2>
      <button
        className="drum-pad"
        id="Heater-1"
        onClick={props.handleClick("Q", "Heater-1")}
      >
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
          id="Q"
          className="clip"
        ></audio>
        Q
      </button>
      <button
        className="drum-pad"
        id="Heater-2"
        onClick={props.handleClick("W", "Heater-2")}
      >
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          id="W"
          className="clip"
        ></audio>
        W
      </button>
      <button
        className="drum-pad"
        id="Heater-3"
        onClick={props.handleClick("E", "Heater-3")}
      >
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          id="E"
          className="clip"
        ></audio>
        E
      </button>
      <button
        className="drum-pad"
        id="Heater-4"
        onClick={props.handleClick("A", "Heater-4")}
      >
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          id="A"
          className="clip"
        ></audio>
        A
      </button>
      <button
        className="drum-pad"
        id="Clap"
        onClick={props.handleClick("S", "Clap")}
      >
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          id="S"
          className="clip"
        ></audio>
        S
      </button>
      <button
        className="drum-pad"
        id="Open-HH"
        onClick={props.handleClick("D", "Open-HH")}
      >
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          id="D"
          className="clip"
        ></audio>
        D
      </button>
      <button
        className="drum-pad"
        id="Kick-n'-Hat"
        onClick={props.handleClick("Z", "Kick-n'-Hat")}
      >
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          id="Z"
          className="clip"
        ></audio>
        Z
      </button>
      <button
        className="drum-pad"
        id="Kick"
        onClick={props.handleClick("X", "Kick")}
      >
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          id="X"
          className="clip"
        ></audio>
        X
      </button>
      <button
        className="drum-pad"
        id="Closed-HH"
        onClick={props.handleClick("C", "Closed-HH")}
      >
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          id="C"
          className="clip"
        ></audio>
        C
      </button>
      <div className="volume-wrapper">
        <h4 className="volume">Volume</h4>
        <input
          type="range"
          step="0.01"
          onChange={(e) => props.setVolume(e.target.value)}
          value={props.volume}
          max="1"
          min="0"
          className="volume"
        />
      </div>
      <div className="speed-wrapper">
        <h4 className="speed">Timing</h4>
        <input
          type="range"
          step="0.01"
          onChange={(e) => props.setSpeed(e.target.value)}
          value={props.speed}
          max="1.0"
          min="0.1"
          id="speed-slider"
          className="speed"
        />
      </div>
      <h4 id="recording-title">Recorder</h4>
      <h3 id="recording">{props.recording}</h3>
      <div className="controls-wrapper">
        <button onClick={props.playRecording} id="play" className="controls">
          Play
        </button>
        <button onClick={props.clearAll} id="clear" className="controls">
          Clear
        </button>
      </div>
    </div>
  );
};

export default Drum;
