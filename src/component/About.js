import React, { Component } from "react";
import ReactWOW from "react-wow";

export default class About extends Component {
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
                        About <span>Me</span>
                      </h2>
                      <h6>Front End & Web Developer, UI/UX Designer</h6>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="flexDisplay">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                      <div className="about-left ">
                        <h4 className="title-inside">How I can help?</h4>
                        <p className="first-para">
                          When your business or website need someone to manage
                          and tune it, but you don't need a in-house developer,
                          I can provide remote Web Design Development services
                          that is right for you. I deliver instant ROI because I
                          am experienced at eliminating the costs of hiring,
                          training, and retaining in-house full stack web
                          developer.
                        </p>
                        <p>
                          Wow you still reading this... Looks like you are not
                          joking and really interested in my help? So below
                          information is only for you...
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                      <img
                        className="img-fluid"
                        src="../images/undraw_wireframing_nxyi.svg"
                        alt="ui"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="service">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="funfact-item">
                      <svg
                        className="svg-inline--fa fa-bong fa-w-14"
                        aria-hidden="true"
                        data-prefix="fas"
                        data-icon="bong"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M302.5 512c23.18 0 44.43-12.58 56-32.66C374.69 451.26 384 418.75 384 384c0-36.12-10.08-69.81-27.44-98.62L400 241.94l9.38 9.38c6.25 6.25 16.38 6.25 22.63 0l11.3-11.32c6.25-6.25 6.25-16.38 0-22.63l-52.69-52.69c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l9.38 9.38-39.41 39.41c-11.56-11.37-24.53-21.33-38.65-29.51V63.74l15.97-.02c8.82-.01 15.97-7.16 15.98-15.98l.04-31.72C320 7.17 312.82-.01 303.97 0L80.03.26c-8.82.01-15.97 7.16-15.98 15.98l-.04 31.73c-.01 8.85 7.17 16.02 16.02 16.01L96 63.96v153.93C38.67 251.1 0 312.97 0 384c0 34.75 9.31 67.27 25.5 95.34C37.08 499.42 58.33 512 81.5 512h221zM120.06 259.43L144 245.56V63.91l96-.11v181.76l23.94 13.87c24.81 14.37 44.12 35.73 56.56 60.57h-257c12.45-24.84 31.75-46.2 56.56-60.57z"
                        />
                      </svg>
                      <h2>
                        <span className="counter">7</span>
                      </h2>
                      <p>Year of experiences</p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="funfact-item">
                      <svg
                        className="svg-inline--fa fa-check-double fa-w-16"
                        aria-hidden="true"
                        data-prefix="fas"
                        data-icon="check-double"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M504.5 171.95l-36.2-36.41c-10-10.05-26.21-10.05-36.2 0L192 377.02 79.9 264.28c-10-10.06-26.21-10.06-36.2 0L7.5 300.69c-10 10.05-10 26.36 0 36.41l166.4 167.36c10 10.06 26.21 10.06 36.2 0l294.4-296.09c10-10.06 10-26.36 0-36.42zM166.57 282.71c6.84 7.02 18.18 7.02 25.21.18L403.85 72.62c7.02-6.84 7.02-18.18.18-25.21L362.08 5.29c-6.84-7.02-18.18-7.02-25.21-.18L179.71 161.19l-68.23-68.77c-6.84-7.02-18.18-7.02-25.2-.18l-42.13 41.77c-7.02 6.84-7.02 18.18-.18 25.2l122.6 123.5z"
                        />
                      </svg>
                      <h2>
                        <span className="counter">519</span>
                      </h2>
                      <p>Finished Projects</p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="funfact-item">
                      <svg
                        className="svg-inline--fa fa-child fa-w-12"
                        aria-hidden="true"
                        data-prefix="fas"
                        data-icon="child"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M120 72c0-39.765 32.235-72 72-72s72 32.235 72 72c0 39.764-32.235 72-72 72s-72-32.236-72-72zm254.627 1.373c-12.496-12.497-32.758-12.497-45.254 0L242.745 160H141.254L54.627 73.373c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255L104 213.254V480c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V368h16v112c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V213.254l94.627-94.627c12.497-12.497 12.497-32.757 0-45.254z"
                        />
                      </svg>
                      <h2>
                        <span className="counter">250</span>+
                      </h2>
                      <p>Happy Clients</p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="funfact-item">
                      <svg
                        className="svg-inline--fa fa-beer fa-w-14"
                        aria-hidden="true"
                        data-prefix="fas"
                        data-icon="beer"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M368 96h-48V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24v-42.11l80.606-35.977C429.396 365.063 448 336.388 448 304.86V176c0-44.112-35.888-80-80-80zm16 208.86a16.018 16.018 0 0 1-9.479 14.611L320 343.805V160h48c8.822 0 16 7.178 16 16v128.86zM208 384c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16zm-96 0c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16z"
                        />
                      </svg>
                      <h2>
                        <span className="counter">400</span>+
                      </h2>
                      <p>Website Developed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="about-video">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 responsive-space-30">
                    <div className="video-two">
                      <div className="video-bg">
                        <img
                          src="../images/undraw_product_tour_foyt.svg"
                          alt="Amit Jha"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="inner-wrapper">
                      <p className="first-para">
                        I have experience with designing and coding custom
                        WordPress themes and customizing pre-made ones in order
                        to suit the client needs, so as designing and developing
                        landing pages and complete websites, responsive
                        large-scale email templates, and providing consultancy
                        services in various web and design domains. During my
                        freelance career, I've completed 500+ successful jobs
                        and over 10000 hours of work.
                      </p>
                      <p>
                        I’m a self-driving individual that can work on his own
                        without a need of micromanaging everything, and also I
                        can work as a part of the team, whether it’s a small or
                        a big one. I am a go-getter and am always willing to go
                        that extra mile to achieve excellence.
                      </p>
                      <div className="video-btn-wrapper">
                        <div className="button-3d-pt">
                          <a className="pt-button" href="#">
                            <span className="one-pt">Contact</span>
                            <span className="two-pt" />
                            <span className="three-pt">Amit</span>
                          </a>
                        </div>
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
