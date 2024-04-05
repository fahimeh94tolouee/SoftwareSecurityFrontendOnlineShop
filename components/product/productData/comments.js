import React from "react";
import { Col, Row } from "styled-bootstrap-grid";
import { Box } from "../../../styled_components/product/databox/commentsBox";
const Comments = props => {
  console.log(props.comments);
  const rating = () => {
    if (
      typeof props.comments.meta.ratings !== "undefined" &&
      props.comments.meta.ratings.length > 0
    ) {
      return (
        <div className="rate-box">
          <ul>
            {props.comments.meta.ratings.map(item => (
              <li key={item.id}>
                <div className="rate-title">{item.title}</div>
                <div className="progress">
                  <span style={{ width: item.value + "%" }} />
                </div>
                <div className="status">
                    {item.string_value}
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };
  const sellInfo = (seller, color) => {
    if (typeof seller === "object") {
      return (
        <React.Fragment>
          <div className="buyer-flag">
            <span>Purchaser of this Product</span>
          </div>
          Color Purchased:
          <div className="color">
            {color.name}
            <span style={{ backgroundColor: color.hex_code }} />
          </div>
          Purchased from Vendor:
          <div className="seller">{seller.name}</div>
          <div className="seller-rate">
            Purchase Satisfaction: {seller.customer_offer} % of (
            {seller.number_of_rating_votes}) votes
          </div>
        </React.Fragment>
      );
    }
  };
  const helpful = (likes, dislikes) => {
    return (
      <div className="helpful">
        Was this review helpful?
        <ul>
          <li>{likes <= 0 ? "" : likes} Yes</li>
          <li>{dislikes <= 0 ? "" : dislikes} No</li>
        </ul>
      </div>
    );
  };
  const commentsView = () => {
    if (
      typeof props.comments.data !== "undefined" &&
      props.comments.data.length > 0
    ) {
      return props.comments.data.map(item => {
        return (
          <div className="comment" key={item.id}>
            <div className="right">{sellInfo(item.seller, item.color)}</div>
            <div className="left">
              <div className="post">
                <div className="comment-title">{item.title}</div>
                <div className="author">
                  By
                  {item.user_full_name}
                  In the Date
                  {item.created_at}
                </div>
              </div>
              <div className="text">{item.comment}</div>
              {helpful(item.likes, item.dislikes)}
            </div>
          </div>
        );
      });
    }
  };
  return (
    <Box>
      <span className="title">User Rating for</span>
      {props.name}
      <section>
        <Row>
          <Col col="6">{rating()}</Col>
          <Col col="6">
            <div className="info">
              <strong>You can also give your opinion about this product.</strong>
              To leave a review, you need to log in to your account first. If you have already purchased this product from Maleno, your review will be registered as the owner of the product.
              <div className="add-comment">
                <span>Add a New Review</span>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <section>
        <Row>
          <Col col="6">
            <div className="sort-title">
              <span>Users Reviews</span>
            </div>
          </Col>
          <Col col="6">
            <ul className="sort-list">
              <li>Sort based on</li>
              <li
                className={props.sort === "buyers" ? "active" : ""}
                onClick={() => {
                  props.changeSort("buyers");
                }}
              >
                Customer reviews
              </li>
              <li
                className={props.sort === "most_helpful" ? "active" : ""}
                onClick={() => {
                  props.changeSort("most_helpful");
                }}
              >
                Most helpful reviews
              </li>
              <li
                className={props.sort === "newest" ? "active" : ""}
                onClick={() => {
                  props.changeSort("newest");
                }}
              >
                Latest Review
              </li>
            </ul>
          </Col>
        </Row>
      </section>
      {commentsView()}
    </Box>
  );
};
export default Comments;
