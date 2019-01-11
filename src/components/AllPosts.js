import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AllPosts extends Component {
  render() {
    return (
      <div className="row">
        {this.props.postData.map(blog => {
          return (
            <div className="col-12 mb-3" key={blog.id}>
              <Link to={`/post/${blog.id}`}>
                <h3>{blog.title}</h3>
              </Link>
              <p>{blog.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
