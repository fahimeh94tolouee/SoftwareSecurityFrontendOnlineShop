import styled from "styled-components";
import Variables, { transition } from "../variables";
export const CommentBox = styled.div`
  background-color: ${Variables.colors.white};
  border-radius: 4px;
  border: solid 1px ${Variables.colors.light_grey};
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  margin-bottom: 16px;
  position: relative;
  .likes {
    position: absolute;
    display: flex;
    left: 16px;
    top: 16px;
    background-color: white;
    font-family: Number;
    .like,
    .dislike {
      padding-right: 20px;
      position: relative;
      margin: 0 5px;
      font-size: 14px;
      &:before {
        font-family: maleno;
        position: absolute;
        right: 0;
      }
    }
    .like {
      color: ${Variables.colors.dark_green_blue};
      &:before {
        content: "\\32";
        top: -2px;
      }
    }
    .dislike {
      color: ${Variables.colors.lipstick};
      &:before {
        content: "\\46";
        top: 2px;
      }
    }
  }
  .image {
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: dashed 1px ${Variables.colors.thin_grey};
    img {
      width: 75%;
    }
  }
  .detail {
    padding: 16px;
    strong {
      font-size: 14px;
      color: ${Variables.colors.dark_font};
    }
    .content {
      font-size: 13px;
      height: 100px;
      overflow: hidden;
      margin: 16px 0;
      line-height: 22px;
    }
    .actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 16px;
      div {
        border-radius: 8px;
        box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
        border: 1px solid ${Variables.colors.light_grey};
        width: 100px;
        margin: 8px;
        padding: 6px;
        text-align: center;
        position: relative;
        cursor: pointer;
        &:before {
          font-family: maleno;
          position: absolute;
          right: 5px;
        }
      }
      .remove {
        background-color: ${Variables.colors.light_grey};
        &:before {
          content: "\\77";
        }
      }
    }
  }
`;
