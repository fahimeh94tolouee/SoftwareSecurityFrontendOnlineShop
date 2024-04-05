import React from 'react'
import Slider from "react-slick"
import Link from 'next/link'
import { FSlider, Slide } from '../../styled_components/lib/fullscreenCarousel'
import Arrow from '../lib/slideArrow'
const FullscreenCarousel = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        rtl: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Arrow color='light' side="next"/>,
        prevArrow: <Arrow color='light' side="prev"/>
    }
    const ButtonLink = (title,link) => {
        if (link.type === 'internal') {
            return (
                <Link as={link.url} href={link.url}>
                    <button>
                        {title}
                    </button>
                </Link>
            )
        } else {
            return (
                <a href={link.url} target={link.target}>
                    <button>
                        {title}
                    </button>
                </a>
            )
        }
    }
    return (
        <FSlider>
            <Slider {...settings}>
                {props.items.map((item, key) =>
                    <Slide key={key}>
                        <img src={item.image}></img>
                        <div className="slogans">
                            <h3>
                                {item.title}
                            </h3>
                            <span>
                                {item.subtitle}
                            </span>
                            {ButtonLink(item.buttonTitle,item.link)}
                        </div>
                    </Slide>
                )}
            </Slider>
        </FSlider>
    );
}
export default FullscreenCarousel