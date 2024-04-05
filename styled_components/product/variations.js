import styled from "styled-components";
import Variables, { transition } from "../variables";
export const Box = styled.div`
  background-color: ${Variables.colors.white};
  border: 1px solid ${Variables.colors.light_grey};
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  position: relative;
  margin-bottom: 16px;
  ${props => (props.boxStatus ? `padding-bottom:50px;` : ``)};
  table {
    width: 100%;
    border-collapse: collapse;
    tr {
      th,
      td {
        border-bottom: solid 1px ${Variables.colors.thin_grey};
        border-left: solid 1px ${Variables.colors.thin_grey};
        padding: 16px;
        &:last-child {
          border-left: none;
        }
      }
      th {
        font-size: 17px;
        font-weight: 500;
      }
      td {
        line-height: 2;
        .brand-link {
          font-size: 16px;
          display: block;
        }
        .like {
          position: relative;
          color: ${Variables.colors.warm_gery_2};
          padding-right: 20px;
          font-size: 14px;
          display: block;
          font-family: Number;
          &::before {
            font-family: maleno;
            content: "\\32";
            position: absolute;
            right: 0px;
            top: -1px;
            font-size: 14px;
            color: ${Variables.colors.warm_gery_2};
          }
        }
        .delivery {
          font-size: 16px;
          position: relative;
          padding-right: 25px;
          color: ${Variables.colors.medium_grey};
          display: block;
          &::before {
            font-family: maleno;
            content: "\\e034";
            position: absolute;
            right: 0px;
            top: -3px;
            font-size: 19px;
            color: ${Variables.colors.medium_grey};
          }
        }
        .notice {
          color: ${Variables.colors.lipstick};
        }
        .packaging {
          font-size: 12px;
          position: relative;
          padding-right: 25px;
          color: ${Variables.colors.warm_gery_2};
          display: block;
          &::before {
            font-family: maleno;
            content: "\\57";
            position: absolute;
            right: 1px;
            top: -4px;
            font-size: 16px;
            color: ${Variables.colors.windows_blue};
          }
          .tooltip {
            position: absolute;
            right: 0px;
            top: 95%;
            z-index: 100;
            width: 230px;
            background-color: ${Variables.colors.white};
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
            border-radius: 5px;
            border: solid 1px ${Variables.colors.light_grey};
            padding: 8px;
            border-top-right-radius: 0px;
            opacity: 0;
            ${transition(0.2)}
          }
          &:hover {
            .tooltip {
              opacity: 1;
            }
          }
        }
        .guarantee {
          font-size: 12px;
          position: relative;
          padding-right: 25px;
          color: ${Variables.colors.warm_gery_2};
          display: block;
          &::before {
            font-family: maleno;
            content: "\\e015";
            position: absolute;
            right: 0px;
            top: -3px;
            font-size: 16px;
            color: ${Variables.colors.warm_gery_2};
          }
        }
        .price {
          font-family: Number;
          font-size: 24px;
          margin-left: 16px;
          color: ${Variables.colors.dark_font};
        }
        .curenncy {
          font-size: 17px;
        }
      }
      &:last-child {
        td {
          ${props => (props.boxStatus ? `` : `border-bottom: none;`)}
        }
      }
    }
  }
  .add-to-cart {
    background-color: ${Variables.colors.windows_blue};
    color: ${Variables.colors.white};
    padding: 8px 48px;
    font-size: 18px;
    border-radius: 12px;
    display: inline-block;
    cursor: pointer;
    ${transition(0.2)}
    min-width: 239px;
    &:hover {
      background-color: ${Variables.colors.cool_blue};
    }
  }

  .more {
    position: absolute;
    width: 100%;
    bottom: 0px;
    background-color: rgba(256, 256, 256, 0.3);
    background-image: linear-gradient(
      rgba(256, 256, 256, 0.3),
      ${Variables.colors.white}
    );
    text-align: center;
    line-height: 4.5;
    font-family: Number;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    span {
      cursor: pointer;
      position: relative;
      padding-left: 30px;
      &::after {
        font-family: maleno;
        content: "\\76";
        position: absolute;
        top: 13px;
        left: 6px;
        line-height: 0;
        transform: rotate(180deg);
      }
    }
    .close {
      &::after {
        transform: rotate(0deg);
      }
    }
  }
`;
