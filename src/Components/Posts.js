import React, { Component } from 'react';
import PostForm from "./PostForm"
import SinglePost from "./SinglePost"
import { PostData } from "../Data/PostsData"

export default class Posts extends Component {
    state = {
        postLists: PostData
    }
    handleSubmit = (newState) => {
        newState.id = Math.random();
        let postsLists = [newState, ...this.state.postLists];
        this.setState({
            postLists: postsLists
        })
        console.log(this.state);
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
