import styled from "styled-components";
import Variables, { transition } from "./variables";

export const AuthBox = styled.div`
  background-color: ${Variables.colors.white};
  border-radius: 4px;
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.05);
  width: 364px;
  padding: 32px 24px;
  border: solid 1px ${Variables.colors.light_grey};
  margin: 32px 0;
  .title {
    font-size: 22px;
    font-weight: 500;
    padding-right: 40px;
    margin-bottom: 32px;
    display: flex;
    color: ${Variables.colors.warm_grey};
    align-items: center;
    i {
      //top: calc(50% - 16px);
      margin-right: 8px;
      font-size: 32px;
      color: ${Variables.colors.pinkish_grey};
    }
  }
  label {
    width: 100%;
    font-size: 14px;
    a {
      float: right;
      border-bottom: ${Variables.colors.windows_blue} dotted 1px;
      padding-bottom: 3px;
    }
  }
  input {
    width: 100%;
    margin: 16px 0 48px 0;
    line-height: 40px;
    border-radius: 8px;
    border: ${Variables.colors.light_grey} solid 1px;
    padding: 0 8px;
    text-align: left;
    &::placeholder {
      color: ${Variables.colors.light_grey};
      //text-align: right;
    }
  }
  .but {
    border-radius: 8px;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.16);
    background-color: ${Variables.colors.windows_blue};
    width: 100%;
    color: ${Variables.colors.white};
    line-height: 42px;
    text-align: center;
    margin: 8px 0;
    cursor: pointer;
    ${transition(0.2)}
    &:hover {
      background-color: ${Variables.colors.cool_blue};
    }
  }
  .verify-notice {
    border-radius: 8px;
    color: ${Variables.colors.white};
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
    border: solid 0.2px rgb(112, 112, 112);
    background-color: rgba(64, 110, 105, 0.6);
    font-size: 14px;
    font-weight: 300;
    padding: 16px;
    font-family: Number;
    line-height: 32px;
    margin-bottom: 16px;
    .go-back {
      float: right;
      border-radius: 12px;
      background-color: rgba(48, 48, 48, 0.5);
      padding: 2px 6px;
      cursor: pointer;
      line-height: 20px;
      margin-top: 4px;
    }
  }
  .code-box {
    text-align: center;
    font-size: 36px;
    padding: 12px 0 3px 0;
    margin-bottom: 16px;
    &::placeholder {
      color: ${Variables.colors.light_grey};
      font-size: 32px;
      text-align: center;
    }
  }
  .resend-count{
    font-size: 13px;
    font-family: Number;
    margin-bottom: 16px;
    font-size: 12px;
    color: ${Variables.colors.dark_font};
    direction: rtl;
    display: block;
  }
  .resend{
    font-size: 13px;
    font-family: Number;
    margin-bottom: 16px;
    font-size: 12px;
    color: ${Variables.colors.cool_blue};
    display: inline-block;
    cursor: pointer;
    border-bottom: dashed 1px ${Variables.colors.cool_blue};
  }
`;
export const Ribbon = styled.div`
  background-color: ${Variables.colors.dark_green_blue};
  width: 100%;
  color: ${Variables.colors.white};
  text-align: center;
  line-height: 2.7;
  margin-bottom: 32px;
  a {
    color: ${Variables.colors.white};
    border-bottom: dotted 1px ${Variables.colors.white};
    padding-bottom: 3px;
    margin: 0 8px;
  }
`;
