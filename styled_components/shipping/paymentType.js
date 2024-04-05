import styled from "styled-components";
import Variables from "../variables";
export const PaymentTypeBox = styled.div`
  background-color: ${Variables.colors.white};
  border: solid 1px ${Variables.colors.light_grey};
  border-radius: 4px;
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.05);
  margin: 70px 0 32px 0;
  position: relative;
  .title {
    font-size: 16px;
    margin-top: -30px;
    position: absolute;
  }
  .online,
  .cash {
    padding: 32px;
    display: flex;
    align-items: center;
    .radio {
      margin-top: -10px;
    }
    i {
      font-size: 36px;
      margin: 10px 7px 0 16px;
    }
    .content {
      font-size: 13px;
      font-weight: 300;
      strong {
        display: block;
        margin-bottom: 16px;
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
  .active {
    i {
      color: ${Variables.colors.nice_blue};
    }
  }
  .banks {
    list-style: none;
    border-top: dashed 1px ${Variables.colors.nice_blue};
    margin: 0;
    padding: 16px 32px;
    position: relative;
    &:before {
      content: "";
      width: 10px;
      height: 10px;
      position: absolute;
      top: -6px;
      right: 38px;
      border-top: dashed 1px ${Variables.colors.nice_blue};
      border-right: dashed 1px ${Variables.colors.nice_blue};
      background-color: ${Variables.colors.white};
      transform: rotate(-45deg);
    }
    li {
      display: inline-block;
      width: 62px;
      height: 62px;
      border-radius: 8px;
      padding: 4px;
      border: solid 1px ${Variables.colors.thin_grey};
      margin-left: 24px;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
    .active {
      border-color: ${Variables.colors.nice_blue};
      cursor: default;
    }
  }
  .cash {
    border-top: solid 1px ${Variables.colors.nice_blue};
  }
`;
