import React from "react";
import {
  FooterLinksBox,
  FooterSloganBox
} from "../../styled_components/layouts/mainLayout/desktopFooter";
import { Col, Row } from "styled-bootstrap-grid";
import LinkMaker from "../../components/lib/linkMaker";
const DesktopFooter = props => {
  const footerView = () => {
    const { footer } = props.data;
    return footer && footer.map((col, colKey) => (
      <Col col={col.cols} key={colKey}>
        {col.items.map((list, listKey) => (
          <React.Fragment key={listKey}>
            <div className="title">{list.title}</div>
            <ul>
              {list.items.map((item, index) => (
                <li key={index}>{LinkMaker(item.link, item.title)}</li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </Col>
    ));
  };
  return (
    <React.Fragment>
      <FooterSloganBox>
        <div className="container">
          <div className="path">
            <Row>
              <Col col="12" sm="3">
                <div className="slogan-item">
                  <i className="icon-truck" />
                  <span>Express Delivery</span>
                </div>
              </Col>
              <Col col="12" sm="3">
                <div className="slogan-item">
                  <i className="icon-pay-8" />
                  <span>Cash on Delivery</span>
                </div>
              </Col>
              <Col col="12" sm="3">
                <div className="slogan-item">
                  <i className="icon-pay-7" />
                  <span>Return Guarantee</span>
                </div>
              </Col>
              <Col col="12" sm="3">
                <div className="slogan-item">
                  <i className="icon-sticker" />
                  <span>Authenticity Guarantee</span>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </FooterSloganBox>
      <FooterLinksBox>
        <div className="container">
          <Row>{footerView()}</Row>

          <div className="copyright-box">
            <Row>
              <Col col="12" sm="2">
                Socials
              </Col>
              <Col col="12" sm="6">
                <div className="title">Maleno Online Shop</div>
                <div className="content">
                  ما جهت رفاه حال شرکت ها و کارمندان پلتفرم مال نو را گرد آوردیم
                  تا بتوانیم در خدمات دهی بهتر به شرکت ها و ادارات کمک کنیم ،
                  مال نو در ارتباط مستقیم با تنخواه گردان عملکرد بسیار مناسبتری
                  خواهد داشت زیرا تنخواه گردان به شما خواهد گفت که چه زمانی نیاز
                  به خرید محصولات جدید خواهید داشت و به کمک مال نو میتوانید
                  تمامی خرید های مورد نیار خود و همکارانتان را به آسانی انجام
                  دهید
                </div>
                <div className="notice">
                  All rights to this store belong to Malno, and copying of this online shop will be legally pursued.
                </div>
              </Col>
              <Col col="12" sm="4">
                Certificates
              </Col>
            </Row>
          </div>
        </div>
      </FooterLinksBox>
    </React.Fragment>
  );
};
export default DesktopFooter;
