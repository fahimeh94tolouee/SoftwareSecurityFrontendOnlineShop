import styled from "styled-components";
import Variables from "../variables";
const Box = styled.div`
  position: relative;
  padding-right: 50px;
  padding-right: 36px;
  line-height: 22px;
  display: inline-block;
  cursor: pointer;
  &::before {
    width: 24px;
    height: 24px;
    border: solid 1px ${Variables.colors.light_grey};
    border-radius: 16px;
    content: "";
    position: absolute;
    top: calc(50% - 12px);
    right: 0;
  }
  &::after {
    width: 16px;
    height: 16px;
    background-color: ${props =>
      props.status ? Variables.colors.nice_blue : ""};
    border-radius: 16px;
    content: "";
    position: absolute;
    top: calc(50% - 8px);
    right: 4px;
  }
`;
export default Box;
