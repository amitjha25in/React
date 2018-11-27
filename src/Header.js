import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="jumbotron text-center">
        <div className="container">
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-success" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Header;
