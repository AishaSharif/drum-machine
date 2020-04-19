import React from "react";
import "./App.css";

const App = () => (
  <div id="drum-machine">
    <div id="drum-machine">
      {music.map((key, idx) => (
        <Box text={key.key} key={idx} audio={key.url} />
      ))}
    </div>
  </div>
);

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
  }
  playSound = () => {
    this.audio.current.play();
  };
  render() {
    const { text, audio } = this.props;
    return (
      <div className="drum-pad" onClick={this.playSound}>
        {text}
        <audio ref={this.audio} src={audio} className="clip" id={text}></audio>
      </div>
    );
  }
}

document.addEventListener("keydown", (e) => {
  const keyCode = e.key.toUpperCase();
  const audio = document.getElementById(keyCode);
  if (audio) {
    audio.play();
  }
});


export default App;
