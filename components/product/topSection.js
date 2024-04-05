import React, {useRef, useState} from "react";
import {
  Images,
  Details,
  Actions
} from "../../styled_components/product/topSection";
import ReactImageMagnify from "react-image-magnify";
import Rating from "./topSection/rating";
import OfferRibbon from "./topSection/offerRibbon";
import Features from "./topSection/features";
import VariationDetail from "./topSection/variationDetail";
import Carousel from "./carousel";
import Router from "next/router";
const TopSection = props => {
  // const product = props.product.data;
  const product = props.product;
  // const variations = props.product.variations;
  // const variation = props.product.variations[0];
  const variation = null;
  const [carouselStatus, setCarouselStatus] = useState(false);
  const [initialState, setInitialState] = useState(0);
  const cartButs = () => {
    if (variation === undefined) {
      return (
        <div className="notice">
          <span>موجود شد به من اطلاع بده</span>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className="wish">
            <i className="icon-good"/>
          </div>
          <div
            className="add-to-cart"
            onClick={() => {
              props.addToCart(product);
            }}
          >
            <span>Add to Cart</span>
          </div>
        </React.Fragment>
      );
    }
  };
  console.log(props);
  return (
    <React.Fragment>
    <Images containerWidth={props.containerWidth}>
        {/*<OfferRibbon variation={variation} />*/}
        <ReactImageMagnify
          className="zoom"
          enlargedImageContainerClassName="enlarged"
          {...{
            smallImage: {
              alt: product.title,
              isFluidWidth: true,
              src: `${process.env.apiUrl}/${product.image_path}`
            },
            largeImage: {
              src: `${process.env.apiUrl}/${product.image_path}`,
              width: 1200,
              height: 1200
            }
          }}
        />
      </Images>
      <Details>
        <div className="title">
          <div className="right">
            <h1>{product.title}</h1>
          </div>
          <div className="left">
            <div className="ribbon">
              <span>{product.category}</span>
            </div>
            {/*<div className="icon">*/}
            {/*  <img src={product.category} alt={product.category.name} />*/}
            {/*</div>*/}
          </div>
        </div>
        <div className="rate">
          <div className="right">
            <Rating
              rate={4}
              amount={40}
            />
          </div>
          <div className="left"> Style: {product.type}</div>
        </div>
        <div className="variations">
          <div className="right">
            {/*<VariationDetail*/}
            {/*  status={variations.length}*/}
            {/*  variation={variation}*/}
            {/*  switchType={product.category.type}*/}
            {/*  switches={props.product.meta.switches}*/}
            {/*  variationChange={props.variationChange.bind(this)}*/}
            {/*/>*/}
          </div>
          <div className="left">
            {/*<Features items={product.product_data} />*/}
          </div>
        </div>
        <div className="slogans">
          <div className="right">
            <i className="baseicon-shield" />
            Special Service: Product Exchange Guarantee for Refunds
          </div>
          <div className="left">
            <a href="#" target="_blank">
              Sell your product in Maleno
            </a>
          </div>
        </div>
      </Details>
      <Actions>
        <div className="images-but">
          <div className="box">
              <img
                src={`${process.env.apiUrl}/${product.image_path}`}
                alt={product.title}
                onClick={() => {
                  setCarouselStatus(true);
                }}
              />
          </div>
        </div>
        <div className="buts">
          <div className="right">{cartButs()}</div>
          <div className="left">
            <ul>
              <li
                className="compare"
              >
                <i className="icon-law" />
              </li>
              <li className="notice">
                <i className="icon-bell" />
              </li>
              <li className="share">
                <i className="icon-social-media" />
              </li>
            </ul>
          </div>
        </div>
      </Actions>
      {/*{(() => {*/}
      {/*  if (carouselStatus) {*/}
      {/*    return (*/}
      {/*      <Carousel*/}
      {/*        images={product.images}*/}
      {/*        initialState={initialState}*/}
      {/*        slideChange={value => {*/}
      {/*          setInitialState(value);*/}
      {/*        }}*/}
      {/*        close={() => {*/}
      {/*          setCarouselStatus(false);*/}
      {/*        }}*/}
      {/*      />*/}
      {/*    );*/}
      {/*  }*/}
      {/*})()}*/}
    </React.Fragment>
  );
};
export default TopSection;
