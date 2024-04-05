import React from "react";
import { Box } from "../../styled_components/shipping/productCarousel";
import Slider from "react-slick";
import Arrow from "../lib/slideArrow";
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: false,
  autoplaySpeed: 3200,
  rtl: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <Arrow color="dark" side="next" />,
  prevArrow: <Arrow color="dark" side="prev" />
};
const ProductCarousel = props => {
  if (props.items.length > 5) {
    return (
      <Box noBorder={true}>
        <div className="slide-back" />
        <div className="slider">
          <Slider {...settings}>
            {props.items.map(item => (
              <div className="product-box" key={item.id}>
                <img src={item.main_image.path} alt={item.name} />
                <div className="product-title">{item.name}</div>
              </div>
            ))}
          </Slider>
        </div>
      </Box>
    );
  } else {
    return (
      <Box>
        {props.items.map(item => (
          <div className="product-box" key={item.id}>
            <img src={item.main_image.path} alt={item.name} />
            <div className="product-title">{item.name}</div>
          </div>
        ))}
      </Box>
    );
  }
};
export default ProductCarousel;
