import styled from "styled-components";
import Variables, { transition } from "../variables";
export const TitleBox = styled.div`
  width: 100%;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  .more-data {
    border-right: solid 1px ${Variables.colors.pinkish_grey};
    border-left: solid 1px ${Variables.colors.pinkish_grey};
    color: ${Variables.colors.pinkish_grey};
    padding: 0 8px;
    margin: 0 8px;
    font-family: Number;
  }
  .back-but {
    float: left;
    background-color: ${Variables.colors.thin_grey};
    border-radius: 8px;
    padding: 6px 16px 6px 32px;
    position: relative;
    margin-top: -5px;
    font-size: 16px;
    cursor: pointer;
    &:before {
      content: "\\64";
      font-family: maleno;
      position: absolute;
      left: 10px;
    }
  }
`;
export const NotFound = styled.div`
  display: flex;
  padding: 100px 16px;
  justify-content: center;
  align-items: center;
  color: ${Variables.colors.pinkish_grey};
  font-size: 22px;
  font-weight: 500;
  flex-direction: column;
  i {
    font-size: 64px;
  }
  span {
    margin: 32px 0;
  }
`;
export const OrdersBox = styled.div`
  background-color: ${Variables.colors.white};
  border-radius: 4px;
  border: solid 2px ${Variables.colors.nice_blue};
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
  table {
    width: 100%;
    text-align: center;
    border-collapse: collapse;
    font-family: Number;
    td,
    th {
      padding: 24px 16px;
      border-left: solid 1px ${Variables.colors.light_grey};
      &:last-child {
        border-left: none;
      }
      .currency {
        margin-right: 10px;
      }
    }
    .but {
      border-radius: 4px;
      padding: 8px;
      border: solid 1px ${Variables.colors.light_grey};
      cursor: pointer;
      margin: 4px 0;
      font-size: 13px;
    }
    thead {
      tr {
        border-bottom: dashed 1px ${Variables.colors.nice_blue};
      }
    }
    tbody {
      tr {
        border-bottom: solid 1px ${Variables.colors.light_grey};
        &:last-child {
          border-bottom: none;
        }
        &:nth-child(even) {
          background-color: ${Variables.colors.thin_grey};
        }
      }
    }
  }
  .more-but {
    line-height: 60px;
    text-align: center;
    border: solid 1px ${Variables.colors.cool_blue};
    color: ${Variables.colors.cool_blue};
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin: -1px;
    cursor: pointer;
    i {
      position: relative;
      margin-right: 8px;
      &:before {
        position: absolute;
        right: 0;
        top: 4px;
      }
    }
  }
`;
export const FavoriteBox = styled.div`
  background-color: ${Variables.colors.white};
  border-radius: 4px;
  border: solid 1px ${Variables.colors.nice_blue};
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 32px;
  table {
    width: 100%;
    border-collapse: collapse;
    font-family: Number;
    .image {
      width: 100px;
      text-align: center;
      img {
        width: 70%;
      }
    }
    .name {
      overflow: hidden;
      height: 20px;
      line-height: 20px;
    }
    .price {
      color: ${Variables.colors.lipstick};
      margin-top: 8px;
    }
    .actions {
      vertical-align: bottom;
      .but {
        width: 112px;
        height: 32px;
        border-radius: 8px;
        border: solid 1px ${Variables.colors.pinkish_grey};
        text-align: center;
        line-height: 28px;
        padding-right: 16px;
        position: relative;
        cursor: pointer;
        &:before {
          font-family: maleno;
          content: "\\e028";
          font-size: 16px;
          position: absolute;
          right: 4px;
          color: ${Variables.colors.pinkish_grey};
        }
      }
      .tell {
        &:before {
          content: "\\6b";
        }
      }
    }
    td,
    th {
      padding: 22px 16px;
      border-left: dashed 1px ${Variables.colors.thin_grey};
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
  .more-but {
    line-height: 60px;
    text-align: center;
    border: solid 1px ${Variables.colors.cool_blue};
    color: ${Variables.colors.cool_blue};
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin: -1px;
    cursor: pointer;
    i {
      position: relative;
      margin-right: 8px;
      &:before {
        position: absolute;
        right: 0;
        top: 6px;
      }
    }
  }
`;
export const PersonalData = styled.div`
  background-color: ${Variables.colors.white};
  border-radius: 4px;
  border: solid 1px ${Variables.colors.light_grey};
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 32px;
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
  .more-but {
    line-height: 60px;
    text-align: center;
    border: solid 1px ${Variables.colors.cool_blue};
    color: ${Variables.colors.cool_blue};
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin: -1px;
    cursor: pointer;
    i {
      position: relative;
      margin-right: 8px;
      &:before {
        position: absolute;
        right: 0;
        top: 6px;
      }
    }
  }
`;
