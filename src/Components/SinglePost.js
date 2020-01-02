import React, { Component } from 'react';

export default class SinglePost extends Component {
    render() {
        const Posts = this.props.postLists;
        return (
            <>
                {Posts.map(item => {
                    return (
                        <div className="col-sm-12 mb-4" key={item.id}>
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">{item.title}</h4>
                                    <p className="card-text">{item.body}</p>
                                    <a href="item.id" className="card-link">Read More</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }
}
