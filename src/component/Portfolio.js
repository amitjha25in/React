import React, { Component } from "react";
import ReactWOW from "react-wow";

export default class Portfolio extends Component {
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
                        Portfo<span>lio</span>
                      </h2>
                      <h6>Front End & Web Developer, UI/UX Designer</h6>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="cat-nav">
                      <ul className="list-inline go-center">
                        <li className="list-inline-item active" data-filter="*">
                          All
                        </li>
                        <li
                          className="list-inline-item"
                          data-filter=".wordpress"
                        >
                          WordPress
                        </li>
                        <li
                          className="list-inline-item"
                          data-filter=".frontend"
                        >
                          Front End
                        </li>
                        <li className="list-inline-item" data-filter=".design">
                          UI UX Design
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="pt-portfolio-items sirat-portfolio-style-one row">
                  <div className="pt-portfolio-item frontend col-lg-4 col-md-6">
                    <div className="single-image">
                      <div className="porfolio-img">
                        <img
                          src="../images/cart_popup.jpg"
                          alt="frontend development"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pt-portfolio-item wordpress col-lg-4 col-md-6">
                    <div className="single-image">
                      <div className="porfolio-img">
                        <img
                          src="../images/cart_popup.jpg"
                          alt="WordPress Website"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pt-portfolio-item frontend col-lg-4 col-md-6">
                    <div className="single-image">
                      <div className="porfolio-img">
                        <img
                          src="../images/cart_popup.jpg"
                          alt="Agency Website"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pt-portfolio-item design col-lg-4 col-md-6">
                    <div className="single-image">
                      <div className="porfolio-img">
                        <img
                          src="../images/cart_popup.jpg"
                          alt="Freelance Marketplace Website"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pt-portfolio-item wordpress col-lg-4 col-md-6">
                    <div className="single-image">
                      <div className="porfolio-img">
                        <img
                          src="../images/cart_popup.jpg"
                          alt="eCommerce Website"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pt-portfolio-item wordpress col-lg-4 col-md-6">
                    <div className="single-image">
                      <div className="porfolio-img">
                        <img
                          src="../images/cart_popup.jpg"
                          alt="WordPress Blog"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pt-portfolio-item wordpress col-lg-4 col-md-6">
                    <div className="single-image">
                      <div className="porfolio-img">
                        <img
                          src="../images/cart_popup.jpg"
                          alt="WordPress Blog"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pt-portfolio-item wordpress col-lg-4 col-md-6">
                    <div className="single-image">
                      <div className="porfolio-img">
                        <img
                          src="../images/cart_popup.jpg"
                          alt="WordPress Blog"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pt-portfolio-item wordpress col-lg-4 col-md-6">
                    <div className="single-image">
                      <div className="porfolio-img">
                        <img
                          src="../images/cart_popup.jpg"
                          alt="WordPress Blog"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="partner-logo go-center">
                  <h2>
                    Tech <span>Partners</span>
                  </h2>
                  <div className="row">
                    <div className="col-sm-3 col-md-3 col-lg-3">
                      <div className="client-logo">
                        <img
                          src="../images/magento.png"
                          alt="magento development"
                        />
                      </div>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3">
                      <div className="client-logo">
                        <img src="../images/trello.png" alt="trello" />
                      </div>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3">
                      <div className="client-logo">
                        <img
                          src="../images/google-analytics.png"
                          alt="google analytics"
                        />
                      </div>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3">
                      <div className="client-logo">
                        <img
                          src="../images/shopify.png"
                          alt="shopify developer"
                        />
                      </div>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3">
                      <div className="client-logo">
                        <img src="../images/html5.png" alt="html5 developer" />
                      </div>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3">
                      <div className="client-logo">
                        <img
                          src="../images/javascript.png"
                          alt="javascript expert"
                        />
                      </div>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3">
                      <div className="client-logo">
                        <img src="../images/jquery.png" alt="jquery expert" />
                      </div>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3">
                      <div className="client-logo">
                        <img
                          src="../images/wordpress.png"
                          alt="wordpress expert development"
                        />
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
