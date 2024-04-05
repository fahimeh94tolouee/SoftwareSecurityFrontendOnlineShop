import styled from "styled-components";
import Variables from "../variables";


const TYPES = {
  primary: {main : Variables.colors.dark_white, second: Variables.colors.menu_border},
  // primary_blue: {main : Variables.colors.tertiary_400, second: Variables.colors.complementary},
  // secondary: {main:Variables.colors.complementary_700 ,second: Variables.colors.complementary_500},
};
export const SpinnerContainer = styled.div`
  .loader,
  .loader:after {
    border-radius: 50%;
    width: ${props => props.size=== "small" ? "1em": "1.8em"};
    height: ${props => props.size=== "small" ? "1em": "1.8em"};
  }
  .loader {
    margin: 0px auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: ${props => props.type ? "0.3em solid " + TYPES[props.type].main : "0.3em solid " +  Variables.colors.dark_white};
    border-right: ${props => props.type  ? "0.3em solid " + TYPES[props.type].main : "0.3em solid " + Variables.colors.dark_white};
    border-bottom:${props => props.type  ? "0.3em solid " + TYPES[props.type].main : "0.3em solid " + Variables.colors.dark_white};
    border-left: ${props => props.type  ? "0.3em solid " + TYPES[props.type].second : "0.3em solid " + Variables.colors.menu_border};
    border-width: ${props => props.size=== "small" ? "0.2em": "0.3em"};;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;