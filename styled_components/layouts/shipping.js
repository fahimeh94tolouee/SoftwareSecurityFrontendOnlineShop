import styled from "styled-components";
import Variables, { desktopWidthLimits } from "../variables";

export const Top = styled.div`
  background-color: ${Variables.colors.white};
  height: 112px;
  width: 100%;
  border-bottom: 6px solid ${Variables.colors.pinkish_grey};
  position: relative;
  .logo {
    img {
      height: 40px;
      margin-top: 40px;
    }
  }
  &:before{
    width: 50%;
    height: 6px;
    background-color: ${Variables.colors.windows_blue};
    content:"";
    display: block;
    position: absolute;
    bottom: -6px;
  }
`;
export const ToTop = styled.div`
  position: relative;
  height: 100px;
  width: 100%;
  margin-top: 60px;
  border-top: 1px solid ${Variables.colors.light_grey};
  text-align: center;
  padding-top: 32px;
  a {
    color: ${Variables.colors.font};
    position: relative;
    &:before {
      content: "";
      background-color: ${Variables.colors.windows_blue};
      width: 32px;
      height: 32px;
      display: block;
      position: absolute;
      right: calc(50% - 16px);
      border-radius: 16px;
      top: -46px;
    }
    &::after {
      font-family: maleno;
      content: "\\64";
      color: ${Variables.colors.white};
      position: absolute;
      top: -40px;
      right: calc(50% - 9px);
      transform: rotate(90deg);
      font-size: 18px;
    }
  }
`;
