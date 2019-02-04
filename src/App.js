import React, { Component } from "react";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

class App extends Component {
  state = {
    name: "abcd"
  };
  render() {
    return (
      <BrowserRouter>
        <div className="container my-5">
          <nav>
            <ul>
              <li>
                <NavLink to="/" activeClassName="selected">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="selected">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/contact",
                    state: { name: this.state.name }
                  }}
                  activeClassName="selected"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <Route>
            <div className="row">
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </div>
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
