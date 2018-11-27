import React from "react";
import Header from "./Header";

class App extends React.Component {
  state = {
    data: []
  };
  // componentDidMount() {
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/now_playing?api_key=ae2bf7ba6a38060f33525590abb745b2&language=en-US`
  //   )
  //     .then(res => res.json())
  //     .then(json => this.setState({ data: json.results }));
  // }

  render() {
    return (
      <section>
        <Header />
        <div className="container">
          <div className="row mb-3">
            <div className="col-12">
              <h3>You have Searched:</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-md-3 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="./images/sample.png"
                  alt="title"
                />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">Some example text.</p>
                  <a href="#" className="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="./images/sample.png"
                  alt="title"
                />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">Some example text.</p>
                  <a href="#" className="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="./images/sample.png"
                  alt="title"
                />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">Some example text.</p>
                  <a href="#" className="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="./images/sample.png"
                  alt="title"
                />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">Some example text.</p>
                  <a href="#" className="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="./images/sample.png"
                  alt="title"
                />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">Some example text.</p>
                  <a href="#" className="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="./images/sample.png"
                  alt="title"
                />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">Some example text.</p>
                  <a href="#" className="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="./images/sample.png"
                  alt="title"
                />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">Some example text.</p>
                  <a href="#" className="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-3 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="./images/sample.png"
                  alt="title"
                />
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">Some example text.</p>
                  <a href="#" className="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
