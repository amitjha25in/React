import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class AllPosts extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="wrapper">
          {this.props.postData.map(blog => {
            return (
              <div class={`box box_${blog.id}`} key={blog.id}>
                <Link to={`/post/${blog.id}`}>
                  <h3>{blog.title}</h3>
                </Link>
                <p>{blog.body}</p>
              </div>
            );
          })}
        </div>
        <h3>Next 15</h3>
        <div class="wrapper">
          {this.props.nextTen.map(nb => {
            return (
              <div class={`box box_${nb.id}`} key={nb.id}>
                <Link to={`/post/${nb.id}`}>
                  <h3>{nb.title}</h3>
                </Link>
                <p>{nb.body}</p>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
