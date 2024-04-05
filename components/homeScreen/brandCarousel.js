import React from 'react'
import Slider from "react-slick"
import { FSlider, Slide, HeaderBox, Box } from '../../styled_components/lib/brandCarousel'
import Arrow from '../lib/slideArrow'
const BrandCarousel = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3200,
        rtl: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <Arrow color='dark' side="next"/>,
        prevArrow: <Arrow color='dark' side="prev"/>
    }
    return (
        <div className="container">
            <Box>
                <FSlider>
                    <Slider {...settings}>
                        {props.items.map((item, key) =>
                            <Slide key={key}>
                                <a href={item.link.url}>
                                    <img src={item.image} alt={item.title}/>
                                </a>
                            </Slide>
                        )}
                    </Slider>
                </FSlider>
            </Box>
        </div>
    );
}
export default BrandCarousel