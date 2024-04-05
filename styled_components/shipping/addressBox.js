import styled from "styled-components";
import Variables from "../variables";

export const AddressBox = styled.div`
  background-color: ${Variables.colors.white};
  border: solid 1px ${Variables.colors.light_grey};
  border-radius: 4px;
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.05);
  margin: 70px 0 32px 0;
  position: relative;
  &:before {
    width: 4px;
    height: 100%;
    position: absolute;
    content: "";
    background-color: ${Variables.colors.windows_blue};
    right: -5px;
    border-radius: 4px;
    top: 0;
  }
  .title {
    font-size: 16px;
    margin-top: -30px;
    position: absolute;
  }
  .inner {
    background-color: ${Variables.colors.white};
    padding: 32px 16px;
    height: 162px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    .right {
      .receiver {
        font-size: 16px;
        font-weight: 500;
      }
      .contact {
        list-style: none;
        margin: 32px 0 16px 0;
        padding: 0;
        li {
          display: inline-block;
          border-right: solid 1px ${Variables.colors.light_grey};
          padding: 8px;
          font-size: 13px;
          font-weight: 300;
          &:first-child {
            border-right: none;
          }
        }
      }
      .address {
        position: relative;
        padding-right: 20px;
        font-size: 13px;
        font-weight: 300;
        &:before {
          font-family: maleno;
          content: "\\36";
          position: absolute;
          right: 0;
        }
      }
    }
    .left {
      display: flex;
      flex-direction: column;
      div {
        border-radius: 8px;
        box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
        border: 1px solid ${Variables.colors.light_grey};
        width: 150px;
        margin: 8px;
        padding: 6px;
        text-align: center;
        cursor: pointer;
        position: relative;
        &:before {
          font-family: maleno;
          position: absolute;
          right: 5px;
        }
      }
      .edit {
        box-shadow: none;
        border: none;
        &:before {
          content: "\\37";
        }
      }
      .change {
        &:before {
          content: "\\5c";
        }
      }
    }
  }
`;
export const AddressOpenBox = styled.div`
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
  .notice {
    font-size: 13px;
    font-weight: 300;
    margin: 32px;
    display: block;
  }
  .add-address {
    margin: 16px;
    border: dashed 2px ${Variables.colors.pinkish_grey};
    border-radius: 12px;
    text-align: center;
    padding: 32px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    span {
      position: relative;
      padding-right: 30px;
      &:before {
        font-family: maleno;
        content: "\\28";
        position: absolute;
        top: 4px;
        right: 0px;
      }
    }
  }
  .address-bar {
    margin: 32px 16px;
    margin-bottom: 64px;
    position: relative;
    .inner {
      background-color: ${Variables.colors.white};
      border-radius: 4px;
      box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.05);
      border: solid 1px ${Variables.colors.light_grey};
      padding: 32px 16px;
      height: 162px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: inherit;
      z-index: 1;
      .right {
        .receiver {
          font-size: 16px;
          font-weight: 500;
        }
        .contact {
          list-style: none;
          margin: 32px 0 16px 0;
          padding: 0;
          li {
            display: inline-block;
            border-right: solid 1px ${Variables.colors.light_grey};
            padding: 8px;
            font-size: 13px;
            font-weight: 300;
            &:first-child {
              border-right: none;
            }
          }
        }
        .address {
          position: relative;
          padding-right: 20px;
          font-size: 13px;
          font-weight: 300;
          &:before {
            font-family: maleno;
            content: "\\36";
            position: absolute;
            right: 0;
          }
        }
      }
      .left {
        display: flex;
        flex-direction: column;
        div {
          border-radius: 8px;
          box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
          border: 1px solid ${Variables.colors.light_grey};
          width: 100px;
          margin: 8px;
          padding: 6px;
          text-align: center;
          position: relative;
          cursor: pointer;
          &:before {
            font-family: maleno;
            position: absolute;
            right: 5px;
          }
        }
        .edit {
          &:before {
            content: "\\37";
          }
        }
        .remove {
          background-color: ${Variables.colors.light_grey};
          &:before {
            content: "\\77";
          }
        }
      }
    }
    .back {
      background-color: ${Variables.colors.pinkish_grey};
      color: ${Variables.colors.white};
      position: absolute;
      width: calc(100% + 6px);
      height: calc(100% + 48px);
      border-radius: 4px;
      right: -6px;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      padding-bottom: 16px;
      cursor: pointer;
      &:hover {
        background-color: ${Variables.colors.windows_blue};
      }
    }
  }
  .active {
    .back {
      background-color: ${Variables.colors.windows_blue};
    }
  }
`;