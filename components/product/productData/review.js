import React, { useState } from "react";
import { Col, Row } from "styled-bootstrap-grid";
import { Box } from "../../../styled_components/product/databox/reviewBox";
const Review = props => {
  const [status, setStatus] = useState(false);
  const rating = () => {
    if (
      typeof props.rating !== "undefined" &&
      typeof props.rating !== "boolean" &&
      props.rating !== "null"
    ) {
      return (
        <div className="rate-box">
          <ul>
            {props.rating.map((item)=>
                <li key={item.id}>
                  <div className="rate-title">{item.title}</div>
                  <div className="progress">
                    <span style={{ width: item.value+"%" }} />
                  </div>
                  <div className="status">
                      {item.string_value}
                  </div>
                </li>
            )}
          </ul>
        </div>
      );
    }
  };
  const disadvantages = ()=>{
    console.log(props.disadvantages)
  }
  return (
    <Box status={status}>
      <div className="title">نقد و بررسی تخصصی</div>
      <div className="sub-title">{props.name}</div>
      <div className="desc">
        {props.desc}
        <div className="more">
          <div className="gradient" />
          <div className="btn">
            <span
              onClick={() => {
                setStatus(!status);
              }}
            >
              {status ? "بستن" : "ادامه مطلب"}
            </span>
          </div>
        </div>
      </div>
      <section>
        <Row>
          <Col col="6">
            {rating()}
          </Col>
          <Col col="6">
            {disadvantages()}
            <div className="advantages">

              <div className="plus">
                <span>نقاط قوت</span>
                <ul>
                  {props.advantages.map((item,key)=>
                      <li key={key}>{item}</li>
                  )}
                </ul>
              </div>
              <div className="mines">
                <span>نقاط ضعف</span>
                <ul>
                  {props.disadvantages.map((item,key)=>
                      <li key={key}>{item}</li>
                  )}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <div className="review">
          <div dangerouslySetInnerHTML={{__html: props.meta_description}}></div>
      </div>
    </Box>
  );
};
export default Review;
