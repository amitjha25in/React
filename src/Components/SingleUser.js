import React, { Component } from "react";

class SingleUser extends Component {
  render() {
    const { id, name, phone, email, company } = this.props.user;
    const { removeUser } = this.props;
    return (
      <div className="col-sm-4 mb-4">
        <div className="card">
          <img
            className="card-img-top"
            src="https://www.w3schools.com/bootstrap4/img_avatar1.png"
            alt="profileImg"
          />
          <div className="card-body">
            <h4 className="card-title">Name: {name}</h4>
            <p className="card-text">Email: {email}</p>
            <p className="card-text">Company: {company.name}</p>
            <p className="card-text">Phone: {phone}</p>
            <button className="btn btn-primary" onClick={() => removeUser(id)}>
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleUser;
