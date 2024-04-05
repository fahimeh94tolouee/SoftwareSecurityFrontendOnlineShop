import styled from "styled-components";
import Variables, { transition } from "../variables";
export const ProductBox = styled.div`
  background-color: ${Variables.colors.white};
  border-radius: 4px;
  border: solid 1px ${Variables.colors.light_grey};
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  margin-bottom: 16px;
  position: relative;
  min-height: 255px;
  .remove {
    width: 20px;
    height: 20px;
    background-color: ${Variables.colors.pinkish_grey};
    color: ${Variables.colors.white};
    position: absolute;
    border-radius: 20px;
    right: 16px;
    top: calc(50% - 10px);
    cursor: pointer;
    &:before {
      content: "\\77";
      font-family: maleno;
      position: absolute;
      font-size: 10px;
      top: 5px;
      right: 5px;
    }
  }
  .image {
    width: 45%;
    border-left: dashed 1px ${Variables.colors.thin_grey};
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 60%;
    }
  }
  .detail {
    width: 55%;
    padding: 16px;
    .notification {
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 16px;
      position: relative;
      padding-right: 24px;
      &::before {
        font-family: maleno;
        position: absolute;
        right: 0;
        content: "\\6b";
        top: -2px;
        font-size: 18px;
      }
    }
    .disable {
      color: ${Variables.colors.cool_blue};
    }
    .enable {
      color: ${Variables.colors.dusty_teal};
    }

    .title {
      font-size: 14px;
      line-height: 26px;
      height: 50px;
      overflow: hidden;
      a {
        color: ${Variables.colors.dark_font};
      }
    }
    .checks {
      list-style: none;
      margin: 16px 0 0 0;
      padding: 0;
      font-size: 13px;
      color: ${Variables.colors.warm_grey};
    }
    .product-data {
      margin-top: 16px;
      .seller {
        display: block;
        position: relative;
        padding-right: 24px;
        font-size: 13px;
        margin-bottom: 16px;
        &:before {
          font-family: maleno;
          content: "\\e019";
          right: 0;
          font-size: 18px;
          position: absolute;
          top: -5px;
          color: ${Variables.colors.pinkish_grey};
        }
      }
      .price {
        border: solid 1px ${Variables.colors.pinkish_grey};
        border-radius: 20px;
        font-size: 22px;
        font-weight: 500;
        color: ${Variables.colors.dark_font};
        text-align: center;
        padding: 8px;
        margin-bottom: 16px;
        .currency {
          font-size: 16px;
          margin-right: 8px;
          font-weight: 300;
          color: ${Variables.colors.font};
        }
      }
      .actions {
        display: flex;
        .add-to-cart {
          background-color: ${Variables.colors.dusty_teal};
          width: 78px;
          height: 32px;
          border-radius: 8px;
          box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
          color: ${Variables.colors.white};
          cursor: pointer;
          margin-left: 16px;
          position: relative;
          &:before {
            content: "\\6a";
            font-family: maleno;
            font-size: 20px;
            position: absolute;
            top: 5px;
            right: 18px;
          }
        }
        .more {
          background-color: ${Variables.colors.cool_blue};
          color: ${Variables.colors.white};
          height: 32px;
          border-radius: 8px;
          box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
          width: 100%;
          text-align: center;
          line-height: 29px;
          cursor: pointer;
        }
      }
    }
  }
`;
