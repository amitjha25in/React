import React, { Component } from "react";
import { User } from "../Data/Data";

class People extends Component {
  state = {
    peopleName: User
  };

  render() {
    console.log(this.state.peopleName);
    const { peopleName } = this.state;

    return (
      <>
        {peopleName.map(item => {
          return <span>{item.id}</span>;
        })}
      </>
    );
  }
}

export default People;
