import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/post/:id" component={Post} />
        </div>
      </Router>
    );
  }
}

export default App;
