import styled from "styled-components";
import Variables, { transition } from "../variables";
export const ProductsBox = styled.div`
  border-radius: 4px;
  border: solid 1px ${Variables.colors.light_grey};
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
  padding: 24px 16px;
  display: flow-root;
  .label {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 24px;
  }
  .products {
    border-radius: 4px;
    border: solid 1px ${Variables.colors.nice_blue};
    overflow: hidden;
    background-color: ${Variables.colors.white};
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
            width: 128px;
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
      }
    }
  }
  .select-product {
    float: left;
    cursor: pointer;
    background-color: ${Variables.colors.cool_blue};
    color: ${Variables.colors.white};
    border-radius: 8px;
    padding: 16px 24px;
    margin-top: 16px;
  }
  label {
    font-size: 14px;
    margin: 16px 0;
    display: block;
  }
  .select {
    max-width: 400px;
  }
  textarea {
    max-width: 100%;
    min-width: 100%;
    padding: 8px;
    min-height: 250px;
    max-height: 250px;
    border-radius: 4px;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
    border: solid 1px ${Variables.colors.light_grey};
  }
  .dropzone {
    border: dashed 2px ${Variables.colors.pinkish_grey};
    border-radius: 12px;
    padding: 16px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .but {
      background-color: ${Variables.colors.white};
      border-radius: 8px;
      border: solid 1px ${Variables.colors.pinkish_grey};
      padding: 16px 32px;
      cursor: pointer;
    }
    span {
      font-size: 14px;
      color: ${Variables.colors.pinkish_grey};
      display: block;
      margin: 16px 0;
    }
    .images {
      display: flex;
      div {
        position: relative;
        .del {
          position: absolute;
          width: 22px;
          height: 22px;
          box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.16);
          border: solid 1px ${Variables.colors.warm_grey};
          color: ${Variables.colors.warm_grey};
          border-radius: 22px;
          background-color: ${Variables.colors.white};
          top: -16px;
          right: 0;
          cursor: pointer;
          &:before {
            content: "\\77";
            font-family: maleno;
            position: absolute;
            font-size: 12px;
            top: 4px;
            right: 4px;
          }
        }
      }
      .pending {
        @keyframes imageOpacity {
          0% {
            opacity: 0.8;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            opacity: 0.8;
          }
        }
        img {
          animation-name: imageOpacity;
          animation-duration: 1s;
          opacity: 0.8;
          animation-iteration-count: infinite;
        }
      }
      .failed {
        position: relative;
        &:before {
          position: absolute;
          background-color: ${Variables.colors.lipstick};
          width: 100%;
          height: 100%;
          border-radius: 8px;
          top: 0;
          right: 0;
          z-index: 1;
          opacity: 0.5;
        }
      }
      img {
        width: 62px;
        height: 62px;
        border-radius: 8px;
        margin: 5px;
      }
    }
  }
`;
