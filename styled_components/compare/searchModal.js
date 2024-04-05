import styled from "styled-components";
import Variables, { desktopWidthLimits } from "../variables";
export const Box = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  .overlay {
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .inner {
    ${desktopWidthLimits()};
    box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.1);
    background-color: ${Variables.colors.white};
    position: inherit;
    width: 80%;
    height: 85%;
    .close {
      position: absolute;
      top: 16px;
      left: 16px;
      width: 22px;
      height: 22px;
      display: inline-block;
      cursor: pointer;
      z-index: 100;
      &::before {
        font-family: maleno;
        content: "\\77";
        font-size: 22px;
      }
    }
    .top {
      background-color: ${Variables.colors.white};
      box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
      min-height: 160px;
      max-height: 160px;
      position: relative;
      .search-area {
        padding: 68px 42px;
        display: flex;
        .input-box {
          width: 100%;
          position: relative;
          input {
            width: 105%;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            border: solid 1px ${Variables.colors.light_grey};
            padding: 16px 48px 16px 16px;
          }
          .but {
            position: absolute;
            color: ${Variables.colors.nice_blue};
            font-size: 32px;
            font-size: 22px;
            top: 14px;
            right: 14px;
            cursor: pointer;
          }
        }
        .select-box {
          width: 220px !important;
          input {
            padding: 10px 0 !important;
          }
        }
      }
    }
    .content {
      background-color: ${Variables.colors.light_white};
      height: calc(100% - 160px);
      min-height: 60px;
      overflow-y: scroll;
      display: flex;
      justify-content: right;
      flex-wrap: wrap;
      align-items: flex-start;
      .loading,
      .empty {
        background-color: rgba(0, 0, 0, 0.2);
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        color: ${Variables.colors.white};
        font-size: 32px;
      }
      .product {
        width: 20%;
        background-color: ${Variables.colors.white};
        border-radius: 4px;
        border: solid 1px rgba(112, 112, 112, 0.1);
        text-align: center;
        margin: 16px 2.5%;
        cursor: pointer;
        &:hover {
          border-color: ${Variables.colors.nice_blue};
          box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
        }
        img {
          width: 60%;
          margin: 32px 0;
        }
        .title {
          height: 48px;
          font-size: 12px;
          line-height: 22px;
          text-align: right;
          padding: 0 16px;
          overflow: hidden;
        }
      }
    }
  }
`;
