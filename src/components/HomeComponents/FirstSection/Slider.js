import React, { Component } from "react";
import Slider from "react-slick";
import banner1 from '../../../assets/banner1.png'
import banner2 from '../../../assets/banner2.png'
import banner3 from '../../../assets/banner3.png'
import banner4 from '../../../assets/banner4.png'


export default class SimpleSlider extends Component {
  render() {
    var settings = {
      className: "",
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
    return (
        <Slider {...settings}>
          <div>
              <img src={banner1}/>
          </div>
          <div>
              <img src={banner2}/>
          </div>
          <div>
              <img src={banner3}/>
          </div>
          <div>
              <img src={banner4}/>
          </div>

        </Slider>
    );
  }
}