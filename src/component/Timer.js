import React, { Component } from "react";

export default class Timer extends Component {
  state = {
    time: Date.now()
  };
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    let time = new Date(this.state.time).toLocaleTimeString();
    return <div className="col-sm-12">Now:{time}</div>;
  }
}
