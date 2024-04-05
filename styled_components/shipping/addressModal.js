import styled from "styled-components";
import Variables from "../variables";

export const AddressModal = styled.div`
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
    box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.1);
    background-color: ${Variables.colors.light_white};
    position: inherit;
    width: 800px;
    border-radius: 4px;
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
    .title {
      position: relative;
      line-height: 60px;
      padding-right: 50px;
      font-size: 20px;
      font-weight: 500;
      &:before {
        font-family: maleno;
        position: absolute;
        right: 16px;
        content: "\\36";
        font-size: 24px;
      }
    }
    .form {
      padding: 32px;
      padding-top: 0;
      label {
        display: block;
        margin: 32px 0 8px 0;
        font-size: 14px;
        span {
          color: ${Variables.colors.lipstick};
          margin-right: 5px;
        }
      }
      .input {
        border: 1px solid ${Variables.colors.light_grey};
        width: 100%;
        line-height: 36px;
        border-radius: 5px;
        padding: 0 8px;
        font-family: Number;
        &::placeholder {
          color: ${Variables.colors.pinkish_grey};
          text-align: right;
        }
      }
      .ltr {
        text-align: left;
        direction: rtl;
      }
      .select {
        .select__control {
          border-color: ${Variables.colors.light_grey};
        }
        .select__placeholder {
          color: ${Variables.colors.pinkish_grey};
        }
      }
      textarea {
        width: 100%;
        height: 80px;
        max-width: 100%;
        min-width: 100%;
        min-height: 8px;
        max-height: 80px;
        border: 1px solid ${Variables.colors.light_grey};
        border-radius: 5px;
        padding: 0 8px;
        line-height: 26px;
        &::placeholder {
          color: ${Variables.colors.pinkish_grey};
        }
      }
    }
    .buts {
      padding: 32px;
      display: flex;
      justify-content: right;
      align-items: center;
      .submit {
        background-color: ${Variables.colors.windows_blue};
        text-align: center;
        color: ${Variables.colors.white};
        font-size: 18px;
        padding: 12px 32px;
        border-radius: 8px;
        cursor: pointer;
      }
      .cancel {
        margin: 0 16px;
        color: ${Variables.colors.cool_blue};
        border-bottom: dashed 1px ${Variables.colors.cool_blue};
        cursor: pointer;
        i {
          position: relative;
          &:before {
            position: absolute;
            top:5px;
            left:-20px;
          }
        }
      }
    }
  }
`;
