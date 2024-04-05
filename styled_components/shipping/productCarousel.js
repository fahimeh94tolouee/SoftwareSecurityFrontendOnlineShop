import styled from "styled-components";
import Variables, { transition } from "../variables";

export const Box = styled.div`
  border-radius: 4px;
  ${props=>{
    if(!props.noBorder){
        return `border: 2px solid ${Variables.colors.nice_blue};`
    }
  }};
  display: flex;
  .slide-back {
    border: 2px solid ${Variables.colors.nice_blue};
    width: 100%;
    position: absolute;
    height: 202px;
    border-radius: 4px;
  }
  .slider {
    width: 100%;
    .slick-slide {
      padding-right: 4px;
    }
    .slick-active {
      .img-box {
        &::before {
          width: 1px;
          height: 208px;
          content: "";
          position: absolute;
          background-color: ${Variables.colors.light_grey};
          left: -8px;
        }
      }
    }
    .slick-arrow {
      position: absolute;
      top: 50%;
      background-color: ${Variables.colors.white};
      z-index: 10;
      cursor: pointer;
      width: 26px;
      height: 70px;
      display: flex !important;
      justify-content: center;
      align-items: center;
      border: solid 1px ${Variables.colors.light_grey};
      margin-top: -35px;
      img {
        width: 8.5px;
        height: 35.5px;
      }
    }
    .slick-prev {
      right: 0;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    .slick-next {
      left: 0;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    .slick-disabled {
      cursor: default;
    }
  }
  .product-box {
    width: 180px;
    height: 200px;
    overflow: hidden;
    text-align: center;
    ${transition(0.2)}
    img {
      display: block;
      margin: 24px auto 16px auto;
      height: 115px;
    }
    .product-title {
      margin-bottom: 16px;
      font-size: 12px;
      line-height: 24px;
      padding: 0 8px;
      text-align: right;
    }
    &:hover {
      background: white;
      margin: -3px 0;
      border-radius: 4px;
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
      height: 206px;
    }
  }
`;
