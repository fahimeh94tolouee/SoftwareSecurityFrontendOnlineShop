import styled from "styled-components";
import Variables, { desktopWidthLimits } from "../variables";
export const BreadcrumbBox = styled.div`
  margin: 48px 0px 16px 0px;
  font-size: 12px;
  a {
    color: ${Variables.colors.medium_grey} !important;
  }
`;
export const TopBox = styled.div`
  width: 100%;
  ${desktopWidthLimits()};
  background-color: ${Variables.colors.white};
  border: 1px solid ${Variables.colors.light_grey};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 16px auto;
  padding: 32px 0;
`;
export const SlogansBox = styled.div`
  background-color: ${Variables.colors.marine};
  border-radius: 8px;
  text-align: center;
  font-size: 18px;
  color: ${Variables.colors.white};
  padding: 48px 0px;
  margin: 16px 0px;
  .slogan-item {
    position: relative;
    text-align: center;
    i {
      position: absolute;
      &::before {
        font-size: 36px;
      }
    }
    .delivery {
      margin-top: 7px;
    }
    span {
      line-height: 40px;
      padding-left: 48px;
    }
  }
`;
