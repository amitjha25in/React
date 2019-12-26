import React, { Component } from "react";

const InitialState = [
  { id: 1, name: "John" },
  { id: 2, name: "Doe" },
  { id: 3, name: "Sam" },
  { id: 4, name: "Sara" }
];

class List extends Component {
  state = {
    user: InitialState,
    count: 5
  };
  Increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  Decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <h6>Dynamic List</h6>
          <div className="col-sm-12">
            <ul>
              {this.state.user.map(item => {
                return <li key={item.id}>{item.name}</li>;
              })}
            </ul>
          </div>
          <h6>Incremane and Decrement</h6>
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-6">
                <div>{this.state.count}</div>
                <button className="btn-primery" onClick={this.Increment}>
                  Increment
                </button>
                <button className="btn-primery ml-5" onClick={this.Decrement}>
                  Decrement
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default List;
