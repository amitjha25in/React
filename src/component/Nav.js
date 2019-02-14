import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="r_Navigation">
          <li>
            <NavLink activeClassName="selected" exact to="/">
              <i className="fa fa-home" aria-hidden="true" />
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/resume">
              <i className="fa fa-pencil-square-o" aria-hidden="true" />
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/portfolio">
              <i className="fa fa-pencil-square-o" aria-hidden="true" />
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/service">
              <i className="fa fa-map-marker" aria-hidden="true" />
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/about">
              <i className="fa fa-user-o" aria-hidden="true" />
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/contact">
              <i className="fa fa-map-marker" aria-hidden="true" />
            </NavLink>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
