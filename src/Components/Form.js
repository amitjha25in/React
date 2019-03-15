import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  state = {
    country_code: "",
    country_name: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const posts = {
      country_code: this.state.country_code,
      country_name: this.state.country_name
    };

    axios
      .post(`http://localhost/testing/json/post.php`, { posts })
      .then(res => {
        //console.log(res);
        console.log(res.data);
      });

    this.setState({
      country_code: "",
      country_name: ""
    });
  };

  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-8 mx-auto">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="country_code">country_code:</label>
                <input
                  type="text"
                  className="form-control"
                  name="country_code"
                  autoComplete="true"
                  value={this.state.country_code}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="country_name">country_name</label>
                <input
                  type="text"
                  className="form-control"
                  name="country_name"
                  autoComplete="true"
                  value={this.state.country_name}
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

export default Form;
