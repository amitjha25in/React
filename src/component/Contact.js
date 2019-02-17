import React, { Component } from "react";
import ReactWOW from "react-wow";

export default class Contact extends Component {
  render() {
    return (
      <ReactWOW animation="fadeIn">
        <div className="mainContainer">
          <div className="scroll-content">
            <div className="container">
              <div className="about-wrapper">
                <div className="row">
                  <div className="col-sm-12 col-md-3 col-lg-3" />
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="contact-wrapper">
                      <div className="title-pt go-center">
                        <h2>
                          Need Some <span>Help?</span>
                        </h2>
                      </div>
                      <div className="form-pt">
                        <form>
                          <input name="name" placeholder="Full Name" />
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                          />
                          <textarea
                            name="message"
                            cols="10"
                            rows="5"
                            placeholder="Messge"
                          />
                          <input
                            className="pt-button-regular"
                            type="submit"
                            value="Submit"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-3 col-lg-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactWOW>
    );
  }
}
