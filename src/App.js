import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
class App extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/:id" component={Movie} />
          </div>
        </Router>
      </section>
    );
  }
}
class Home extends React.Component {
  state = {
    data: []
  };
  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=ae2bf7ba6a38060f33525590abb745b2&language=en-US`
    )
      .then(res => res.json())
      .then(json => this.setState({ data: json.results }));
  }

  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            {this.state.data.map(items => {
              return (
                <div
                  className="col-12 col-sm-6 col-md-4 col-xl-3 mb-4"
                  key={items.id}
                >
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={`http://image.tmdb.org/t/p/w780${items.poster_path}`}
                      alt={items.title}
                    />
                    <div className="card-body">
                      <h4 className="card-title">{items.title}</h4>
                      <p>Release Date: {items.release_date}</p>
                      {/* <p className="card-text">
                        {items.overview.length < 40
                          ? `${items.overview}`
                          : `${items.overview.substring(0, 35)}...`}
                      </p> */}
                      <Link to={`/${items.id}`} className="btn btn-primary">
                        See Profile
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
class Movie extends React.Component {
  render() {
    console.log(this.props.location.pathname);
    return (
      <div className="container">
        <div className="row mb-3">
          <div className="col-12">
            <h3>You have Searched:{this.props.location.pathname}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-4">
            Search Result
          </div>
        </div>
      </div>
    );
  }
}
export default App;
