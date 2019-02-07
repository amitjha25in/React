import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    name: ""
  };

  fetchData = () => {
    const dataName = "spider man";
    fetch(
      `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=${dataName}&entity=movie`
    )
      .then(response => response.json())
      .then(results => this.setState({ name: results.results }));
  };
  componentDidMount() {
    this.fetchData();
  }
  render() {
    console.log(this.state.name);
    return this.state.name.length ? (
      <div className="container">
        <div className="row">
          {this.state.name.map(list => {
            return (
              <div className="col-sm-3 mb-4" key={list.trackId}>
                <div className="card">
                  <img
                    className="img-thumbnail"
                    src={list.artworkUrl100}
                    alt={list.collectionName}
                  />
                  <div className="card-body">
                    <h4 className="card-title">{list.collectionName}</h4>
                    <p className="card-text">{list.longDescription}</p>
                    <a
                      href={list.collectionViewUrl}
                      className="btn btn-primary"
                    >
                      See Profile
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    ) : (
      <div className="container">
        <div className="row">
          <div className="col-12">Loading</div>
        </div>
      </div>
    );
  }
}

export default App;
