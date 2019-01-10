import React, { Component } from "react";

export default class AllPosts extends Component {
  render() {
    console.log(this.props.postData);
    return (
      <div className="row">
        {this.props.postData.map(blog => {
          return (
            <div className="col-12 mb-3" key={blog.id}>
              <h3>{blog.title}</h3>
              <p>{blog.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
