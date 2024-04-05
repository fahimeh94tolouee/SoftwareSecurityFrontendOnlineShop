import React from "react";
const Tabs = props => {
  return (
    <ul>
      <li
        className={props.status === "features" ? "active" : ""}
        onClick={() => {
          props.onChange("features");
        }}
      >
        <span className="features">Product Information</span>
      </li>
      <li
        className={props.status === "comments" ? "active" : ""}
        onClick={() => {
          props.onChange("comments");
        }}
      >
        <span className="comments">Customer Reviews</span>
      </li>
      <li
        className={props.status === "question" ? "active" : ""}
        onClick={() => {
          props.onChange("question");
        }}
      >
        <span className="faq">Questions and Answers</span>
      </li>

    </ul>
  );
}
export default Tabs;

