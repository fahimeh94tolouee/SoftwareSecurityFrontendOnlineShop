import styled from "styled-components";
import Variables, { transition } from "../variables";

export const Images = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  direction: ltr;
  position: relative;
  .off,
  .out-off {
    background-color: ${Variables.colors.lipstick};
    color: ${Variables.colors.white};
    border-bottom-left-radius: 55px;
    position: absolute;
    top: -1px;
    right: 0px;
    z-index: 1;
    width: 60%;
    text-align: center;
    font-size: 26px;
    line-height: 55px;
    span {
      position: relative;
      display: inline-block;
      &::before {
        content: "\\69";
        font-family: maleno;
        position: absolute;
        font-size: 34px;
        color: ${Variables.colors.white};
        right: -50px;
      }
    }
  }
  .out-off {
    background-color: ${Variables.colors.light_salmon};
    span {
      display: inline-block;
      &::before {
        content: "\\6d";
      }
    }
  }
  .zoom {
    margin: auto 30px;
  }
  .enlarged {
    background-color: ${Variables.colors.white};
    right: -110% !important;
    top: 0% !important;
    //height: 120% !important;
    width: ${props=>props.containerWidth?"calc("+props.containerWidth + "px - 100% - 80px" + ")": "100%"} !important;
    z-index: 10 !important;
    border: 1px solid ${Variables.colors.light_grey} !important;
  }
  .original {
    position: relative;
    margin: auto 10%;
    img {
      width: 100%;
      max-height:300px;
    }
    .lens {
      opacity: 0;
      position: absolute;
      display: block;
      width: 50%;
      height: 50%;
      border: ${Variables.colors.lipstick} solid 1px;
      ${transition(0.3)}
    }
    .zoom {
      opacity: 0;
      position: absolute;
      width: 150%;
      height: 150%;
      border: 1px solid ${Variables.colors.light_grey};
      top: -25%;
      left: -160%;
      z-index: 10;
      ${transition(0.3)}
    }
    &:hover {
      .lens {
        opacity: 1;
      }
      .zoom {
        opacity: 1;
      }
    }
  }
