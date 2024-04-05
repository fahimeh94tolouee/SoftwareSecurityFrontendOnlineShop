import styled from "styled-components";
import Variables, { transition } from "../variables";

export const Banner = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 16px;
  img {
    width: 100%;
  }
  .slogans {
    position: absolute;
    top: 46px;
    right: 40px;
    color: ${Variables.colors.white};
    line-hight: 36px;
    font-size: 15px;
    width: 22%;
    h3 {
      line-height: 52px;
      font-size: 2.4em;
      font-weight: 400;
      margin: 0px;
    }
    span {
      display: inline-block;
      margin-bottom: 10px;
      line-height: 32px;
      font-weight: 100;
    }
    button {
      width: 211px;
      height: 56px;
      box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.05);
      border: solid 1px ${Variables.colors.white};
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 5px;
      color: ${Variables.colors.white};
      cursor: pointer;
      padding-right: 20px;
      position: relative;
      &::before {
        content: "\\2a";
        font-family: maleno;
        font-size: 22px;
        font-style: normal;
        color: ${Variables.colors.white};
        position: absolute;
        top: 16px;
        right: 25px;
      }
    }
  }
`;
