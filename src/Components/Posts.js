import React, { Component } from 'react';
import PostForm from "./PostForm"
import SinglePost from "./SinglePost"
import { PostData } from "../Data/PostsData"

export default class Posts extends Component {
    state = {
        postLists: PostData
    }
    handleSubmit = (title, body) => {
        this.setState({ ...this.state.postLists, title: title, body: body })
        console.log(title, body)
    }
    render() {
        return (
            <div className="row">
                <PostForm handleSubmit={this.handleSubmit} />
                <div className="col-sm-8">
                    <div className="row">
                        <SinglePost postLists={this.state.postLists} />
                    </div>
                </div>
            </div>
        )
    }
}
