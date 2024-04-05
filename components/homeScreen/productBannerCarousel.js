import React from 'react'
import Slider from "react-slick"
import Link from 'next/link'
import { FSlider, Slide,HeaderBox } from '../../styled_components/lib/productBannerCarousel'
import Arrow from '../lib/slideArrow'
const ProductBannerCarousel = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        rtl: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <Arrow color='dark' side="next"/>,
        prevArrow: <Arrow color='dark' side="prev"/>
    }
    

    return (
        <div className="container">
            <HeaderBox>
                {props.title}
                <Link as={props.more} href={props.more}>
                    <a>
                        مشاهده بیشتر
                    </a>
                </Link>
            </HeaderBox>
            <FSlider>
                <Slider {...settings}>
                    {props.items.map((item, key) =>
                        <Slide key={key}>
                            <img src={item.image}></img>
                            <div className="title">
                                <span className="number">{key + 1}</span>
                                <h3>
                                    {item.title}
                                </h3>
                                <span className="price">
                                    {item.price.toLocaleString('fa-IR')}
                                    <span>
                                        تومان   
                                    </span>
                                </span>
                            </div>
                        </Slide>
                    )}
                </Slider>
            </FSlider>
        </div>
    );
}
export default ProductBannerCarousel