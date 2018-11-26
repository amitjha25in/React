import React, { Component } from "react";
import "./App.css";
import Modal from "./modal/Modal";
import Tab from "./tabs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Modal />
        <Tab />
      </div>
    );
  }
}

export default App;
