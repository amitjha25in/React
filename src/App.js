import React, { Component } from "react";
import "./App.css";
import data from "./Data.json";

class App extends Component {
  state = {
    data: data
  };
  mouseEnter = () => {
    const icons = document.querySelectorAll(".icon__");
    for (var i = 0; i < icons.length; i++) {
      icons[i].addEventListener("mouseover", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  };

  componentDidMount() {
    this.mouseEnter();
  }
  render() {
    return (
      <React.Fragment>
        <div className="jumbotron text-center">
          <h2 className="rug">RANDOM USER GENERATOR</h2>
          <p className="rugP">
            A free, open-source API for generating random user data. Like Lorem
            Ipsum, but for people.
          </p>
        </div>
        <div className="userWrapper">
          <div className="userImg">
            <img src={this.state.data[0].picture.thumbnail} alt="user" />
          </div>
          <div className="userInfo">
            <p className="user_title">Hi, My name is</p>
            <p className="user_value">
              {this.state.data[0].name.first + this.state.data[0].name.last}
            </p>
          </div>
          <div className="social">
            <span data-value={this.state.data[0].email}>
              <i className="icon__ user active" />
            </span>
            <span data-value={this.state.data[0].dob.date}>
              <i className="icon__ envelope" />
            </span>
            <span data-value={this.state.data[0].email}>
              <i className="icon__ calendar" />
            </span>
            <span data-value={this.state.data[0].location.city}>
              <i className="icon__ map-marker" />
            </span>
            <span data-value={this.state.data[0].phone}>
              <i className="icon__ phone" />
            </span>
            <span data-value={this.state.data[0].login.password}>
              <i className="icon__ unlock-alt" />
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
