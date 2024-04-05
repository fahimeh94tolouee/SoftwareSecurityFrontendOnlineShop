import styled from "styled-components";
import Variables, { transition } from "../variables";
export const OrdersBox = styled.div`
  background-color: ${Variables.colors.white};
  border-radius: 4px;
  border: solid 2px ${Variables.colors.nice_blue};
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
  table {
    width: 100%;
    text-align: center;
    border-collapse: collapse;
    font-family: Number;
    td,
    th {
      padding: 24px 16px;
      border-left: solid 1px ${Variables.colors.light_grey};
      &:last-child {
        border-left: none;
      }
      .currency {
        margin-right: 10px;
      }
    }
    .but {
      border-radius: 4px;
      padding: 8px;
      border: solid 1px ${Variables.colors.light_grey};
      cursor: pointer;
      margin: 4px 0;
      font-size:13px;
    }
    thead {
      tr {
        border-bottom: dashed 1px ${Variables.colors.nice_blue};
      }
    }
    tbody {
      tr {
        border-bottom: solid 1px ${Variables.colors.light_grey};
        &:last-child {
          border-bottom: none;
        }
        &:nth-child(even) {
          background-color: ${Variables.colors.thin_grey};
        }
      }
    }
  }
`;
