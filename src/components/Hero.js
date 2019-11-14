import React, { Component } from "react";
import Slider from "react-slick";



export default class Hero extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        };
        return (
            <div className="container">
                <Slider {...settings}>
                    <img className="slider_" src={process.env.PUBLIC_URL + '/images/slider_1.jpg'} />
                    <img className="slider_" src={process.env.PUBLIC_URL + '/images/slider_2.jpg'} />
                </Slider>
            </div>
        );
    }
}