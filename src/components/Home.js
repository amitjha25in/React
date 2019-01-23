import React, { Component } from "react";
import AllPosts from "./AllPosts";
import data from "../data/list.json";

export default class Home extends Component {
  state = { data: data };
  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(response => response.json())
  //     .then(json => this.setState({ data: json }));
  // }
  render() {
    return <AllPosts postData={this.state.data.slice(0, 10)} />;
  }
}
