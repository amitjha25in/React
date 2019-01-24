import React, { Component } from "react";

export default class About extends Component {
  componentDidMount() {
    document.title = "About Page";
  }
  render() {
    return <React.Fragment>About</React.Fragment>;
  }
}
