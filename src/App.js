import React from "react";
import Header from "./Header";

class App extends React.Component {
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
    const path = "https://api.themoviedb.org/3/movie/";
    console.log(this.state.data);
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            {this.state.data.map(mv => (
              <div className="col-6 col-sm-4 col-lg-3 mb-3" key={mv.id}>
                <div className="card">
                  <img
                    className="card-img-top"
                    src={`https://image.tmdb.org/t/p/w300/${mv.poster_path}`}
                    alt="Movie Poster"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {mv.original_title.length < 10
                        ? `${mv.original_title}`
                        : `${mv.original_title.substring(0, 15)}...`}
                    </h5>
                    <p className="card-text">
                      {mv.overview.length < 100
                        ? `${mv.overview}`
                        : `${mv.overview.substring(0, 100)}...`}
                    </p>
                    <a
                      href={`https://www.themoviedb.org/movie/${mv.id}`}
                      className="btn btn-primary"
                      target="_blank"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
