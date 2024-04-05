import styled from "styled-components";
import Variables, {desktopWidthLimits} from "../../variables";

export const MenuBox = styled.div`
  border-top: solid 1px ${Variables.colors.menu_border};
  border-bottom: solid 1px ${Variables.colors.menu_border};
  ${desktopWidthLimits({ max: false })};
  position: relative;
  background-color: ${Variables.colors.white};
  ul {
    padding: 0px;
    list-style: none;
    margin: 0;
    li {
      display: inline-block;
      margin: 2px 10px -1px 10px;
      padding: 8px 5px 10px 5px;
      font-size: 12px;
      transition-delay: 0.2s;
      border: solid 1px ${Variables.colors.white};
      border-bottom-color: ${Variables.colors.menu_border};
      .sep {
        width: 100%;
        position: relative;
        &::after {
          content: "";
          background-color: ${Variables.colors.menu_border};
          height: 16px;
          width: 1px;
          top: 0;
          position: absolute;
          left: -15px;
        }
      }
      &:last-child {
        .sep {
          &::after {
            display: none;
          }
        }
      }
      a {
        color: ${Variables.colors.menu_link};
      }
    }
    .mega-type {
      .mega-menu {
        visibility: hidden;
        transition-delay: 0.2s;
        background-color: ${Variables.colors.white};
        position: absolute;
        right: 0;
        width: 100%;
        top: 35px;
        padding: 16px 0;
        z-index: 900;
        box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.05);
        .list {
          li {
            display: block;
            border: none;
            font-size: 13px;
            font-weight: 300;
            strong {
              font-size: 13px;
              font-weight: 500;
            }
          }
        }
        .list-image {
          display: flex;
          justify-content: space-between;
          aling-items: center;
          a {
            margin: 5px;
            max-width: 100px;
            img {
              width: 100%;
            }
          }
        }
      }
      &:hover {
        border: solid 1px ${Variables.colors.menu_border};
        border-top-right-radius: 7px;
        border-top-left-radius: 7px;
        border-bottom-color: ${Variables.colors.white};
        .mega-menu {
          visibility: visible;
        }
      }
    }
  }
  .left {
    display: flex;
    justify-content: flex-end;
    li {
      border-right: none;
    }
  }
`;