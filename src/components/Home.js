import React, { Component } from "react";
import AllPosts from "./AllPosts";

export default class Home extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => this.setState({ data: json }));
  }
  render() {
    return <AllPosts postData={this.state.data.slice(0, 10)} />;
  }
}
