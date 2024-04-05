import styled from "styled-components";
import Variables, { transition } from "../variables";

export const SideBar = styled.div`
  background-color: ${Variables.colors.light_white};
  border-radius: 4px;
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px ${Variables.colors.light_grey};
  margin-top: 32px;
  margin-bottom: 32px;
  min-height: 390px;
  .user-data {
    display: flex;
    padding: 32px 16px 16px;
    align-items: center;
    .name {
      padding: 8px 16px;
      position: relative;
      width: 94%;
      
      span {
        display: block;
        font-size: 20px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        max-width: 100%;
      }
      .phone {
        font-size: 13px;
        margin-top: 16px;
        font-family: Number;
        direction: ltr;
      }
    }
    .but {
      color: ${Variables.colors.windows_blue};
      padding: 8px;
      cursor: pointer;
    }
  }
  .links {
    border-radius: 8px;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
    border: solid 1px ${Variables.colors.light_grey};
    background-color: ${Variables.colors.white};
    list-style: none;
    padding: 16px 0;
    margin: 0 8px -24px 8px;
    li {
      padding: 10px 16px 10px 36px;
      font-size: 13px;
      ${transition(0.2)}
      width: 100%;
      a {
        width: 100%;
        display: flex;
        align-items: center;
        //justify-content: space-between;
        color: ${Variables.colors.warm_grey};
        ${transition(0.2)}
        i {
          color: ${Variables.colors.cool_blue};
          padding-right: 16px;
          //position: absolute;
          //right: 16px;
          //top: 8px;
        }
      }
      &:hover {
        a {
          color: ${Variables.colors.cool_blue};
        }
      }
    }
    .active {
      background-color: ${Variables.colors.smooth_blue};
      a {
        color: ${Variables.colors.cool_blue};
      }
    }
  }
`;
export const BlueBut = styled.div`
  background-color: ${Variables.colors.nice_blue};
  color: ${Variables.colors.white};
  margin: 16px 8px;
  display: block;
  padding: 16px 16px 16px 46px;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  font-size: 14px;
  &:before {
    font-family: maleno;
    position: absolute;
    top: 15px;
    left: 16px;
    content: "\\3a";
    font-size: 18px;
  }
`;
export const GreyBut = styled.div`
  background-color: ${Variables.colors.pinkish_grey};
  color: ${Variables.colors.white};
  margin: 16px 8px;
  display: block;
  padding: 16px 16px 16px 46px;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  font-weight: 500;
  &:before {
    font-family: maleno;
    position: absolute;
    top: 15px;
    left: 14px;
    content: "\\35";
    font-size: 18px;
  }
`;
export const Content = styled.div`
  margin: 32px 0;
`;
export const ModuleBox = styled.div`
  .banner {
    border-radius: 4px;
    box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.05);
    overflow: hidden;
    margin-bottom: 16px;
    img {
      width: 100%;
    }
  }
`;
