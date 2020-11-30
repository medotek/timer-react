import React, { Component } from "react";
import "./App.css";
import Timer from "../Timer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minstr: "00",
      secstr: "00",
      minutes: 0,
      seconds: 55,
      paused: true
    };
  }

  startTimer = () => {
    this.interval = setInterval(() => this.counter(), 1000);
    this.setState({ paused: false });
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

  //Incrementation du temps dans les variables d'états
  counter = () => {
    let seconds = this.state.seconds
    let minutes = this.state.minutes

    //Mise à jour des entiers seconds et minutes
    if (seconds === 59) {
      this.setState({
        minutes: minutes + 1,
        seconds: 0
      });
    } else {
      this.setState({
        seconds: seconds + 1
      });
    }

    //Mise à jour des chaines de caractères secstr et minstr
    this.setState({
      minstr: minutes > 9 ? minutes : "0"+minutes,
      secstr: seconds > 9 ? seconds : "0"+seconds
    })

    console.log(minstr+":"+secstr);
  };

  render() {
    return (
      <div className="App">
        <Timer time={this.state.minstr+this.state.secstr} />
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
