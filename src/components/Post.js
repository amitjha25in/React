import React, { Component } from "react";
import track from "../data/track.json";

export default class Post extends Component {
  state = { post: track };

  trackLists = () => {
    // let trackId = this.props.match.params.id;
    let trackId = this.props.location.state.id;
    const { post } = this.state;
    const filteredTours = post.filter(item => item.listId == trackId);
    this.setState({ post: filteredTours });
  };
  componentDidMount() {
    this.trackLists();
    let trackTitle = this.props.location.state.title;
    document.title = trackTitle;
  }
  render() {
    const singalPost = this.state.post ? (
      <React.Fragment>
        <div className="col-4">
          <img
            className="img-fluid"
            src={this.props.location.state.img}
            alt={this.props.location.state.title}
          />
          <h3>{this.props.location.state.title}</h3>
        </div>
        <div className="col-8">
          {this.state.post.map(singleItem => {
            return <p key={singleItem.id}>{singleItem.track}</p>;
          })}
        </div>
      </React.Fragment>
    ) : (
      <div className="row">Loading</div>
    );
    return <div className="row">{singalPost}</div>;
  }
}
