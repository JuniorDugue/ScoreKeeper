import React, { Component } from "react";
import { render } from "react-dom";

export default class ScoreKeeper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    };
  }

  render() {
    return (
      <div>
        <h1>ScoreKeeper Component</h1>
        <p>Score is: {this.state.score}</p>
        <button>Single Kill!</button>
      </div>
    );
  }
}
