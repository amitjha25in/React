import React, { Component } from "react";
import AllPosts from "./AllPosts";
import data from "../data/list.json";

export default class Home extends Component {
  state = { data: data };
  render() {
    return <AllPosts postData={this.state.data} />;
  }
}
