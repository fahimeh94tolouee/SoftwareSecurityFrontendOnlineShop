import styled from "styled-components";
import Variables, {desktopWidthLimits} from "../../variables";

export const FooterSloganBox = styled.div`
  background-color: ${Variables.colors.footer_background};
  width: 100%;
  ${desktopWidthLimits({ max: false })};
  height: 275px;
  background-image: url("/static/images/footer_banner.png");
  margin-top: 60px;
  margin-bottom: 20px;
  padding-top: 15px;
  color: ${Variables.colors.white};
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;
  .slogan-item {
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    i {
        padding-right: 12px;
        &::before {
          font-size: 36px;
      }
    }
    .delivery {
      margin-top: 7px;
    }
    span {
      line-height: 40px;
      padding-right: 48px;
    }
  }
`;
export const FooterLinksBox = styled.div`
  background-color: ${Variables.colors.footer_background};
  width: 100%;
  ${desktopWidthLimits({ max: false })};
  padding-top: 45px;
  padding-bottom: 90px;
  color: ${Variables.colors.white};
  .title {
    font-size: 16px;
    margin-bottom: 15px;
    padding-right: 15px;
  }
  ul {
    margin: 0px;
    margin-bottom: 25px;
    padding: 0px;
    padding-right: 15px;
    font-size: 12px;
    list-style: none;
    li {
      padding: 5px 0px;
      a {
        color: ${Variables.colors.white};
      }
    }
  }
  .copyright-box {
    border-top: solid 1px ${Variables.colors.warm_grey};
    padding-top: 20px;
    .title {
      padding-right: 0px;
    }
  }
  .content {
    font-size: 12px;
    line-height: 1.58;
  }
  .notice {
    margin-top: 22px;
    font-size: 10px;
    line-height: 1.58;
  }
`;
