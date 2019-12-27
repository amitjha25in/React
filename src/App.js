import React, { Component } from "react";
import "./App.css";
import Modal from "./modal/Modal";
import Tab from "./tabs";
import News from "./News.json";

class App extends Component {
  state = {
    news: News
  };
  render() {
    return (
      <div className="App">
        <Modal />
        <Tab />
        <div className="container">
          <div className="row">
            {this.state.news.map((item, i) => {
              return (
                <div className="col-sm-4 mb-4" key={i}>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={item.urlToImage}
                      alt="new_item"
                      style={{ width: "100%", height: "150px" }}
                    />
                    <div className="card-body">
                      <h4 className="card-title">{item.title}</h4>
                      <p className="card-text">{item.description}</p>
                      <a href={item.url} className="btn btn-primary">
                        View Story
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
