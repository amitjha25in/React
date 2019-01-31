import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-8 mx-auto">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  autoComplete="true"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  autoComplete="true"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
