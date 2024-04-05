import styled from "styled-components";
import Variables from "../variables";

export const BasketBox = styled.div`
  background-color: ${Variables.colors.white};
  border: solid 1px ${Variables.colors.light_grey};
  border-radius: 4px;
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.05);
  margin: 70px 0 32px 0;
  position: relative;
  .title {
    font-size: 16px;
    margin-top: -30px;
    position: absolute;
  }
  .send-title {
    font-size: 16px;
    font-weight: 500;
    padding: 32px 16px;
  }
  .express-box {
    padding: 0 16px;
    .data {
      margin: 0;
      padding: 0;
      font-size: 13px;
      font-weight: 300;
      list-style: none;
      margin-bottom: 24px;
      li {
        display: inline-block;
        border-right: solid 1px ${Variables.colors.thin_grey};
        padding: 0 8px;
        &:first-child {
          border-right: none;
          padding-right: 0;
        }
      }
    }
    .time-box {
      .steps {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        li {
          background-color: ${Variables.colors.thin_grey};
          display: inline-block;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          width: 20%;
          padding: 8px 16px;
          line-height: 22px;
          font-family: Number;
          cursor: pointer;
          .day {
            font-size: 16px;
            font-weight: 500;
            display: block;
          }
          .date {
            font-size: 13px;
            font-weight: 300;
            display: block;
          }
          &:hover {
            background-color: ${Variables.colors.white};
            border: solid 1px ${Variables.colors.light_grey};
            position: relative;
            z-index: 2;
          }
        }
        .active {
          background-color: ${Variables.colors.white};
          border: solid 1px ${Variables.colors.light_grey};
          border-bottom-color: ${Variables.colors.white};
          position: relative;
          z-index: 2;
          cursor: default;
          &:hover {
            border-bottom-color: ${Variables.colors.white};
          }
        }
      }
      .times {
        background-color: ${Variables.colors.white};
        border: solid 1px ${Variables.colors.light_grey};
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        margin-bottom: 32px;
        margin-top: -1px;
        z-index: 1;
        position: sticky;
        font-family: Number;
        padding: 0;
        padding-top: 8px;
        list-style: none;
        li {
          padding: 24px 32px;
          border-top: solid 1px ${Variables.colors.light_grey};
          &:first-child {
            border-top: solid 2px ${Variables.colors.nice_blue};
          }
        }
      }
    }
  }
  .iran-post {
    background-color: rgba(251, 203, 13, 0.02);
    border-radius: 8px;
    border: solid 1px #fbebb5;
    margin: 0 8px 32px 8px;
    .slogan {
      font-size: 13px;
      padding: 16px 32px;
    }
    .inner {
      margin: 8px;
      border: solid 2px ${Variables.colors.goldenrod};
      border-radius: 4px;
      background-color: ${Variables.colors.white};
      padding: 16px 32px 0px 32px;
      display: flex;
      .data {
        padding-right: 16px;
        span {
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 15px;
          display: block;
        }
        ul {
          margin: 0;
          padding: 0;
          font-size: 13px;
          font-weight: 300;
          list-style: none;
          margin-bottom: 24px;
          li {
            display: inline-block;
            border-right: solid 1px ${Variables.colors.thin_grey};
            padding: 0 8px;
            &:first-child {
              border-right: none;
              padding-right: 0;
            }
          }
        }
      }
    }
  }
`;
