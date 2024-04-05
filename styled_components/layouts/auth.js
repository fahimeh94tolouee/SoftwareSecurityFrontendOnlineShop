import styled from "styled-components";
import Variables, { desktopWidthLimits } from "../variables";

export const Box = styled.div`
  width: 100%;
  min-height:calc(100% - 150px);
  margin-bottom: 135px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  ${desktopWidthLimits()};
  .logo {
    position: absolute;
    top: 16px;
    left: 16px;
    img {
      height: 40px;
    }
  }
`;
export const Logo = styled.div`
  position: fixed;
`;
export const Fotter = styled.div`
  height: 135px;
  width: 100%;
  text-align: center;
  border-top: solid 1px ${Variables.colors.light_grey};
  padding: 16px 0;
  position: absolute;
  top: 100%;
  .links {
    margin-bottom: 32px;
    a {
      font-size: 13px;
      color: ${Variables.colors.medium_grey};
      background-color: ${Variables.colors.light_grey};
      padding: 0 8px;
      border-radius: 15px;
      margin: 16px;
    }
  }
  .copyright {
    line-height: 2.6;
    font-size: 13px;
    font-weight: 300;
    margin-bottom: 16px;
  }
`;
