import styled from "styled-components";
import Variables from "../variables";

export const LoadingBox = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  z-index: 1001;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 260px;
  }
`;
