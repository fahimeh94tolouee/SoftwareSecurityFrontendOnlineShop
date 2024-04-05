import React from 'react'
import Link from 'next/link'
import {Banners,Button} from '../../styled_components/lib/bannerBox'
import { Row, Col } from 'styled-bootstrap-grid'
const BannerBox = props => {
    const imageLink = (banner,index) => {
        if (banner.link.type === 'internal') {
            return (
                <Link key={index} as={banner.link.url} href={banner.link.url}>
                    <a>
                        <img src={banner.image} alt={banner.alt} />
                    </a>
                </Link>
            )
        } else {
            return (
                <a key={index} href={banner.link.url} target={banner.link.target}>
                    <img src={banner.image} alt={banner.alt} />
                </a>
            )
        }
    }
    const buttonLink = (banner,index) => {
        if (banner.link.type === 'internal') {
            return (
                <Link key={index} as={banner.link.url} href={banner.link.url}>
                    <Button>
                        {banner.title}
                    </Button>
                </Link>
            )
        } else {
            return (
                <a key={index} href={banner.link.url} target={banner.link.target}>
                    <Button>
                        {banner.title}
                    </Button>
                </a>
            )
        }
    }
    return (
        <div className="container">
            <Banners>
                <Row>
                    {props.items.map((item, key) => {
                        return (
                            <Col key={key} col="12" md={item.cols}>
                                {item.items.map((banner, index) => {
                                    switch (banner.type) {
                                        case 'image':
                                            return imageLink(banner,index)
                                        case 'button':
                                            return buttonLink(banner,index)
                                        default:
                                            return null
                                    }
                                })}
                            </Col>
                        )
                    })}
                </Row>
            </Banners>
        </div>
    )
}
export default BannerBox