import styled from "styled-components";
import Variables from "../variables";
export const OrderSammaryBox = styled.div`
  background-color: ${Variables.colors.white};
  border: solid 2px ${Variables.colors.nice_blue};
  border-radius: 4px;
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.05);
  margin: 70px 0 32px 0;
  position: relative;
  font-family: Number;
  .title {
    font-size: 16px;
    margin-top: -30px;
    position: absolute;
  }
  .consignment {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: Number;
    padding: 0 16px;
    li {
      margin: 8px;
      line-height: 32px;
      width: 20%;
      strong {
        display: block;
      }
    }
  }
`;
