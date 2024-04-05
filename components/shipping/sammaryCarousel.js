import React from "react";
import { Box } from "../../styled_components/shipping/sammaryCarousel";
import Slider from "react-slick";
import Arrow from "../lib/slideArrow";
const NextArrow = (props)=>{
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={style}
            onClick={onClick}
        />
    );
};
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
    nextArrow: <NextArrow color="dark" side="next" />,
    prevArrow: <Arrow color="dark" side="prev" />
};
const SammaryCarousel = props => {
    if (props.items.length > 5) {
        return (
            <Box noBorder={true}>
                <div className="slider">
                    <Slider {...settings}>
                        {props.items.map(item => (
                            <div className="product-box" key={item.id}>
                                <img src={item.main_image.path} alt={item.name} />
                                <div className="product-title">{item.name}</div>
                                <div className="amount">
                                    تعداد:
                                    {item.quantity}
                                    عدد
                                </div>
                                <div className="color">
                                    رنگ:
                                    {item.color.name}
                                </div>
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
                        <div className="amount">
                            تعداد:
                            {item.quantity}
                            عدد
                        </div>
                        <div className="color">
                            رنگ:
                            {item.color.name}
                        </div>
                    </div>
                ))}
            </Box>
        );
    }
};
export default SammaryCarousel;
