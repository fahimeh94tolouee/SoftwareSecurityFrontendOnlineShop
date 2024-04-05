import styled from "styled-components";
import Variables from "../variables";
export const OrderDetail = styled.div`
  background-color: ${Variables.colors.white};
  border-radius: 4px;
  border: solid 1px ${Variables.colors.light_grey};
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
  table {
    width: 100%;
    border-collapse: collapse;
    font-family: Number;
    td,
    th {
      padding: 24px 16px;
      border-left: dashed 1px ${Variables.colors.thin_grey};
      width: 50%;
      &:last-child {
        border-left: none;
      }
      .label {
        color: ${Variables.colors.light_font};
        display: block;
        margin-bottom: 16px;
        font-size: 13px;
      }
      .currency {
        margin-right: 10px;
      }
    }
    tbody {
      tr {
        border-bottom: solid 1px ${Variables.colors.thin_grey};
        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
`;
export const CancelBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  .but {
    border-radius: 8px;
    border: solid 1px #79001f;
    background-color: rgba(126, 0, 32, 0.2);
    margin: 16px 0;
    padding: 8px 64px;
    cursor: pointer;
    color: #79001f;
  }
`;
export const ShippingBox = styled.div`
  background-color: ${Variables.colors.white};
  border-radius: 4px;
  border: solid 2px ${Variables.colors.nice_blue};
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
  .steps {
    padding: 0;
    margin: 32px 64px;
    list-style: none;
    display: flex;
    color: ${Variables.colors.pinkish_grey};
    border-bottom: 2px solid ${Variables.colors.pinkish_grey};
    li {
      width: 14.285%;
      text-align: center;
      padding: 16px 16px 26px 16px;
      position: relative;
      margin-bottom: -2px;
      border-bottom: 2px solid ${Variables.colors.pinkish_grey};
      i {
        font-size: 26px;
        display: block;
      }
      &:before {
        width: 4px;
        height: 4px;
        background-color: ${Variables.colors.pinkish_grey};
        content: "";
        position: absolute;
        border-radius: 4px;
        bottom: 10px;
      }
    }
    .active {
      color: ${Variables.colors.nice_blue};
      border-color: ${Variables.colors.nice_blue};
      &:before {
        background-color: ${Variables.colors.nice_blue};
      }
    }
  }
  .order-detail {
    margin: 32px;
    border-radius: 4px;
    border: 1px solid ${Variables.colors.light_grey};
    table {
      width: 100%;
      border-collapse: collapse;
      font-family: Number;
      td,
      th {
        padding: 24px 16px;
        border-left: dashed 1px ${Variables.colors.thin_grey};
        width: 50%;
        &:last-child {
          border-left: none;
        }
        .label {
          color: ${Variables.colors.light_font};
          display: block;
          margin-bottom: 16px;
          font-size: 13px;
        }
        .currency {
          margin-right: 10px;
        }
      }
      tbody {
        tr {
          border-bottom: solid 1px ${Variables.colors.thin_grey};
          &:last-child {
            border-bottom: none;
          }
        }
      }
    }
    .price-box {
      border-top: 1px solid ${Variables.colors.light_grey};
      text-align: center;
      padding: 32px 16px;
      font-size: 20px;
      .label {
        color: ${Variables.colors.light_font};
        font-size: 13px;
        margin-left: 24px;
      }
      .currency {
        margin-right: 10px;
        font-size: 14px;
      }
    }
  }
  .product-variations {
    border-radius: 4px;
    margin: 24px;
    border: solid 1px ${Variables.colors.nice_blue};
    overflow: hidden;
    table {
      width: 100%;
      border-collapse: collapse;
      font-family: Number;
      thead {
        border-bottom: dashed 1px ${Variables.colors.nice_blue};
      }
      th,
      td {
        padding: 24px 16px;
        border-left: solid 1px ${Variables.colors.thin_grey};
        text-align: center;
      }
      tr {
        border-bottom: solid 1px ${Variables.colors.light_grey};
      }
      td {
        .product-detail {
          display: flex;
          justify-content: space-between;
          align-items: center;
          img {
            width: 64px;
          }
          .content {
            color: ${Variables.colors.dark_font};
            text-align: right;
            margin-right: 16px;
            span {
              margin-bottom: 16px;
              display: block;
              line-height: 22px;
            }
            small {
              font-size: 11px;
              display: block;
              color: ${Variables.colors.light_font};
              margin: 8px 0;
            }
          }
        }
        .currency {
          margin-right: 10px;
        }
        .buy-but {
          background-color: ${Variables.colors.nice_blue};
          padding: 12px 16px;
          color: ${Variables.colors.white};
          cursor: pointer;
          border-radius: 8px;
          min-width: 100px;
          margin: 6px 0;
        }
        .comment-but {
          border: solid 1px ${Variables.colors.nice_blue};
          padding: 12px 16px;
          color: ${Variables.colors.nice_blue};
          cursor: pointer;
          border-radius: 8px;
          min-width: 100px;
          margin: 6px 0;
        }
      }
    }
  }
`;
