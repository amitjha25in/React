import React, { Component } from "react";
import track from "../data/track.json";

export default class Post extends Component {
  state = { post: track };

  trackLists = () => {
    let trackId = this.props.match.params.id;
    const { post } = this.state;
    const filteredTours = post.filter(item => item.listId == trackId);
    this.setState({ post: filteredTours });
  };
  componentDidMount() {
    this.trackLists();
  }
  render() {
    const singalPost = this.state.post ? (
      <div className="row">
        <div className="col-12">
          {this.state.post.map(singleItem => {
            return <p key={singleItem.id}>{singleItem.track}</p>;
          })}
        </div>
      </div>
    ) : (
      <div className="row">Loading</div>
    );
    return <div className="row">{singalPost}</div>;
  }
}
