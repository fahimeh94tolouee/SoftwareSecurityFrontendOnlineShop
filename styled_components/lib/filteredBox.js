import styled from "styled-components";
import Variables from "../variables";
export const Box = styled.div`
  background: ${Variables.colors.white};
  border-radius: 4px;
  border: solid 1px ${Variables.colors.light_grey};
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 16px;
  overflow: hidden;
  .title {
    border-bottom: solid 1px ${Variables.colors.light_grey};
    padding: 15px 20px;
    font-weight: 500px;
    position: relative;
    span {
      float: left;
      background-color: ${Variables.colors.light_white};
      color: ${Variables.colors.warm_grey};
      font-size: 13px;
      padding: 4px 8px;
      border-radius: 12px;
      cursor: pointer;
    }
  }
  .content {
    padding: 20px;
    padding-left: 12px;
    span {
      border-radius: 12px;
      border: solid 1px rgba(112, 112, 112, 0.1);
      background-color: ${Variables.colors.light_white};
      color: ${Variables.colors.warm_grey};
      padding: 4px 8px;
      padding-right: 24px;
      font-size: 12px;
      position: relative;
      margin: 8px 0px;
      margin-left: 8px;
      display: inline-block;
      cursor: pointer;
      font-family: Number;
      &::before {
        content: "\\77";
        font-family: maleno;
        color: ${Variables.colors.warm_grey};
        font-size: 12px;
        position: absolute;
        right: 8px;
        font-size: 10px;
        top: 5px;
      }
    }
  }
`;
