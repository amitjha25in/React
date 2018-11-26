import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="card-title">Name = {this.props.name}</div>
          <div className="card-title">Email = {this.props.email}</div>
          <div className="card-title">Phone = {this.props.phone}</div>
          <div className="card-title">Address = {this.props.address}</div>
          <div className="card-title">City = {this.props.city}</div>
          <div className="card-title">State = {this.props.state}</div>
          <div className="card-title">Zip = {this.props.zip}</div>
        </div>
      </div>
    );
  }
}

export default Contact;
