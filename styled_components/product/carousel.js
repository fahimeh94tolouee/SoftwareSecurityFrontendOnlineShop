import styled from "styled-components";
import Variables, { desktopWidthLimits, transition } from "../variables";
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
    width: calc(100% - 64px);
    height: calc(100% - 64px);
    min-height: 450px;
    display: flex;
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
    .right {
      position: relative;
      .arrow {
        position: absolute;
        border: solid 1px ${Variables.colors.thin_grey};
        background-color: ${Variables.colors.white};
        width: 88px;
        height: 32px;
        left: calc(50% - 44px);
        z-index: 10;
        border-radius: 5px;
        cursor: pointer;
        &::before {
          font-family: maleno;
          font-size: 28px;
          position: absolute;
          right: 30px;
        }
      }
      .next {
        bottom: -16px;
        &::before {
          content: "\\76";
          transform: rotate(180deg);
        }
      }
      .prev {
        top: -16px;
        &::before {
          content: "\\76";
        }
      }
      .disable {
        cursor: default;
        opacity: 0.5;
      }
      .slider {
        width: 150px;
        height: 100%;
        padding: 0px 16px;
        overflow: hidden;
        position: relative;
        ul {
          padding: 0;
          list-style: none;
          height: 100%;
          top: ${props => props.margin}px;
          ${transition(0.4)};
          position: absolute;
          li {
            opacity: 0.6;
            height: 120px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img {
              border-radius: 12px;
              width: 100%;
              cursor: pointer;
            }
          }
          .active {
            opacity: 1;
            img {
              cursor: default;
            }
          }
        }
      }
    }
    .left {
      border: solid 1px ${Variables.colors.thin_grey};
      border-right: dashed 1px ${Variables.colors.thin_grey};
      width: calc(100% - 150px);
      padding: 32px;
      transform: translate3d(0px, 0px, 0px);
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img {
        max-height: 90%;
        max-width: 90%;
      }
    }
  }
`;
