import styled from "styled-components";
import Variables, {
  rotate,
  transition,
  desktopWidthLimits
} from "../variables";

export const Header = styled.div`
  width: 100%;
  height: 112px;
  background-color: ${Variables.colors.white};
  padding-top: 44px;
  ${desktopWidthLimits({ max: false })};
  .logo {
    height: 40px;
  }
  .user-items {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    //justify-content: flex-end;
    li {
      display: inline-block;
      margin: 0px 0px;
      padding: 0px 16px;
      position: relative;
      &:last-child {
        // &::before {
        //   content: "";
        //   display: block;
        //   position: absolute;
        //   width: 1px;
        //   height: 30px;
        //   background-color: ${Variables.colors.menu_border};
        //   right: 0px;
        //   top: 5px;
        // }
      }
    }
  }
`;


export const AuthButton = styled.div`
  font-size: 12px;
  color: ${Variables.colors.menu_link};
  padding: 8px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  i {
    margin: 0 5px;
    &::before {
      font-size: 20px;
    }
  }
  
  .chevron {
    display: flex;
    ${props => (props.status === "close" ? rotate(180) : "")}
    ${transition(0.3)}
        &::before {
      font-size: 10px;
    }
  }
  .roll {
    position: absolute;
    border-radius: 5px;
    border-top-right-radius: 0;
    border: solid 1px ${Variables.colors.warm_grey};
    z-index: 10;
    width: 180px;
    background-color: ${Variables.colors.white};
    top: calc(100% + 5px);
    padding: 8px;
    font-size: 13px;
    cursor: default;
    .but {
      color: ${Variables.colors.white};
      background-color: ${Variables.colors.cool_blue};
      text-align: center;
      padding: 8px;
      border-radius: 5px;
      margin-bottom: 8px;
      cursor: pointer;
      font-size: 14px;
    }
    .notice {
      margin-bottom: 8px;
      .link {
        color: ${Variables.colors.cool_blue};
        margin-left: 12px;
        border-bottom: dashed 1px ${Variables.colors.cool_blue};
        cursor: pointer;
      }
    }
    .links {
      list-style: none;
      margin: 0 -8px;
      border-top: solid 1px ${Variables.colors.thin_grey};
      padding: 6px 0;
      li {
        border: none !important;
        padding: 8px;
        width: 100%;
        padding-right: 16px;
        cursor: pointer;
        display: flex;
        &:before {
          display: none;
        }
        i {
          position: relative;
          display: flex;
          &::before {
            //position: absolute;
            font-size: 13px;
            right: -12px;
          }
        }
      }
    }
    .profile-links {
      border-top: none;
      li {
        &:last-child {
          border-top: solid 1px ${Variables.colors.thin_grey} !important;
          color: ${Variables.colors.lipstick};
        }
      }
    }
  }
`;
export const BasketButton = styled.div`
  width: 168px;
  height: 40px;
  background-color: ${Variables.colors.lipstick};
  border-radius: 4px;
  color: ${Variables.colors.white};
  font-size: 14px;
  cursor: pointer;
  font-family: Number;
  display: flex;
  align-items: center;
  position: relative;
  .right-section{
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-end;
    .qty {
      background-color: ${Variables.colors.white};
      width: 23px;
      height: 23px;
      border-radius: 23px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      color: ${Variables.colors.font};
      margin: 8px;
    }
    .chevron {
      display: inline-block;
      margin: 0 8px;
      ${props => (props.status === "close" ? rotate(180) : "")}
      ${transition(0.3)}
      &::before {
        font-size: 10px;
      }
    }
  }

  .basket {
    display: flex;
    margin: 0 8px;
    font-size: 20px;
  }

  .cart-box {
    color: ${Variables.colors.font};
    position: absolute;
    z-index: 10;
    background-color: ${Variables.colors.white};
    top: calc(100% + 5px);
    right: 0;
    width: 350px;
    border: solid 1px ${Variables.colors.light_grey};
    border-radius: 5px;
    border-top-left-radius: 0;
    cursor: default;
    .head {
      display: flex;
      justify-content: space-between;
      border-bottom: solid 1px ${Variables.colors.light_grey};
      padding: 16px;
      font-size: 12px;
      .price,
      .currency {
        font-size: 14px;
        color: ${Variables.colors.dark_red};
        margin-right: 8px;
      }
      .show-cart {
        background-color: ${Variables.colors.pinkish_grey};
        font-size: 11px;
        padding: 2px 6px;
        border-radius: 15px;
        cursor: pointer;
      }
    }
    .content {
      max-height: 308px;
      overflow-y: scroll;
      table {
        border-collapse: collapse;
        tr {
          border-bottom: solid 1px ${Variables.colors.light_grey};
          td {
            border-left: solid 1px ${Variables.colors.light_grey};
            padding: 5px;
            &:last-child {
              border-left: none;
            }
            .remove {
              background-color: ${Variables.colors.pinkish_grey};
              width: 16px;
              height: 16px;
              display: block;
              margin: 0 8px;
              border-radius: 16px;
              color: ${Variables.colors.white};
              cursor: pointer;
              position: relative;
              &:before {
                font-family: maleno;
                content: "\\77";
                position: absolute;
                font-size: 10px;
                top: 3px;
                right: 3px;
              }
            }
            img {
              width: 62px;
            }
            .name {
              font-size: 12px;
              display: block;
              line-height: 20px;
              height: 20px;
              overflow: hidden;
            }
            .qty {
              border-left: solid 1px ${Variables.colors.thin_grey};
              font-size: 10px;
              border-radius: 0;
              width: auto;
              padding: 0 0 0 5px;
              margin: 0 0px 0 5px;
              height: 16px;
            }
            .color {
              font-size: 10px;
            }
          }
        }
      }
    }
    .big-but {
      background-color: ${Variables.colors.cool_blue};
      color: ${Variables.colors.white};
      cursor: pointer;
      text-align: center;
      padding: 16px;
      margin: -1px;
      z-index: 1;
      position: relative;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
`;
