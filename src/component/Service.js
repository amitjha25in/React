import React, { Component } from "react";
import ReactWOW from "react-wow";

export default class Service extends Component {
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
                        Servic<span>es</span>
                      </h2>
                      <h6>Front End & Web Developer, UI/UX Designer</h6>
                    </div>
                  </div>
                </div>
                <div className="more-services">
                  <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="advantage-items-two responsive-space-30">
                        <div className="advantage-two">
                          <div className="advantage-icon-two">
                            <i className="fa fa-cogs" />
                          </div>
                          <div className="advantage-text-two">
                            <h5>PSD Design</h5>
                            <p>
                              You've idea in your head or draft in paper, just
                              send it to me and I'll make it a reality.
                            </p>
                          </div>
                        </div>
                        <div className="advantage-two">
                          <div className="advantage-icon-two">
                            <i className="fa fa-cogs" />
                          </div>
                          <div className="advantage-text-two">
                            <h5>HTML to WordPress</h5>
                            <p>
                              You have the real view with you, let me make it a
                              real product that any one can use without code.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 responsive-space-30">
                      <div className="advantage-items">
                        <div className="advantage-two">
                          <div className="advantage-icon-two">
                            <i className="fa fa-cogs" />
                          </div>
                          <div className="advantage-text-two">
                            <h5>PSD to HTML5</h5>
                            <p>
                              When your Design is ready to rock. I'm ready to
                              give it life with some motion effect.
                            </p>
                          </div>
                        </div>
                        <div className="advantage-two">
                          <div className="advantage-icon-two">
                            <i className="fa fa-cogs" />
                          </div>
                          <div className="advantage-text-two">
                            <h5>Website Management</h5>
                            <p>
                              Your website is up and running. I'll look after it
                              every moment,so you can focus at your business.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="advantage-items">
                        <div className="advantage-two">
                          <div className="advantage-icon-two">
                            <i className="fa fa-cogs" />
                          </div>
                          <div className="advantage-text-two">
                            <h5>PSD to WordPress</h5>
                            <p>
                              Planing for a design to turn into a real product,
                              You're at the right place, just forward to me.
                            </p>
                          </div>
                        </div>
                        <div className="advantage-two">
                          <div className="advantage-icon-two">
                            <i className="fa fa-cogs" />
                          </div>
                          <div className="advantage-text-two">
                            <h5>Website Update</h5>
                            <p>
                              When your website need someone to tune it, let me
                              make any changes that you are deaming.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-items">
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                      <div className="service-item">
                        <img
                          src="../images/user.png"
                          alt="Web &amp; Interaction Design"
                        />
                        <h4>Web &amp; Interaction Design</h4>
                        <p>
                          Exceptional websites and app experiences are a blend
                          of the right message and the right technology. Our
                          interactive design approach focuses on usability,
                          impact and achieving results.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                      <div className="service-item">
                        <img
                          src="../images/user.png"
                          alt="Branding and Strategy"
                        />
                        <h4>Branding and Strategy</h4>
                        <p>
                          Whether a new or established business or organization,
                          you can look to us to best articulate who you are,
                          what you do and most importantly why any of it matters
                          beatifully.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                      <div className="service-item">
                        <img
                          src="../images/user.png"
                          alt="Front End Solution"
                        />
                        <h4>Front End Solution</h4>
                        <p>
                          Our full-stack development team works collaboratively
                          to produce exceptional code. An agile, iterative
                          method means dev work happens efficiently and with
                          best practice in web standards as our top-of-mind,
                          tip-of-fingers priority.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                      <div className="service-item">
                        <img
                          src="../images/user.png"
                          alt="Web &amp; Application Development"
                        />
                        <h4>Web &amp; Application Development</h4>
                        <p>
                          The bestp-planned experience is wasted a top-notch
                          implementation. We craft supremely functional websites
                          and applications engineered for stability, performance
                          and long-term adaptability.
                        </p>
                      </div>
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
