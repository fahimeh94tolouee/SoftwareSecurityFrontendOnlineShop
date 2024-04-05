import styled from "styled-components";
import Variables, { transition } from "../variables";
export const AddBox = styled.div`
  border: dashed 2px ${Variables.colors.pinkish_grey};
  color: ${Variables.colors.pinkish_grey};
  width: 100%;
  min-height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 22px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 16px;
  i {
    font-size: 62px;
  }
`;
export const AddressBox = styled.div`
  background-color: ${Variables.colors.white};
  border-radius: 4px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px ${Variables.colors.light_grey};
  position: relative;
  padding: 16px;
  min-height: 240px;
  margin-bottom: 16px;
  &:before {
    position: absolute;
    right: -2px;
    top: 0;
    width: 2px;
    height: 100%;
    content: "";
    background-color: ${Variables.colors.nice_blue};
  }
  .name {
    font-size: 20px;
    font-weight: 500;
  }
  .contact {
    list-style: none;
    margin: 32px 0 16px 0;
    padding: 0;
    li {
      display: inline-block;
      border-right: solid 1px ${Variables.colors.light_grey};
      padding: 8px;
      font-size: 13px;
      font-weight: 300;
      &:first-child {
        border-right: none;
        padding-right: 0;
      }
    }
  }
  .address {
    position: relative;
    padding-right: 26px;
    font-size: 13px;
    font-weight: 300;
    &:before {
      font-family: maleno;
      content: "\\36";
      position: absolute;
      right: 0;
      font-size: 18px;
    }
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
    .edit {
      &:before {
        content: "\\37";
      }
    }
    .remove {
      background-color: ${Variables.colors.light_grey};
      &:before {
        content: "\\77";
      }
    }
  }
`;
