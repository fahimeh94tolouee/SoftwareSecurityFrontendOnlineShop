import styled from "styled-components";
import Variables, { transition } from "./variables";

export const Box = styled.div`
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.16);
  width: 100%;
  margin: 8px 0;
  button{
    position: relative;
    border-radius: 8px;
    border: 0;
    background-color: ${Variables.colors.windows_blue};
    width: 100%;
    color: ${Variables.colors.white};
    line-height: 36px;
    text-align: center;
    cursor: pointer;
    ${transition(0.2)}
    &:hover {
      background-color: ${Variables.colors.cool_blue};
    }
    &:disabled{
      background-color: ${Variables.colors.grey_light};
      color:${Variables.colors.white};
      cursor:not-allowed;
      &:hover{
          box-shadow: none;
      }
    }
  }
`
export const Loading = styled.div`
  visibility: ${props => (props.show ? "visible" : "hidden")};
  position: absolute;
  right: calc(50% - 9px);
  top: calc(50% - 9px);
`;
export const Children = styled.div`
  visibility: ${props => (props.show ? "visible" : "hidden")};
  display: inline-flex;
  align-items: center;
`;
