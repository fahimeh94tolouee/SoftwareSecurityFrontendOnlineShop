import styled from "styled-components";
import Variables, { transition } from "../variables";

export const Box = styled.div`
  border-radius: 4px;
  display: flex;
  margin: 16px 0;
  padding: 16px;
  .slider {
    width: 100%;
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
      background-color: ${Variables.colors.white};
      border: solid 2px ${Variables.colors.nice_blue};
      z-index: 10;
      cursor: pointer;
      width: 40px;
      height: 40px;
      box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.16);
      border-radius: 40px;
    }
    .slick-prev {
      display: none !important;
    }
    .slick-next {
      left: 16px;
      bottom: 16px;
      &:before {
        font-family: maleno;
        content: "\\65";
        color: ${Variables.colors.nice_blue};
        position: absolute;
        font-size: 20px;
        top: 7px;
        right: 9px;
      }
    }
    .slick-disabled {
      cursor: default;
    }
  }
  .product-box {
    width: 20%;
    overflow: hidden;
    text-align: center;
    margin: 4px;
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
      height: 50px;
      overflow: hidden;
    }
    .amount,
    .color {
      margin-bottom: 8px;
      font-size: 12px;
      line-height: 24px;
      padding: 0 8px;
      text-align: right;
      color: ${Variables.colors.light_font};
    }
    &:hover {
      background: white;
      border-radius: 4px;
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
    }
  }
`;
