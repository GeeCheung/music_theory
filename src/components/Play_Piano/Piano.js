import _ from "lodash";
import React from "react";

import { KEY_TO_NOTE, NOTES, VALID_KEYS } from "../../global/constants";
import { Key } from "./key";

class Piano_hear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressedKeys: [],
    };
  }
  s;

  playNote = (note) => {
    if (!_.isEmpty(note)) {
      const noteAudio = new Audio(document.getElementById(note).src);
      noteAudio.play();
    }
  };

  handleKeyDown = (event) => {
    if (event.repeat) {
      return;
    }
    const key = event.key;
    const updatedPressedKeys = [...this.state.pressedKeys];
    if (!updatedPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
      updatedPressedKeys.push(key);
    }
    this.setState({
      pressedKeys: updatedPressedKeys,
    });
    this.playNote(KEY_TO_NOTE[key]);
  };

  handleKeyUp = (event) => {
    const index = this.state.pressedKeys.indexOf(event.key);
    if (index > -1) {
      this.setState((state) => ({
        pressedKeys: state.pressedKeys.splice(index, 1),
      }));
    }
  };

  componentDidMount = () => {
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("keyup", this.handleKeyUp);
  };

  render() {
    const keys = _.map(NOTES, (note, index) => {
      return (
        <Key key={index} note={note} pressedKeys={this.state.pressedKeys} />
      );
    });

    const audioFiles = _.map(NOTES, (note, index) => {
      return <audio id={note} key={index} src={`../../notes/${note}.mp3`} />;
    });

    return (
      <div>
        <h1 className="pianotextcenter">Play the Piano on your keyboard</h1>
        <p className="pianotextcenter">
          z = C, s= Db, x = D, d = Eb, c = E, v = F, g = F#, b = G, h = Ab, n =
          A, j= Bb, m = B
        </p>

        <div className="piano">{keys}</div>
        <div>{audioFiles}</div>
      </div>
    );
  }
}

export default Piano_hear;
