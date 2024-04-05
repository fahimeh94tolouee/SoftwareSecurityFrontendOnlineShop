import styled from "styled-components";
import Variables, { transition } from "../variables";
export const InforamtionBox = styled.div`
  background-color: ${Variables.colors.white};
  border-radius: 4px;
  border: solid 1px ${Variables.colors.light_grey};
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
  .action-box {
    display: flex;
    justify-content: flex-end;
    padding: 32px;
    &>div:first-child{
      width: 80px;
    }
    .submit,
    .cancel {
      color: ${Variables.colors.white};
      border-radius: 8px;
      cursor: pointer;
      padding: 12px 32px;
      margin-right: 16px;
      min-width: 60px;
    }
    .submit {
      background-color: ${Variables.colors.nice_blue};
    }
    .cancel {
      background-color: ${Variables.colors.pinkish_grey};
    }
  }
  .form-box {
    color: ${Variables.colors.warm_grey};
    padding: 64px;
    .title {
      color: ${Variables.colors.cool_blue};
      font-size: 20px;
      opacity: 0.5;
      margin-bottom: 48px;
    }
    label {
      font-size: 14px;
      display: block;
      margin-top: 16px;
      margin-bottom: 8px;
    }
    input {
      border-radius: 8px;
      border: solid 1px ${Variables.colors.light_grey};
      padding: 12px;
      width: 100%;
      margin-bottom: 16px;
      &::placeholder {
        color: ${Variables.colors.pinkish_grey};
      }
    }
  }
  .action-box {
  }
  .legal-box {
    position: relative;
    border-top: dashed 1px ${Variables.colors.pinkish_grey};
    .over {
      background-color: hsla(0, 0%, 100%, 0.7);
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .legal-slogan {
        display: flex;
        flex-direction: column;
        font-size: 18px;
        color: ${Variables.colors.cool_blue};
        text-align: center;
        cursor: pointer;
        i {
          font-size: 44px;
        }
      }
    }
    .switch-box {
      .eleman {
        display: flex;
        align-items: center;
        .label {
          margin-right: 20px;
        }
      }
      .slogan {
        font-size: 13px;
        line-height: 18px;
        margin: 16px 0 65px 0;
      }
    }
    .location {
      display: flex;
      justify-content: space-between;
      .select{
        width: 48%;
      }
    }
  }
`;
