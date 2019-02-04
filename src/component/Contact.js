import React, { Component } from "react";

class Contact extends Component {
  state = {
    data: "",
    isLoading: false
  };
  urlData = () => {
    fetch("https://www.candere.com/blog/wp-json/wp/v2/posts")
      .then(response => response.json())
      .then(data => this.setState({ data: data, isLoading: true }));
  };
  componentDidMount() {
    this.urlData();
  }
  render() {
    console.log(this.state.data);
    var blog = this.state.isLoading ? (
      this.state.data.map(items => (
        <div className="col-sm-4 mb-3" key={items.id}>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title r_title">{items.title.rendered}</h4>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="row">
        <h5>Loading</h5>
      </div>
    );

    return <div className="row">{blog}</div>;
  }
}

export default Contact;
