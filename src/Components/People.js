import React, { Component } from "react";
import { User } from "../Data/User";
import SingleUser from "./SingleUser";

class People extends Component {
  state = {
    userData: User
  };
  handleClick = id => {
    const { userData } = this.state;
    const removedId = userData.filter(uid => uid.id !== id);
    this.setState({
      userData: removedId
    });
  };
  //this is regular method
  // render() {
  //   const { userData } = this.state;
  //   return (
  //     <div className="container">
  //       <div className="row">
  //         {userData.map(user_info => {
  //           return <Single_User key={user_info.id} user={user_info} removeUser={this.handleClick} />;
  //         })}
  //       </div>
  //     </div>
  //   );
  // }
  //is is conditional method
  render() {
    const { userData } = this.state;
    const userList = userData.map(user_info => {
      return (
        <SingleUser
          key={user_info.id}
          user={user_info}
          removeUser={this.handleClick}
        />
      );
    });
    const noData = () => {
      return (
        <div className="col-sm-12 mt-5">
          <div className="alert alert-danger">
            <strong>Danger!</strong> You have Deleted all the data.
          </div>
        </div>
      );
    };
    return (
      <div className="container">
        <div className="row">{userData.length > 0 ? userList : noData()}</div>
      </div>
    );
  }
}

export default People;
