import styled from "styled-components";
import Variables, { transition } from "../variables";
export const Box = styled.div`
  background-color: ${Variables.colors.white};
  border-radius: 4px;
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px ${Variables.colors.light_grey};
  overflow: hidden;
  padding: 10px 26px;
  margin-bottom: 26px;
`;
export const HeaderBox = styled.div`
  margin-top: 16px;
  margin-bottom: 22px;
  font-size: 24px;
  font-color: ${Variables.colors.warm_grey};
  a {
    margin-right: 10px;
    font-size: 14px;
    color: ${Variables.colors.warm_grey};
    background-color: ${Variables.colors.light_grey};
    border-radius: 12px;
    padding: 2px 8px;
  }
`;
export const FSlider = styled.div`
  width: 100%;
  margin-bottom: 15px;
  .loading {
    width: 100%;
    min-height: 300px;
    text-align: center;
  }
  .slick-slide {
    padding-right: 4px;
  }
  .slick-active {
    .img-box {
      &::before {
        width: 1px;
        height: 208px;
        content: "";
        position: absolute;
        background-color: ${Variables.colors.light_grey};
        left: -8px;
      }
    }
  }
  .slick-arrow {
    position: absolute;
    top: 50%;
    border: none;
    background-color: rgba(256, 256, 256, 0.35);
    z-index: 10;
    cursor: pointer;
    width: 26px;
    height: 70px;
    margin-top: -55px;
    display: flex !important;
    justify-content: center;
    align-items: center;
    border: solid 1px ${Variables.colors.light_grey};
    img {
      width: 8.5px;
      height: 35.5px;
    }
  }
  .slick-prev {
    right: -27px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .slick-next {
    left: -27px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .slick-disabled {
    cursor: default;
  }
`;

export const ProductListContainer = styled.div`
  padding: 16px 10px;
`;

export const ProductRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  &>div{
    margin-left: 8px;
    &:first-child{
      margin-left: 0;
    }
  }
`;

export const ProductCard = styled.div`
  padding: 0 6px;
  width: 290px;
  height: 350px;
  border-radius: 16px;
  //box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px ${Variables.colors.light_grey};
  background-color: ${Variables.colors.white};
  .slide-in {
    cursor: pointer;
    position: relative;
    padding: 16px 6px;
    .img-box {
      overflow: hidden;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 216px;
        height: 216px;
      }
      .hover {
        position: absolute;
        top: 15px;
        right: 0px;
        opacity: 0;
        ${transition(0.3)};
        //width: 101%;
      }
      &:hover {
        .hover {
          opacity: 1;
        }
      }
    }

    .title {
      padding-top: 8px;
      font-size: 12px;
      height: 48px;
    }
    .detail {
      display: flex;
      //line-height: 36px;
      justify-content: space-between;
      .category {
        font-size: 12px;
        color: ${Variables.colors.grey_light};
        position: relative;
        background-color: ${props=>props.categoryType===0?Variables.colors.lipstick:Variables.colors.nice_blue};
        color: ${Variables.colors.white};
        border-radius: 8px;
        padding: 4px 10px;
        text-align: center;
        min-width: 64px;
        // &::before {
        //   content: "";
        //   width: 4px;
        //   height: 4px;
        //   border-radius: 4px;
        //   position: absolute;
        //   background-color: ${Variables.colors.grey_light};
        //   left: -15px;
        //   top: 50%;
        //   margin-top: -2px;
        // }
      }
      .price {
        position: relative;
        font-size: 16px;
        font-family: Number;
        .currency {
          font-size: 12px;
          margin-right: 8px;
        }
        .new {
          color: ${Variables.colors.dark_red};
        }
        .old {
          position: absolute;
          font-size: 11px;
          top: -20px;
          left: 2px;
          text-decoration: line-through;
          .currency {
            margin: 0px;
          }
        }
      }
    }
  }
  &:hover {
    //border-radius: 16px;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
    opacity: 0.6;
    //border: solid 1px ${Variables.colors.light_grey};
    //background-color: ${Variables.colors.white};
    //z-index: 1;
    // .img-box {
    //   &::before {
    //     right: -10px;
    //     background-color: ${Variables.colors.white};
    //     z-index: 1;
    //   }
    // }
  }
`
export const Slide = styled.div`
  padding: 0px 6px;
  width: 290px;
  height: 390px;
  .slide-in {
    direction: rtl;
    cursor: pointer;
    position: relative;
    padding: 20px 0px;
    .img-box {
      overflow: hidden;
      border-radius: 16px;
      img {
        width: 216px;
        height: 216px;
      }
      .hover {
        position: absolute;
        top: 15px;
        right: 0px;
        opacity: 0;
        ${transition(0.3)};
        width: 101%;
      }
      &:hover {
        .hover {
          opacity: 1;
        }
      }
    }

    .title {
      padding-top: 8px;
      font-size: 12px;
      line-height: 32px;
    }
    .detail {
      display: flex;
      line-height: 36px;
      justify-content: space-between;
      .category {
        font-size: 12px;
        color: ${Variables.colors.light_grey};
        position: relative;
        &::before {
          content: "";
          width: 4px;
          height: 4px;
          border-radius: 4px;
          position: absolute;
          background-color: ${Variables.colors.light_grey};
          left: -15px;
          top: 50%;
          margin-top: -2px;
        }
      }
      .price {
        position: relative;
        font-size: 16px;
        font-family: Number;
        .currency {
          font-size: 12px;
          margin-right: 8px;
        }
        .new {
          color: ${Variables.colors.dark_red};
        }
        .old {
          position: absolute;
          font-size: 11px;
          top: -20px;
          left: 2px;
          text-decoration: line-through;
          .currency {
            margin: 0px;
          }
        }
      }
    }
    .discount {
      font-family: Number;
      width: 67.5px;
      height: 32px;
      border-radius: 16px;
      color: ${Variables.colors.white};
      background-color: ${Variables.colors.dark_red};
      position: absolute;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      left: 0px;
      top: 15px;
    }
  }
  &:hover {
    border-radius: 16px;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.05);
    border: solid 1px ${Variables.colors.light_grey};
    background-color: ${Variables.colors.white};
    z-index: 1;
    .img-box {
      &::before {
        right: -10px;
        background-color: ${Variables.colors.white};
        z-index: 1;
      }
    }
    .discount {
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      left: -6px;
      padding-left: 6px;
    }
  }
`;
