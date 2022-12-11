import React from 'react';
import Slider from "react-slick";
import Himalaya from '../Home/HomeImage/Himalaya';
import Mamaearth from '../Home/HomeImage/Mamaearth';

const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1
};

export const ImageTestimonial = () => {
    return (
        <Slider {...settings}>
            <Himalaya/>
            <Mamaearth/>
        </Slider>
    );
}