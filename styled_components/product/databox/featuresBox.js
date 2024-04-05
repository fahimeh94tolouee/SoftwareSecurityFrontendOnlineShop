import styled from "styled-components";
import Variables from "../../variables";

export const Box = styled.div`
  padding-right: 32px;
  color: ${Variables.colors.warm_grey};
  .features-box-title {
    display: block;
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      margin-bottom: 32px;
      .title {
        position: relative;
        font-size: 17px;
        font-weight: 500;
        padding-right: 25px;
        margin-bottom: 32px;
        display: inline-block;
        &::before {
          content: "";
          width: 8px;
          height: 8px;
          background-color: ${Variables.colors.windows_blue};
          position: absolute;
          right: 10px;
          border-radius: 8px;
          top: 7px;
        }
      }
      table {
        border-collapse: collapse;
        width: 100%;
        position: relative;
        tr {
          border-bottom: solid 1px ${Variables.colors.light_grey};
          border-top: solid 1px ${Variables.colors.light_grey};
          font-size: 15px;
          line-height: 2.5;
          td {
            padding: 0px 16px;
            &:first-child {
              width: 270px;
            }
            &:last-child {
              border-right: solid 1px ${Variables.colors.light_grey};
              padding-right: 32px;
              span {
                opacity: 0.8;
              }
            }
          }
        }
        &::before {
          background-color: ${Variables.colors.windows_blue};
          content: "";
          width: 3px;
          height: 100%;
          right: -10px;
          top: 0;
          position: absolute;
        }
      }
    }
  }
`;
