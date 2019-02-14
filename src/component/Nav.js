import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="r_Navigation">
          <li>
            <NavLink activeClassName="selected" exact to="/">
              <span className="menu_icon">
                <i className="fa fa-home" aria-hidden="true" />
              </span>
              <span className="menu_name">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/resume">
              <span className="menu_icon">
                <i className="fa fa-address-card-o" aria-hidden="true" />
              </span>
              <span className="menu_name">Resume</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/portfolio">
              <span className="menu_icon">
                <i className="fa fa-file-code-o" aria-hidden="true" />
              </span>
              <span className="menu_name">Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/service">
              <span className="menu_icon">
                <i className="fa fa-cogs" aria-hidden="true" />
              </span>
              <span className="menu_name">Service</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/about">
              <span className="menu_icon">
                <i className="fa fa-user-o" aria-hidden="true" />
              </span>
              <span className="menu_name">About</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/contact">
              <span className="menu_icon">
                <i className="fa fa-map-marker" aria-hidden="true" />
              </span>
              <span className="menu_name">Contact</span>
            </NavLink>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
