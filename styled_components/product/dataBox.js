import styled from "styled-components";
import Variables, { transition } from "../variables";

export const Box = styled.div`
  background-color: ${Variables.colors.light_white};
  border-radius: 5px;
  margin: 16px auto;
  padding-top: 75px;
  position: relative;
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.05);

  .data {
    background-color: ${Variables.colors.white};
    border: solid 1px ${Variables.colors.light_grey};
    border-radius: 5px;
    padding: 64px 0px;
    .sep {
      border: solid 1px ${Variables.colors.light_grey};
      border-bottom-color: ${Variables.colors.thin_grey};
      background-color: ${Variables.colors.white};
      border-top-left-radius: 5px;
      width: 100%;
      height: 10px;
      position: absolute;
      top: 70px;
      right: 0;
      z-index: 1;
    }
    .tabs {
      position: absolute;
      top: 3px;
      width: 100%;
      right: 0;
      ul {
        list-style: none;
        padding: 0px;
        margin: 0px;
        li {
          display: inline-block;
          border: solid 1px ${Variables.colors.pinkish_grey};
          background-color: ${Variables.colors.pinkish_grey};
          color: ${Variables.colors.white};
          font-size: 17px;
          border-bottom: none;
          width: 300px;
          height: 68px;
          border-top-left-radius: 25px;
          border-top-right-radius: 25px;
          cursor: pointer;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          &:hover {
            border: solid 1px ${Variables.colors.windows_blue};
            background-color: ${Variables.colors.windows_blue};
          }
          span {
            position: relative;
            padding-left: 30px;
            &::before {
              font-family: maleno;
              position: absolute;
              left: 0;
            }
          }
          .comments {
            &::before {
              content: "\\e00d";
            }
          }
          .faq {
            &::before {
              content: "\\e005";
            }
          }
          .features {
            &::before {
              content: "\\e01c";
            }
          }
          .review {
            &::before {
              content:"\\2c";
            }
          }
        }
        .active {
          position: relative;
          color: ${Variables.colors.font};
          background-color: ${Variables.colors.white};
          border-color: ${Variables.colors.light_grey};
          position: relative;
          z-index: 2;
          cursor: default;
          &:hover {
            border-color: ${Variables.colors.light_grey};
            background-color: ${Variables.colors.white};
            border-bottom: none;
          }
        }
      }
    }
    .rate-box {
      border-radius: 17px;
      padding: 16px 32px;
      border: solid 1px ${Variables.colors.thin_grey};
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        li {
          display: flex;
          justify-content: space-between;
          padding: 16px 0;
          .rate-title {
            width: 30%;
          }
          .progress {
            background-color: ${Variables.colors.thin_grey};
            height: 4px;
            position: relative;
            border-radius: 3px;
            width: 60%;
            margin-top: 12px;
            span {
              height: 4px;
              border-radius: 3px;
              background: ${Variables.colors.windows_blue};
              display: inline-block;
              position: absolute;
            }
          }
        }
      }
    }
  }
`;
