import styled from "styled-components";
import Variables, { desktopWidthLimits } from "../variables";

export const BreadcrumbBox = styled.div`
  padding: 24px;
  .title-box{
    font-size:16px;
    font-weight: 500px;
    padding: 16px 8px 0 8px;
  }
  ${desktopWidthLimits()}
`;

