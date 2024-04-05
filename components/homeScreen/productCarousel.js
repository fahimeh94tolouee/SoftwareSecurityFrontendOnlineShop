import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import {
  FSlider,
  Slide,
  HeaderBox,
  Box
} from "../../styled_components/lib/productCarousel";
import Arrow from "../lib/slideArrow";
import Axios from "axios";
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

export default class ProductCarousel extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.getData();
  }
  getData() {
    Axios({
      method: "get",
      url: this.props.fetch_url
    })
      .then(response => {
        this.setState({
          loading: false,
          items: response.data.data
        });
      })
      .catch(error => {});
  }
  static Price(price) {
    if (price.old) {
      return (
        <React.Fragment>
          <span className="old">
            {price.old.toLocaleString("fa-IR")}
            <span className="currency">تومان</span>
          </span>
          <span className="new">
            {price.new.toLocaleString("fa-IR")}
            <span className="currency">تومان</span>
          </span>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          {price.new.toLocaleString("fa-IR")}
          <span className="currency">تومان</span>
        </React.Fragment>
      );
    }
  }
  static Discount(discount) {
    if (discount) {
      return <div className="discount">{discount} %</div>;
    }
  }
  makeSlider(){
    if(this.state.loading){
      return <div className="loading">loading</div>;
    }else{
      return (
          <Slider {...settings}>
            {this.state.items.map((item, key) => (
                <Slide key={key}>
                  <Link
                      as={`/product/${item.id}`}
                      href={`/product?id=${item.id}`}
                  >
                    <div className="slide-in">
                      {ProductCarousel.Discount(item.discount)}

                      <div className="img-box">
                        <img src={item.main_image.path} />
                      </div>
                      <div className="title">{item.name}</div>
                      <div className="detail">
                        <div className="category">{item.category.name}</div>
                        <div className="price">
                          {ProductCarousel.Price({
                            old: item.oldPrice,
                            new: item.price
                          })}
                        </div>
                      </div>
                    </div>
                  </Link>
                </Slide>
            ))}
          </Slider>
      )
    }
  }
  render() {
      return (
        <div className="container">
          <Box>
            <HeaderBox>
              {this.props.title}
              <Link as={this.props.more.url} href={this.props.more.url}>
                <a>مشاهده بیشتر</a>
              </Link>
            </HeaderBox>
            <FSlider>
              {this.makeSlider()}
            </FSlider>
          </Box>
        </div>
      );
  }
}
