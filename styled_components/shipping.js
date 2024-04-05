import styled from "styled-components";
import Variables,{transition} from "./variables";

export const Steps = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  text-align: center;
  margin-top: -50px;
  position: relative;
  li {
    width: 200px;
    font-size: 14px;
    font-weight: 500;
    border-bottom: ${Variables.colors.pinkish_grey} solid 6px;
    padding-bottom: 28px;
    position: relative;
  }
  .passed {
    cursor: pointer;
    color: ${Variables.colors.cool_blue};
    &:before {
      background-color: ${Variables.colors.windows_blue};
      width: 100%;
      height: 6px;
      position: absolute;
      content: "";
      bottom: -6px;
      right: 0;
    }
  }
  .active {
    color: ${Variables.colors.windows_blue};
    &:before {
      background-color: ${Variables.colors.windows_blue};
      width: 50%;
      height: 6px;
      position: absolute;
      content: "";
      bottom: -6px;
      right: 0;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    &:after {
      background-color: ${Variables.colors.windows_blue};
      width: 8px;
      height: 8px;
      border-radius: 8px;
      content: "";
      position: absolute;
      right: calc(50% - 4px);
      bottom: 12px;
    }
  }
`;

export const SendTypeBox = styled.div`
  background-color: ${Variables.colors.white};
  border: solid 1px ${Variables.colors.light_grey};
  border-radius: 4px;
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.05);
  position: relative;
  font-size: 13px;
  font-weight: 300;
  padding: 16px;
  line-height: 2.6;
  .title {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const FactorBox = styled.div`
  background-color: ${Variables.colors.white};
  border: solid 1px ${Variables.colors.light_grey};
  border-radius: 4px;
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.05);
  margin: 70px 0 32px 0;
  position: relative;
  .title {
    font-size: 16px;
    margin-top: -30px;
    position: absolute;
  }
  .factor-check {
    padding: 32px 64px;
    border-bottom: ${props =>
      props.status ? `dashed 1px ${Variables.colors.light_grey}` : "none"};
  }
  .factor-detail {
    .detail-title {
      font-size: 14px;
      padding: 32px 64px 16px 32px;
      display: block;
    }
    .com {
      background-color: ${Variables.colors.pinkish_grey};
      margin: 16px;
      padding: 32px;
      display: flex;
      justify-content: space-between;
      border-radius: 8px;
      font-size: 14;
      align-items: center;
      span {
        background-color: ${Variables.colors.white};
        padding: 4px 30px 4px 8px;
        border-radius: 12px;
        position: relative;
        cursor: pointer;
        &:before {
          position: absolute;
          font-family: maleno;
          content: "\\7e";
          right: 10px;
        }
      }
    }
    .notice {
      background-color: rgba(251, 203, 13, 0.02);
      border-radius: 8px;
      border: solid 1px #fbebb5;
      margin: 16px;
      padding: 32px;
      font-size: 13px;
    }
  }
`;
export const OfferBox = styled.div`
  background-color: ${Variables.colors.white};
  border-radius: 4px;
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px ${Variables.colors.light_grey};
  padding: 32px 16px;
  margin: 8px;
  strong {
    display: block;
    font-size: 16px;
    font-weight: 500;
  }
  .slogan {
    font-size: 13px;
    font-weight: 300;
    display: block;
    width: 70%;
    line-height: 22px;
    margin: 12px 0;
  }
  .form {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    input {
      border-radius: 8px;
      border: 1px solid ${Variables.colors.light_grey};
      width: 68%;
      padding: 12px 8px;
      &::placeholder {
        color: ${Variables.colors.pinkish_grey};
      }
    }
    .but {
      background-color: ${Variables.colors.windows_blue};
      color: ${Variables.colors.white};
      text-align: center;
      border-radius: 8px;
      box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
      padding: 12px 8px;
      width: 28%;
      cursor: pointer;
      ${transition(0.2)}
      &:hover {
        background-color: ${Variables.colors.cool_blue};
      }
    }
  }
`;
