import React from "react";
import "./App.css";
import rock from "./audio/Basic_Rock_135.mp3";
import boom from "./audio/Boom_Chuk2_130.mp3";
import cymbal from "./audio/Cymbal_Groove.mp3";
import tamba from "./audio/Tamba_112.mp3";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onKeyDown = this.onKeyDown.bind(this);
    this.playSound = this.playSound.bind(this);
  }
  onKeyDown(e) {
    // const keyEvent = e.keyCode;
    // const key = document.getElementById(`$e.keyCode`)
    const audio = document.querySelector(`audio[id="${e.keyCode}"]`);
    console.log(audio);
    audio.currentTime = 0;
    audio.play();
  }
  playSound(e) {
    // const el = document.getElementsByClassName("drum-pad");
    // const audio = document.querySelector(`audio[id="${e.keyCode}"]`);
    // // const keyEvent = e.keyCode;
    // // const audio = document.getElementById(`$e.keyCode`);
    // audio.play()
    // console.log(audio);
  }
  render() {
    return (
      <div tabIndex="0" onKeyDown={this.onKeyDown}>
        <div id="display">
          <h1>The Drum Project</h1>
        </div>
        <div id="drum-machine">
          {/* When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique). */}
          {/* When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered. */}
          <div onClick={this.playSound} className="drum-pad" id="Q">
            <span>Q</span>
            <audio src={rock} className="clip" id="81"></audio>
          </div>
          <div className="drum-pad" id="W">
            <span>W</span>
            <audio src={boom} className="clip" id="87"></audio>
          </div>
          <div className="drum-pad" id="E">
            <span>E</span>
            <audio src={cymbal} className="clip" id="69"></audio>
          </div>
          <div className="drum-pad" id="A">
            <span>A</span>
            <audio src={tamba} className="clip" id="65"></audio>
          </div>
          <div className="drum-pad" id="S">
            <span>S</span>
            <audio src="" className="clip" id="83"></audio>
          </div>
          <div className="drum-pad" id="D">
            <span>D</span>
            <audio src="" className="clip" id="68"></audio>
          </div>
          <div className="drum-pad" id="Z">
            <span>Z</span>
            <audio src="" className="clip" id="90"></audio>
          </div>
          <div className="drum-pad" id="X">
            <span>X</span>
            <audio src="" className="clip" id="88"></audio>
          </div>
          <div className="drum-pad" id="C">
            <span>C</span>
            <audio src="" className="clip" id="67"></audio>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
