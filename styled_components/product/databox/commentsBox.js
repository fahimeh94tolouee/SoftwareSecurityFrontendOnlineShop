import styled from "styled-components";
import Variables, { transition } from "../../variables";

export const Box = styled.div`
  padding: 0 32px;
  line-height: 2;
  strong {
    font-size: 20px;
    font-weight: 500;
    display: block;
    margin-bottom: 16px;
  }
  .title {
    display: block;
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  section {
    margin: 32px 0;
  }
  .info {
    padding: 16px;
  }
  .add-comment {
    background-color: ${Variables.colors.windows_blue};
    color: ${Variables.colors.white};
    border-radius: 12px;
    text-align: center;
    font-size: 20px;
    padding: 4px 32px;
    display: table;
    margin: 16px 0;
    cursor: pointer;
    ${transition(0.3)};
    &:hover {
      background-color: ${Variables.colors.cool_blue};
    }
    span {
      padding-left: 40px;
      position: relative;
      &::before {
        font-family: maleno;
        content: "\\e00b";
        position: absolute;
        left: 0;
        top: -13px;
        font-size: 30px;
      }
    }
  }
  .sort-title {
    width: 100%;
    position: relative;
    font-size: 20px;
    &:before {
      content: "";
      width: 100%;
      position: absolute;
      height: 1px;
      background-color: ${Variables.colors.light_grey};
      top: 50%;
      right: 0px;
    }
    span {
      background: ${Variables.colors.white};
      padding-left: 15px;
      position: inherit;
    }
  }
  .sort-list {
    background-color: ${Variables.colors.light_white};
    width: 100%;
    margin: 0;
    padding: 0 16px;
    list-style: none;
    font-size: 14px;
    border-radius: 8px;

    li {
      display: inline-block;
      margin: 3px 8px;
      padding: 0px 6px;
      cursor: pointer;
      &:first-child {
        margin: 0;
        padding: 0;
      }
    }
    .active {
      background-color: ${Variables.colors.windows_blue};
      border-radius: 3px;
      color: ${Variables.colors.white};
      cursor: default;
    }
  }
  .comment {
    border-radius: 17px;
    padding: 16px 32px;
    border: solid 2px ${Variables.colors.thin_grey};
    display: flex;
    font-family: Number;
    margin-bottom: 32px;
    .right {
      width: 20%;
      .buyer-flag {
        background-color: ${Variables.colors.light_green_blue};
        border: solid 1px ${Variables.colors.dark_green_blue};
        color: ${Variables.colors.white};
        border-radius: 3px;
        text-align: center;
        font-size: 14px;
        padding: 8px 24px;
        display: table;
        margin: 32px 0;
        cursor: pointer;
        span {
          padding-right: 30px;
          position: relative;
          &::before {
            font-family: maleno;
            content: "\\6a";
            position: absolute;
            right: 0;
            top: -8px;
            font-size: 20px;
          }
        }
      }
      .color {
        margin-bottom: 16px;
        padding-right: 30px;
        position: relative;
        color: ${Variables.colors.medium_grey};
        span {
          width: 20px;
          height: 20px;
          content: "";
          position: absolute;
          border-radius: 5px;
          right: 0px;
          top: 3px;
          border: solid 1px rgba(0, 0, 0, 0.05);
        }
      }
      .seller {
        margin-bottom: 16px;
        padding-right: 30px;
        position: relative;
        color: ${Variables.colors.medium_grey};
        &:before {
          content: "\\e019";
          position: absolute;
          font-family: maleno;
          right: 0px;
          font-size: 18px;
          top: -5px;
        }
      }
      .seller-rate {
        margin-bottom: 16px;
        padding-right: 30px;
        position: relative;
        color: ${Variables.colors.warm_gery_2};
        &:before {
          content: "\\32";
          position: absolute;
          font-family: maleno;
          right: 0px;
          font-size: 18px;
          top: -5px;
        }
      }
    }
    .left {
      width: 80%;
      position: relative;
      .post {
        border-bottom: solid 1px ${Variables.colors.light_grey};
        width: 100%;
        padding: 16px 0;
        margin-bottom: 32px;
        .comment-title {
          font-size: 20px;
          font-weight: 500;
        }
        .author {
          font-size: 14px;
          font-weight: 300;
        }
      }
      .text {
        line-height: 2.6;
        margin-bottom: 64px;
      }
      .helpful {
        position: absolute;
        right: 0;
        bottom: 0;
        color: ${Variables.colors.warm_gery_2};
        font-size: 14px;
        ul {
          display: inline;
          margin: 0;
          padding-right: 30px;
          list-style: none;
          li {
            display: inline-block;
            border: 2px solid ${Variables.colors.thin_grey};
            padding: 0 8px;
            font-family: Number;
            cursor: pointer;
            margin: 0 4px;
            border-radius: 8px;
          }
        }
      }
    }
  }
`;
