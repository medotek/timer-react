import React, { Component } from "react";
import "./App.css";
import Timer from "../Timer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0,
      paused: true
    };
  }

  startTimer = () => {
    this.interval = setInterval(() => this.counter(), 1000);
    this.setState({ paused: false });
    console.log("stop");
    console.log(this.counter());
  };

  stopTimer = () => {
    clearInterval(this.interval);
    this.setState({ paused: true });
  };

  onClickHandler = () => {
    if (this.state.paused) {
      console.log("start");
      this.startTimer();
    } else {
      console.log("stop");
      this.stopTimer();
    }
  };

  counter = () => {
    if (this.state.seconds === 60) {
      this.setState({
        minutes: this.state.minutes + 1,
        seconds: 0
      });
    } else {
      this.setState({
        seconds: this.state.seconds + 1
      });
      console.log(this.state.minutes + ":" + this.state.seconds);
    }
  };

  render() {
    return (
      <div className="App">
        <Timer time={this.state.minutes + ":" + this.state.seconds} />
        <button
          className={this.state.paused ? "paused" : ""}
          onClick={this.onClickHandler}
        >
          {this.state.paused ? "play" : "pause"}
        </button>
      </div>
    );
  }
}

export default App;
