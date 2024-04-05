import React from 'react'
import Slider from "react-slick"
import Link from 'next/link'
import { Banner } from '../../styled_components/lib/fullscreenBanner'
const FullscreenBanner = (props) => {
    const ButtonLink = (title, link) => {
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
        props.items.map((item, key) =>
            <Banner key={key}>
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
            </Banner>
        )
    );
}
export default FullscreenBanner