import styled from "styled-components";
import Variables, { transition } from "../../variables";

export const SearchBox = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: solid 1px ${Variables.colors.warm_grey};
  position: relative;
  &::before {
    font-family: maleno;
    content: "\\e019";
    position: absolute;
    color: ${Variables.colors.grey_light};
    z-index: 10;
    top: 9px;
    left: 10px;
    font-size: 18px;
  }
  input {
    width: 100%;
    height: 100%;
    border: none;
    padding: 0 68px 0 36px;
    background: none;
    &::placeholder {
      color: ${Variables.colors.placeholder};
    }
  }
  button {
    position: absolute;
    top: -1px;
    right: -1px;
    height: 40px;
    width: 60px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border: none;
    background-color: ${Variables.colors.grey_smooth};
    text-align: center;
    color: ${Variables.colors.white};
    cursor: pointer;
    font-size: 20px;
    padding-top: 5px;
    &>i{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  }
  .result {
    background-color: ${Variables.colors.white};
    ${props => {
      if (props.status) {
        return `border: solid 1px ${Variables.colors.warm_grey};`;
      }
    }}
    border-top: none;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    width: calc(100% - 57px);
    position: absolute;
    z-index: 20;
    padding: ${props => (props.status ? "16px" : 0)} 16px;
    list-style: none;
    top: 18px;
    right: -1px;
    height: ${props => (props.status ? "auto" : 0)};
    overflow: hidden;
    ${transition(0.2)}
    &::before {
      content: "";
      background-color: ${Variables.colors.light_grey};
      width: 100%;
      height: 1px;
      position: absolute;
      right: 0;
      top: 6px;
    }
    li {
      padding: 8px 0;
      a {
        color: ${Variables.colors.font};
      }
    }
  }
`;
