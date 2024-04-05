import styled from "styled-components";
import Variables, { transition } from "../../variables";
export const Box = styled.div`
  padding: 0 32px;
  line-height: 2;
  font-family: Number;
  section {
    margin: 32px 0;
  }
  .title {
    font-size: 32px;
    font-weight: 500;
  }
  .sub-title {
    font-size: 17px;
    font-weight: 300;
    color: ${Variables.colors.warm_grey};
  }
  textarea {
    min-width: 100%;
    max-width: 100%;
    min-height: 240px;
    max-height: 240px;
    border-radius: 17px;
    border: solid 2px ${Variables.colors.thin_grey};
    padding: 16px;
    margin: 16px 0;
  }
  .add-faq {
    background-color: ${Variables.colors.windows_blue};
    color: ${Variables.colors.white};
    border-radius: 12px;
    text-align: center;
    font-size: 20px;
    padding: 4px 32px;
    display: table;
    cursor: pointer;
    ${transition(0.3)};
    &:hover {
      background-color: ${Variables.colors.cool_blue};
    }
    span {
      padding-left: 40px;
      position: relative;
      &::before {
        font-family: maleno;
        content: "\\e005";
        position: absolute;
        left: 0;
        top: -13px;
        font-size: 30px;
      }
    }
  }
  .rule {
    font-size: 12px;
    padding-right: 28px;
  }
  .sort-title {
    width: 100%;
    position: relative;
    font-size: 20px;
    &:before {
      content: "";
      width: 100%;
      position: absolute;
      height: 1px;
      background-color: ${Variables.colors.light_grey};
      top: 50%;
      right: 0px;
    }
    span {
      background: ${Variables.colors.white};
      padding-left: 15px;
      position: inherit;
    }
  }
  .sort-list {
    background-color: ${Variables.colors.light_white};
    width: 100%;
    margin: 0;
    padding: 0 16px;
    list-style: none;
    font-size: 14px;
    border-radius: 8px;

    li {
      display: inline-block;
      margin: 3px 8px;
      padding: 0px 6px;
      cursor: pointer;
      &:first-child {
        margin: 0;
        padding: 0;
      }
    }
    .active {
      background-color: ${Variables.colors.windows_blue};
      border-radius: 3px;
      color: ${Variables.colors.white};
      cursor: default;
    }
  }
  .question,
  .answer {
    min-height: 240px;
    border-radius: 17px;
    padding: 16px 32px;
    padding-right: 20%;
    width: 100%;
    position: relative;
    .post {
      border-bottom: solid 1px ${Variables.colors.light_grey};
      width: 100%;
      padding: 16px 0;
      margin-bottom: 32px;
      .comment-title {
        font-size: 20px;
        font-weight: 500;
      }
      .author {
        font-size: 14px;
        font-weight: 300;
      }
    }
    .text {
      line-height: 2.6;
      margin-bottom: 64px;
    }
    .helpful {
      position: absolute;
      right: 20%;
      bottom: 16px;
      color: ${Variables.colors.warm_gery_2};
      font-size: 14px;
      ul {
        display: inline;
        margin: 0;
        padding-right: 30px;
        list-style: none;
        li {
          display: inline-block;
          border: 2px solid ${Variables.colors.thin_grey};
          padding: 0 8px;
          font-family: Number;
          cursor: pointer;
          margin: 0 4px;
          border-radius: 8px;
        }
      }
    }
    .answer-but {
      font-size: 14px;
      font-weight: 300;
      cursor: pointer;
      color: ${Variables.colors.windows_blue};
      padding: 1px 8px;
      background-color: ${Variables.colors.thin_grey};
      position: absolute;
      left: 32px;
      border-radius: 12px;
      bottom: 16px;
    }
    &:before {
      color: ${Variables.colors.windows_blue};
      font-family: maleno;
      position: absolute;
      font-size: 120px;
      top: calc(50% - 120px);
      right: 32px;
    }
  }
  .question {
    margin: 16px 0;
    border: solid 2px ${Variables.colors.thin_grey};
    background-color: ${Variables.colors.white};
    &:before {
      content: "\\e006";
    }
  }
  .answers {
    border: solid 2px ${Variables.colors.windows_blue};
    border-top: none;
    margin-top: -27px;
    border-bottom-left-radius: 17px;
    border-bottom-right-radius: 17px;
    width: calc(100% - 8px);
    margin-right: 4px;
  }
  .answer {
    &:before {
      content: "\\63";
    }
  }
`;
