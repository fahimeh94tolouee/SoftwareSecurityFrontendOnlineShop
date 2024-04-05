import styled from "styled-components";
import Variables from "../variables";

export const Box = styled.div`
  background-color: ${Variables.colors.white};
  border: solid 0.2px rgb(112, 112, 112);
  border-right: 3px solid ${Variables.colors.nice_blue};
  border-radius: 4px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
  margin-top: 64px;
  position: relative;
  .title {
    position: absolute;
    right: 0;
    top: -40px;
    font-size: 20px;
    font-weight: 500;
  }
  .title-row,
  .data-row {
    width: 100%;
    display: flex;
    position: relative;
    border-bottom: solid 1px ${Variables.colors.light_grey};
    .title-box {
      position: absolute;
      right: 12px;
      top: 10px;
      font-weight: 500;
    }
    .data-box {
      width: 25%;
      border-left: solid 1px ${Variables.colors.light_grey};
      padding: 8px 12px;
      font-size: 16px;
      color: ${Variables.colors.light_font};
    }
  }
  .title-row {
    background-color: ${Variables.colors.light_white};
    .data-box {
      height: 36px;
    }
  }
  .data-row {
    .data-box {
      text-align: center;
    }
  }
`;