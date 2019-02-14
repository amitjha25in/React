import React, { Component } from "react";
import ReactWOW from "react-wow";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  contact: "",
  errorFirstName: "",
  errorEmail: "",
  errorPassword: "",
  animate: ""
};
class Form extends Component {
  state = initialState;
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  errorDetect = () => {
    let errorFirstName = "";
    let errorEmail = "";
    let errorPassword = "";

    if (this.state.firstName.length < 2) {
      errorFirstName = "please enter your first name";
    }
    if (!this.state.email.includes("@")) {
      errorEmail = "Please Enter corrent email";
    }
    if (this.state.password.length < 8) {
      errorPassword = "please enter your password";
    }
    if (errorEmail || errorFirstName || errorPassword) {
      this.setState({
        errorFirstName,
        errorEmail,
        errorPassword,
        animate: "shake"
      });
      return false;
    }
    return true;
  };
  onSubmit = e => {
    e.preventDefault();
    const isValid = this.errorDetect();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }
  };
  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-8 mx-auto">
            <h3 className="text-center mb-5">Form</h3>

            <ReactWOW animation={this.state.animate}>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                  <p>{this.state.errorFirstName}</p>
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address:</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <p>{this.state.errorEmail}</p>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <p>{this.state.errorPassword}</p>
                </div>
                <div className="form-group">
                  <label htmlFor="contact">Contact:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="contact"
                    value={this.state.contact}
                    onChange={this.handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </ReactWOW>
          </div>
        </div>
      </div>
    );
  }
}
export default Form;
