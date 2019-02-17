import React, { Component } from "react";

export default class Menu extends Component {
  handleChange = () => {
    const menuClass = document.querySelector(".menu_container");
    const sideBar = document.querySelector(".sideBar");
    const nav = document.querySelectorAll(".r_Navigation li");

    menuClass.addEventListener("click", () => {
      menuClass.classList.toggle("change");
      sideBar.classList.toggle("open");
    });
    nav.forEach(function(element) {
      element.addEventListener("click", () => {
        sideBar.classList.remove("open");
        menuClass.classList.remove("change");
      });
    });
  };

  componentDidMount() {
    this.handleChange();
  }
  componentWillUnmount() {
    this.handleChange();
  }
  render() {
    return (
      <div className="menu_container" onClick={this.handleChange}>
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />
      </div>
    );
  }
}