`;
export const Details = styled.div`
  width: 60%;
  border-right: solid 1px ${Variables.colors.thin_grey};
  .right {
    width: 65%;
    padding: 16px;
  }
  .left {
    width: 35%;
    border-right: solid 1px ${Variables.colors.thin_grey};
    padding: 16px;
  }
  .title {
    border-bottom: solid 1px ${Variables.colors.thin_grey};
    display: flex;
    justify-content: space-between;
    .right {
      h1 {
        font-size: 18px;
        font-weight: normal;
        color: ${Variables.colors.dark_font};
      }
      h3 {
        font-size: 14px;
        font-weight: normal;
      }
    }
    .left {
      position: relative;
      .ribbon {
        position: absolute;
        background-color: ${Variables.colors.dark_white};
        border-top-right-radius: 9px;
        border-bottom-right-radius: 9px;
        height: 50px;
        top: calc(50% - 25px);
        left: 0px;
        width: calc(100% - 70px);
        padding: 8px;
        display: flex;
        align-items: center;
        .span {
          width: 110px;
          line-height: 1.25;
          font-size: 16px;
        }
      }
      .icon {
        position: absolute;
        right: 16px;
        top: 22px;
        img {
          max-width: 32px;
          max-height: 32px;
        }
      }
    }
  }
  .rate {
    border-bottom: solid 1px ${Variables.colors.thin_grey};
    display: flex;
    justify-content: space-between;
    .right {
      ul {
        margin: 0px;
        padding: 0px;
        list-style: none;
        display: flex;
        li {
          display: inline-block;
          margin-left: 2px;
          opacity: 0.5;
        }
        .star {
          ::before {
            font-family: maleno;
            content: "\\e024";
            font-size: 16px;
          }
        }
        .active {
          opacity: 1;
          color: ${Variables.colors.gold};
          ::before {
            content: "\\e024";
          }
        }
        .text {
          padding-left: 14px;
          font-family: Number;
          font-size: 18px
        }
      }
    }
    .left {
      line-height: 18px;
    }
  }
  .variations {
    border-bottom: solid 1px ${Variables.colors.thin_grey};
    display: flex;
    justify-content: space-between;
    .right {
      font-family: Number;
      ul {
        margin: 0px;
        padding: 0px;
        list-style: none;
        li {
          padding: 8px;
          padding-right: 30px;
          position: relative;
        }
        .seller {
          font-size: 14px;
          span {
            margin-right: 20px;
            font-size: 12px;
            background-color: ${Variables.colors.thin_grey};
            border-radius: 15px;
            padding: 1px 8px;
          }
          &::before {
            font-family: maleno;
            content: "\\e019";
            position: absolute;
            right: 0px;
            font-size: 20px;
            top: 2px;
            color: ${Variables.colors.light_grey};
          }
        }
        .seller_rate {
          font-size: 13px;
          &::before {
            font-family: maleno;
            content: "\\31";
            position: absolute;
            right: 0px;
            font-size: 20px;
            top: 9px;
            color: ${Variables.colors.dark_green_blue};
          }
          .bar {
            width: 50%;
            background-color: ${Variables.colors.light_grey};
            height: 4px;
            position: relative;
            border-radius: 3px;
            margin-top: 8px;
            span {
              background-color: ${Variables.colors.dark_green_blue};
              height: 4px;
              display: inline-block;
              position: absolute;
              border-radius: 3px;
            }
          }
        }
        .switch {
          &::before {
            font-family: maleno;
            content: "\\e02a";
            position: absolute;
            right: 0px;
            font-size: 20px;
            top: 14px;
            color: ${Variables.colors.light_grey};
          }
          .color {
            li {
              display: inline-block;
              border-radius: 8px;
              padding: 8px 16px;
              padding-right: 44px;
              border: solid 1px ${Variables.colors.white};
              position: relative;
              cursor: pointer;
              span {
                width: 20px;
                height: 20px;
                content: "";
                position: absolute;
                border-radius: 5px;
                right: 16px;
                top: 7px;
                border: solid 1px rgba(0, 0, 0, 0.05);
              }
            }
            .active {
              border-color: ${Variables.colors.light_grey};
              cursor: default;
            }
            .more {
              font-size: 12px;
              padding-right: 0px;
            }
          }
        }
      }
      .price {
        margin: 16px -16px 0px -16px;
        border-top: solid 1px ${Variables.colors.thin_grey};
        padding: 16px;
        padding-bottom: 0px;
        color: ${Variables.colors.dark_font};
        font-size: 32px;
        .currency {
          color: ${Variables.colors.font};
          font-size: 24px;
          margin-right: 8px;
        }
        .old {
          opacity: 0.41;
          font-size: 20px;
          color: ${Variables.colors.warm_grey};
          border-bottom: dashed 2px ${Variables.colors.thin_grey};
          margin: auto -16px 16px -16px;
          padding: 0px 16px 16px 16px;
          .through {
            text-decoration: line-through;
          }
          .currency {
            font-size: 14px;
            color: ${Variables.colors.warm_grey};
          }
        }
        .box {
          display: flex;
          .value {
            border: solid 1px ${Variables.colors.thin_grey};
            border-radius: 17px;
            padding: 8px;
            padding-left: 40px;
          }
          .discount {
            background-color: ${Variables.colors.lipstick};
            border-radius: 17px;
            border-top-right-radius: 0px;
            color: ${Variables.colors.white};
            padding: 16px;
            padding-bottom: 10px;
            margin-right: -30px;
            font-size: 26px;
          }
        }
      }
      .unavailable {
        background-color: rgba(251, 203, 13, 0.02);
        border: solid 1px ${Variables.colors.goldenrod};
        margin: auto 16px;
        border-radius: 8px;
        padding: 16px 80px;
        span {
          color: ${Variables.colors.dark_olive};
          line-height: 2.5;
          font-size: 14px;
          position: relative;
          &::before {
            font-family: maleno;
            content: "\\63";
            font-size: 64px;
            color: ${Variables.colors.goldenrod};
            position: absolute;
            top: -30px;
            right: -70px;
          }
        }
      }
    }
    .left {
    }
  }
  .slogans {
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px ${Variables.colors.thin_grey};
    .right {
      opacity: 0.7;
      i {
        width: 28px;
        position: relative;
        display: inline-block;
        &::before {
          position: absolute;
          top: -15px;
        }
      }
    }
    .left {
      a {
        border-bottom: dashed 1px #3364ad;
        padding-bottom: 6px;
      }
    }
  }
`;
export const FeaturesBox = styled.ul`
  list-style: none;
  padding: 0px;
  overflow: hidden;
  max-height: ${props => (props.status ? "auto" : "115px")};
  position: relative;
  li {
    font-size: 12px;
    position: relative;
    line-height: 2.58;
    padding-right: 13px;
    &::before {
      background-color: ${Variables.colors.warm_grey};
      width: 8px;
      height: 8px;
      opacity: 0.28;
      border-radius: 3px;
      content: "";
      position: absolute;
      top: calc(50% - 4px);
      right: 0px;
    }
  }
  .more,
  .less {
    bottom: 0px;
    background: ${Variables.colors.white};
    width: 100%;
    padding-right: 0;
    &::before {
      display: none;
    }
    span {
      background-color: ${Variables.colors.thin_grey};
      padding: 1px 16px;
      padding-right: 30px;
      cursor: pointer;
      border-radius: 10px;
      position: relative;
      &::before {
        font-family: maleno;
        position: absolute;
        right: 10px;
        font-size: 10px;
        top: -1px;
      }
    }
  }
  .more {
    position: absolute;
    display: ${props => (props.status ? "none" : "block")};
    span {
      &::before {
        content: "\\29";
      }
    }
  }
  .less {
    position: relative;
    display: ${props => (props.status ? "block" : "none")};
    span {
      &::before {
        content: "\\27";
      }
    }
  }
