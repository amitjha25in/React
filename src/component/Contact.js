import React, { Component } from "react";

class Contact extends Component {
  state = {
    data: "",
    isLoading: true
  };
  urlData = () => {
    fetch("https://www.candere.com/blog/wp-json/wp/v2/posts")
      .then(response => response.json())
      .then(data => this.setState({ data: data, isLoading: false }));
  };
  componentWillMount() {
    this.urlData();
  }
  render() {
    const blogData = () => {
      this.state.data.map(blogData => {
        return (
          <div className="col-12" key={blogData.id}>
            <h5>{blogData.id}</h5>
          </div>
        );
      });
    };

    const loadingData = () => {
      return (
        <div className="col-sm-12">
          <h5>Loading</h5>
        </div>
      );
    };

    return (
      <React.Fragment>
        {this.state.isLoading ? loadingData() : blogData()}
      </React.Fragment>
    );
  }
}

export default Contact;
