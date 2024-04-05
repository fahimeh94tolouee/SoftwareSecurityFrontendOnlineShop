import styled from "styled-components";
import Variables, { rotate, transition } from "../variables";
export const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: right;
  align-items: center;
`;
export const Area = styled.div`
  background-color: ${Variables.colors.white};
  border: solid 1px
    ${props => {
      if (props.status) {
        return Variables.colors.windows_blue;
      } else {
        return Variables.colors.light_grey;
      }
    }};
  border-radius: 8px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.05);
  width: 60px;
  font-family: Number;
  margin: 0 8px;
  position: relative;
  font-size: 18px;
  font-weight: 500;
  padding: 12px;
  cursor: pointer;
  ${transition(0.2)}
  &::after {
    content: "\\76";
    font-family: maleno;
    display: inline-block;
    font-size: 12px;
    position: absolute;
    left: 10px;
    top: 15px;
    ${transition(0.2)}
    ${props => (props.status ? rotate(0) : rotate(180))}
  }
  .tool {
    ${transition(0.2)}
    height: ${props => (props.status ? "auto" : "0")};
    background-color: ${Variables.colors.white};
    border: solid 1px ${props =>
      props.status ? Variables.colors.windows_blue : "none"};
    border-top: navajowhite;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    position: absolute;
    top: 38px;
    right: -1px;
    list-style: none;
    margin: 0;
    width: 60px;
    padding: 0;
    font-size: 14px;
    overflow: hidden;
    z-index: 1;
    li{
        padding: 8px 12px 8px 0px;
        &:hover{
        background-color: ${Variables.colors.thin_grey};
        }
        &:first-child{
        border-top: solid 1px ${Variables.colors.thin_grey};
        }
    }
  }
`;
export const Arrows = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    height: 20px;
    width: 20px;
    border: solid 1px;
    position: relative;
    cursor: pointer;
    &:before {
      position: absolute;
      font-family: maleno;
      font-size: 10px;
      top: 4px;
      right: 4px;
    }
    &:first-child {
      background-color: ${Variables.colors.windows_blue};
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      border-color: ${Variables.colors.windows_blue};
      &:before {
        content: "\\28";
        color: ${Variables.colors.white};
      }
    }
    &:last-child {
      border-color: ${Variables.colors.light_grey};
      border-bottom-left-radius: 16px;
      border-bottom-right-radius: 16px;
      &:before {
        content: "\\27";
      }
    }
  }
`;
