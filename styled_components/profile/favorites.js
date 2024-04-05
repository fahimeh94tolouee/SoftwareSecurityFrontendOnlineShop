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
    .title {
      font-size: 14px;
      line-height: 26px;
      height: 50px;
      overflow: hidden;
      a {
        color: ${Variables.colors.dark_font};
      }
    }
    .rate {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        display: inline-block;
        margin-left: 2px;
      }
      .icon-star {
        color: ${Variables.colors.gold};
      }
      .icon-favorite {
        color: ${Variables.colors.light_grey};
      }
    }
    .data {
      list-style: none;
      padding: 0;
      margin: 8px 0;
      font-size: 13px;
      color: ${Variables.colors.warm_grey};
      min-height: 80px;
      li {
        padding: 6px 24px 6px 0;
        position: relative;
        i,
        span {
          position: absolute;
          right: 0;
          top: 4px;
        }
        i {
          color: ${Variables.colors.pinkish_grey};
          font-size: 16px;
        }
        span {
          width: 16px;
          height: 16px;
          border-radius: 4px;
          border: solid 1px rgba(125, 125, 125, 0.2);
        }
      }
    }
    .price {
      color: ${Variables.colors.dark_red};
      font-size: 20px;
      font-weight: 500;
      font-family: Number;
      width: 100%;
      .action-but {
        float: left;
        color: ${Variables.colors.white};
        border-radius: 8px;
        box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
        border: solid 1px rgba(112, 112, 112, 0.15);
        padding: 8px 18px 4px 18px;
        margin-top: -8px;
        cursor: pointer;
      }
      .blue-action {
        background-color: ${Variables.colors.cool_blue};
      }
      .grey-action {
        background-color: ${Variables.colors.warm_grey};
      }
    }
  }
`;
