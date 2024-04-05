import styled from "styled-components";
import Variables, { transition } from "../../variables";

export const Box = styled.div`
  padding: 0 32px;
  line-height: 2;
  section {
    margin: 32px 0;
  }
  .title {
    font-size: 32px;
    font-weight: 500;
  }
  .sub-title {
    font-size: 17px;
    font-weight: 300;
    color: ${Variables.colors.warm_grey};
  }
  .desc {
    background-color: ${Variables.colors.dark_white};
    border-radius: 17px;
    max-height: ${props => (props.status ? "auto" : "240px")};
    width: 100%;
    padding: 32px;
    padding-bottom: ${props => (props.status ? "64px" : "0")};
    line-height: 2.6;
    overflow: hidden;
    position: relative;
    ${transition(0.3)}
    .more {
      position: absolute;
      text-align: center;
      bottom: 0px;
      width: 100%;
      .gradient {
        width: 100%;
        height: ${props => (props.status ? "6px" : "64px")};
        background-color: rgba(256, 256, 256, 0);
        background-image: linear-gradient(
          rgba(256, 256, 256, 0),
          ${Variables.colors.dark_white}
        );
      }
      .btn {
        border-top: dashed 1px ${Variables.colors.light_grey};
        background-color: ${Variables.colors.dark_white};
        width: 100%;
        padding: 6px;
        width: 100%;
        text-align: center;
        span {
          cursor: pointer;
        }
      }
    }
  }
  .advantages {
    display: flex;
    div {
      width: 50%;
      padding: 96px 32px 0 32px;
      position: relative;
      &:before {
        font-family: maleno;
        position: absolute;
        top: -16px;
        right: 32px;
        font-size: 64px;
      }
      span {
        font-size: 16px;
        font-weight: 500;
        display: block;
        margin-bottom: 16px;
      }
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        li {
          position: relative;
          padding-right: 16px;
          &::before {
            width: 8px;
            height: 8px;
            border-radius: 8px;

            position: absolute;
            top: calc(50% - 4px);
            right: 0px;
            content: "";
          }
        }
      }
    }
    .plus {
      border-left: solid 1px ${Variables.colors.light_grey};
      &::before {
        content: "\\28";
        color: ${Variables.colors.windows_blue};
      }
      span {
        color: ${Variables.colors.windows_blue};
      }
      ul {
        li {
          &::before {
            background-color: ${Variables.colors.windows_blue};
          }
        }
      }
    }
    .mines {
      &::before {
        content: "\\27";
        color: ${Variables.colors.dark_red};
      }
      span {
        color: ${Variables.colors.dark_red};
      }
      ul {
        li {
          &::before {
            background-color: ${Variables.colors.dark_red};
          }
        }
      }
    }
  }
`;
