import React, { Component } from "react";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Blog from "./component/Blog";
import Service from "./component/Service";
import Nav from "./component/Nav";
//import Timer from "./component/Timer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <section className="bg_color">
          <div className="sideBar">
            <Nav />
          </div>
          <div className="main_content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/service" component={Service} />
              <Route path="/blog" component={Blog} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </section>
      </Router>
    );
  }
}

export default App;