`;

export const Actions = styled.div`
  width: 100%;
  display: flex;
  .images-but {
    width: 40%;
    padding: 16px;
    .box {
      border-radius: 4px;
      box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
      border: solid 1px ${Variables.colors.thin_grey};
      display: flex;
      flex-wrap: wrap;
      padding: 0px 16px;
      max-height: 100px;
      overflow: hidden;
      direction: ltr;
      justify-content: center;
      align-items: center;
      img {
        width: 72px;
        height: 72px;
        border-radius: 6px;
        margin: 16px 7px;
        cursor: pointer;
        border: solid 1px ${Variables.colors.thin_grey};
        
      }
      .more {
        border: solid 1px ${Variables.colors.light_grey};
        width: 60px;
        height: 60px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 60px;
        text-align: center;
        line-height: 30px;
        opacity: 0.5;
        margin: 22px 6px;
      }
    }
  }
  .buts {
    border-right: solid 1px ${Variables.colors.thin_grey};
    width: 60%;
    display: flex;
    justify-content: space-between;
    .right {
      width: 65%;
      padding: 16px;
      display: flex;
      align-items: center;
      .notice {
        background-color: ${Variables.colors.warm_grey};
        color: ${Variables.colors.white};
        padding: 16px 48px;
        font-size: 18px;
        border-radius: 12px;
        display: inline-block;
        cursor: pointer;
        ${transition(0.2)}
        span {
          position: relative;
          padding-right: 48px;
          &:before {
            font-family: maleno;
            content: "\\6b";
            color: ${Variables.colors.white};
            font-size: 24px;
            position: absolute;
            top: 3px;
            right: 0px;
          }
        }
        &:hover {
          background-color: ${Variables.colors.pinkish_grey};
        }
      }
      .add-to-cart {
        background-color: ${Variables.colors.windows_blue};
        color: ${Variables.colors.white};
        padding: 16px 48px;
        font-size: 18px;
        border-radius: 12px;
        display: inline-block;
        cursor: pointer;
        ${transition(0.2)}
        span {
          position: relative;
          padding-left: 30px;
          &:before {
            font-family: maleno;
            content: "\\28";
            color: ${Variables.colors.white};
            font-size: 18px;
            position: absolute;
            top: 3px;
            left: 0px;
          }
        }
        &:hover {
          background-color: ${Variables.colors.cool_blue};
        }
      }
      .wish {
        background-color: ${Variables.colors.pinkish_grey};
        color: ${Variables.colors.white};
        border-radius: 12px;
        padding: 14px;
        margin: auto 16px;
        cursor: pointer;
        ${transition(0.2)};
        &:hover {
          background-color: ${Variables.colors.amaranth};
        }
      }
    }
    .left {
      width: 35%;
      border-right: solid 1px ${Variables.colors.thin_grey};
      display: flex;
      align-items: center;
      padding: 8px;
      ul {
        padding: 0px;
        list-style: none;
        text-align: center;
        li {
          background-color: ${Variables.colors.white};
          display: inline-block;
          border: solid 1px ${Variables.colors.thin_grey};
          border-radius: 12px;
          padding: 10px;
          margin: auto 8px;
          cursor: pointer;
          width: 50px;
          height: 50px;
          ${transition(0.2)};
          i {
            &::before {
              font-size: 28px;
              color: ${Variables.colors.dark_font};
            }
          }
        }
        .compare {
          &:hover {
            background-color: ${Variables.colors.cool_blue};
            border-color: ${Variables.colors.cool_blue};
            i {
              &::before {
                color: ${Variables.colors.white};
              }
            }
          }
        }
        .notice {
          &:hover {
            background-color: ${Variables.colors.goldenrod};
            border-color: ${Variables.colors.goldenrod};
            i {
              &::before {
                color: ${Variables.colors.white};
              }
            }
          }
        }
        .share {
          &:hover {
            background-color: ${Variables.colors.red_violet};
            border-color: ${Variables.colors.red_violet};
            i {
              &::before {
                color: ${Variables.colors.white};
              }
            }
          }
        }
      }
    }
  }
`;
