import React from "react";
import "./App.css";

const music = [
  {
    id: "Sound1",
    key: "Q",
    keyCode: "88",
    url: "https://www.myinstants.com/media/sounds/snare.mp3",
  },
  {
    id: "Sound2",
    key: "W",
    keyCode: "88",
    url: "https://www.myinstants.com/media/sounds/bass-drum.mp3",
  },
  {
    id: "Sound3",
    key: "E",
    keyCode: "88",
    url: "http://tipiwiki.free.fr/snd/Percussion(4e)2.wav",
  },
  {
    id: "Sound4",
    key: "A",
    keyCode: "88",
    url: "http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav",
  },
  {
    id: "Sound5",
    key: "S",
    keyCode: "88",
    url: "http://billor.chsh.chc.edu.tw/sound/bass4.wav",
  },
  {
    id: "Sound6",
    key: "D",
    keyCode: "88",
    url: "http://david.guerrero.free.fr/Effects/ShotgunReload.wav",
  },
  {
    id: "Sound7",
    key: "Z",
    keyCode: "88",
    url: "http://www.denhaku.com/r_box/tr707/closed.wav",
  },
  {
    id: "Sound8",
    key: "X",
    keyCode: "88",
    url: "http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3",
  },
  {
    id: "Sound9",
    key: "C",
    keyCode: "88",
    url: "http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav",
  },
];

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
