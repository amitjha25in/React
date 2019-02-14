import React, { Component } from "react";
import ReactWOW from "react-wow";

export default class Resume extends Component {
  render() {
    return (
      <ReactWOW animation="fadeIn">
        <div className="mainContainer">
          <div className="scroll-content">
            <div className="container">
              <div className="about-wrapper">
                <div className="row">
                  <div className="col-12">
                    <div className="mainTitle">
                      <h2>
                        Resu<span>Me</span>
                      </h2>
                      <h6>Front End & Web Developer, UI/UX Designer</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactWOW>
    );
  }
}
