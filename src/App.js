import React, { Component } from "react";
import "./App.css";

class App extends Component {
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
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="user"
            />
          </div>
          <div className="userInfo">
            <p className="user_title">Hi, My name is</p>
            <p className="user_value">gail fernandez</p>
          </div>
          <div className="social">
            <span>
              <i class="user" />
            </span>
            <span>
              <i class="envelope" />
            </span>
            <span>
              <i class="calendar" />
            </span>
            <span>
              <i class="map-marker" />
            </span>
            <span>
              <i class="phone" />
            </span>
            <span>
              <i class="unlock-alt" />
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
