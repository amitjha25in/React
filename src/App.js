import React, { Component } from "react";
import Form from "./Components/Form";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    axios.get(`http://localhost/testing/json/json.php`).then(res => {
      const data = res.data.slice(0, 10);
      this.setState({ data });
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <Form />
        </div>
        <div className="row items">
          {this.state.data.map(item => {
            return (
              <div className="flex__ text-center" key={item.id}>
                <span>{item.country_name}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
