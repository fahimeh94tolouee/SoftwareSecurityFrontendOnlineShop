import styled from "styled-components";
import Variables, { desktopWidthLimits } from "../variables";
export const Box = styled.div`
  background-color: ${Variables.colors.light_white};
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.05);
  padding: 8px;
  position: ${props => (props.fix ? "sticky" : "relative")};
  top: 0;
  right: 0;
  z-index: 1;
  ${props => {
    if (!props.fix) {
      return `
          border-radius: 4px;
          margin: 16px 24px;
          border: solid 0.2px rgb(112, 112, 112);
          ${desktopWidthLimits()}
          `;
    }
  }}
  .inner {
    display: flex;
    flex-wrap: wrap;
    ${props => {
      if (props.fix) {
        return `
            margin: 16px 24px;
          ${desktopWidthLimits()}
          `;
      }
    }}
    .box {
      width: 24%;
      margin: 0 0.5%;
      background-color: ${Variables.colors.white};
      border-radius: 4px;
      box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.05);
      border: solid 1px ${Variables.colors.cool_blue};
      text-align: center;
      position: relative;
      .close {
        position: absolute;
        left: 8px;
        top: 8px;
        cursor: pointer;
      }
      img {
        width: ${props => (props.fix ? "34%" : "44%")};
        margin: 5%;
      }
      .title {
        text-align: right;
        padding: 8px 16px;
      }
      .price {
        font-size: 22px;
        font-family: Number;
        color: ${Variables.colors.dark_red};
        span {
          margin-right: 6px;
          font-size: 16px;
        }
      }
      .but {
        display: ${props => (props.fix ? "none" : "block")};
        background-color: ${Variables.colors.nice_blue};
        color: ${Variables.colors.white};
        border-radius: 8px;
        margin: 16px;
        padding: 14px;
        cursor: pointer;
      }
    }
    .search-box {
      width: 24%;
      margin: 0 0.5%;
      text-align: center;
      .search-but {
        border: dashed 2px ${Variables.colors.pinkish_grey};
        border-radius: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 32px;
        margin: 5%;
        cursor: pointer;
        font-size: 13px;
        line-height: 16px;
        i {
          font-size: ${props => (props.fix ? "62px" : "100px")};
          line-height: 94px;
        }
      }
      .but {
        display: ${props => (props.fix ? "none" : "block")};
        background-color: ${Variables.colors.marine};
        color: ${Variables.colors.white};
        border-radius: 8px;
        margin: 16px;
        padding: 14px;
        cursor: pointer;
        text-align: center;
      }
    }
  }
`;
