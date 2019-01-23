import React, { Component } from "react";
//import data from "../data/list.json";

export default class Post extends Component {
  state = {
    post: null
  };
  componentDidMount() {
    let id = this.props.match.params.id;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(json => this.setState({ post: json }));
  }
  render() {
    const singalPost = this.state.post ? (
      <div className="row">
        <div className="col-12">
          <h3>{this.state.post.title}</h3>
          <p>{this.state.post.body}</p>
        </div>
      </div>
    ) : (
      <div className="row">Loading</div>
    );
    return <div className="row">{singalPost}</div>;
  }
}
