import styled from "styled-components";
import Variables from "./variables";

export const BasketBox = styled.div`
  background-color: ${Variables.colors.white};
  border: solid 1px ${Variables.colors.light_grey};
  border-radius: 4px;
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.05);
  margin: 70px 0;
  .title {
    font-size: 16px;
    margin-top: -30px;
    position: absolute;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    .offer {
      position: absolute;
      width: 92px;
      height: 22px;
      background-color: ${Variables.colors.lipstick};
      color: ${Variables.colors.white};
      font-size: 10px;
      font-weight: 500;
      z-index: 1;
      top: 8px;
      right: -16px;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      line-height: 24px;
      text-align: center;
      padding-right: 10px;
      &:before {
        position: absolute;
        right: 5px;
        content: "\\44";
        font-family: maleno;
        font-size: 14px;
        top: -1px;
      }
    }
    tr {
      border-bottom: solid 1px ${Variables.colors.thin_grey};
      td {
        padding: 22px;
        position: relative;
        .close {
          background-color: ${Variables.colors.pinkish_grey};
          color: ${Variables.colors.white};
          border-radius: 10px;
          width: 20px;
          height: 20px;
          display: inline-block;
          position: relative;
          cursor: pointer;
          &::before {
            position: absolute;
            top: 5px;
            right: 5px;
            font-size: 10px;
          }
        }

        &:first-child {
          width: 20px;
        }
      }
      .image {
        border-left: dashed 1px ${Variables.colors.thin_grey};
        width: 200px;
        img {
          width: 100%;
        }
      }
      .details {
        vertical-align: top;
        a {
          color: ${Variables.colors.font};
        }
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          li {
            padding-right: 30px;
            font-size: 13px;
            line-height: 40px;
            position: relative;
            &:first-child {
              font-size: 14px;
              padding-right: 0;
              i {
                display: inline-block;
                margin: 0 8px;
                font-size: 20px;
              }
            }
            &::before {
              font-family: maleno;
              position: absolute;
              color: ${Variables.colors.pinkish_grey};
              top: 0px;
              font-size: 20px;
              right: 0;
            }
          }
          .seller {
            &:before {
              content: "\\e019";
            }
          }
          .guarantee {
            &:before {
              content: "\\e016";
            }
          }
          .color {
            span {
              width: 20px;
              height: 20px;
              content: "";
              position: absolute;
              border-radius: 5px;
              right: 1px;
              top: 7px;
              border: solid 1px rgba(0, 0, 0, 0.05);
            }
          }
        }
      }
      .number {
        width: 20px;
      }
      .value {
        text-align: center;
        .currency {
          margin-right: 12px;
        }
        .old-price {
          color: ${Variables.colors.pinkish_grey};
          display: block;
          font-size: 12px;
          margin-bottom: 16px;
          text-decoration: line-through;
        }
        .discount {
          color: ${Variables.colors.pinkish_grey};
          display: block;
          font-size: 12px;
          margin-bottom: 16px;
          span {
            margin-left: 12px;
          }
        }
        .price {
          display: block;
          font-size: 18px;
          margin-bottom: 16px;
          span {
            font-size: 14px;
          }
        }
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
`;

export const InvoiceBox = styled.div`
  background-color: ${Variables.colors.dark_white};
  border: solid 1px ${Variables.colors.light_grey};
  border-radius: 4px;
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.05);
  margin-top: 70px;
  margin-bottom: 32px;
  padding: 8px;
  font-family: Number;
  table {
    width: 100%;
    font-size: 13px;
    tr {
      td {
        padding: 8px 0;
        span {
          margin: 0 4px;
        }
        &:last-child {
          text-align: left;
        }
      }
    }
    .blue {
      color: ${Variables.colors.windows_blue};
    }
  }
  .action {
    background-color: ${Variables.colors.white};
    border: solid 1px ${Variables.colors.light_grey};
    border-radius: 8px;
    margin-top: 24px;
    margin-bottom: -16px;
    padding: 16px;
    font-family: Number;
    text-align: center;
    .price-notice {
      font-size: 16px;
      width: 100%;
      display: block;
    }
    .price {
      border: solid 1px ${Variables.colors.thin_grey};
      color: ${Variables.colors.lipstick};
      width: 165px;
      border-radius: 12px;
      font-size: 20px;
      font-weight: 500;
      line-height: 48px;
      margin: auto;
      margin-top: 16px;
      margin-bottom: 16px;
      position: relative;
      padding-right: 20px;
      span {
        font-size: 14px;
        margin: 0 8px;
      }
      &:before {
        content: "\\79";
        font-family: maleno;
        color: ${Variables.colors.pinkish_grey};
        position: absolute;
        left: 8px;
      }
    }
    .but {
      background-color: ${Variables.colors.windows_blue};
      line-height: 56px;
      border-radius: 12px;
      color: ${Variables.colors.white};
      font-size: 18px;
      font-weight: 500;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      margin-bottom: 16px;
      &:before {
        opacity: 0.1;
        content: "";
        width: 63px;
        height: 130%;
        border-radius: 100%;
        position: absolute;
        top: -15%;
        right: -10px;
        background-color: ${Variables.colors.white};
      }
      &:after {
        font-family: maleno;
        color: ${Variables.colors.white};
        content: "\\2a";
        position: absolute;
        right: 16px;
        font-size: 22px;
      }
    }
    .disable{
      opacity: 0.5;
      cursor: default;
    }
    .comment {
      color: ${Variables.colors.warm_grey};
      text-align: right;
      margin-bottom: 16px;
    }
  }
`;
export const SmallBut = styled.div`
  position: absolute;
  bottom: 34px;
  left: 8px;
  background-color: ${Variables.colors.thin_grey};
  border-radius: 12px;
  padding: 6px 12px 6px 42px;
  cursor: pointer;
  &:before {
    font-family: maleno;
    position: absolute;
    left: 12px;
    content: "\\64";
    font-size: 20px;
    top: 4px;
  }
`;
export const Slogans = styled.div`
  background-color: ${Variables.colors.white};
  border: solid 1px ${Variables.colors.light_grey};
  border-radius: 4px;
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.05);
  font-size: 12px;
  padding: 16px 24px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      padding: 12px 0;
      padding-left: 32px;
      position: relative;
      i {
        position: absolute;
        left: 0;
        font-size: 18px;
        top: 10px;
      }
    }
  }
`;
