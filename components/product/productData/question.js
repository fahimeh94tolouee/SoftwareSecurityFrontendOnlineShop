import React from "react";
import { Col, Row } from "styled-bootstrap-grid";
import Checkbox from "../../lib/checkbox";
import { Box } from "../../../styled_components/product/databox/questionBox";
import Button from "../../button";
const Question = props => {

  const lengthOfQuestion = () => {
    if (
      typeof props.questions.data !== "undefined" &&
      props.questions.data.length > 0
    ) {
      return <small>({props.questions.data.length} Questions)</small>;
    }
  };
  const helpful = (likes, dislikes) => {
    return (
      <div className="helpful">
        Was this review helpful to you?
        <ul>
          <li>{likes <= 0 ? "" : likes} Yes</li>
          <li>{dislikes <= 0 ? "" : dislikes} No</li>
        </ul>
      </div>
    );
  };
  const answersView = answers => {
    if (typeof answers === "object" && answers.length > 0) {
      return (
        <div className="answers">
          {answers.map(item => (
            <div className="answer" key={item.id}>
              <div className="post">
                <div className="comment-title">
                  By{" "}
                  {item.user}
                </div>
                <div className="author">
                  On{" "}
                  {item.created_at}
                </div>
              </div>
              <div className="text">{item.answer}</div>
              {helpful(item.likes, item.dislikes)}
            </div>
          ))}
        </div>
      );
    }
  };
  const questionsView = () => {
    if (typeof props.questions.data === "object") {
      return props.questions.data.map(item => {
        return (
          <React.Fragment key={item.id}>
            <div className="question">
              <div className="post">
                <div className="comment-title">
                  By{" "}
                  {item.user}
                </div>
                <div className="author">
                  On{" "}
                  {item.created_at}
                </div>
              </div>
              <div className="text">{item.question}</div>
              <div className="answer-but">Answer to this question</div>
            </div>
            {answersView(item.answers)}
          </React.Fragment>
        );
      });
    }
  };
  const askQuestion = ()=>{
    props.storeQuestion(
      {question:props.questions.newQuestionText}
    )
  }

  return (
    <Box>
      <div className="title">Questions and Answers</div>
        <div className="sub-title">Ask your question about this product</div>
      <section>
        <textarea
          placeholder=""
          value={props.questions.newQuestionText}
          onChange={e => {
            props.changeNewQuestionText(e.target.value)
          }}
        />
        <Row>
          <Col col="3">
            <Button className="add-faq" onClick={()=> askQuestion()} loading={props.questions.processing}>
              Ask a question
            </Button>
            {/*<div className="add-faq" onClick={()=> askQuestion()}>*/}
            {/*  <span>Ask a question</span>*/}
            {/*</div>*/}
          </Col>
          <Col col="9">
            <span className="rule">
              By selecting the 'Ask a question' button, I agree to the content publishing rules on Maleno.
            </span>
          </Col>
        </Row>
      </section>
      <section>
        <Row>
          <Col col="6">
            <div className="sort-title">
              <span>
                Questions and Answers
                {lengthOfQuestion()}
              </span>
            </div>
          </Col>
          <Col col="6">
            <ul className="sort-list">
              <li>Sort based on:</li>
              <li
                className={props.sort === "newest" ? "active" : ""}
                onClick={() => {
                  props.changeSort("newest");
                }}
              >
                Latest questions
              </li>
              <li
                className={props.sort === "most_answered" ? "active" : ""}
                onClick={() => {
                  props.changeSort("most_answered");
                }}
              >
                Most answered questions
              </li>
              <li
                className={props.sort === "user_question" ? "active" : ""}
                onClick={() => {
                  props.changeSort("user_question");
                }}
              >
                Your questions
              </li>
            </ul>
          </Col>
        </Row>
      </section>
      {questionsView()}
    </Box>
  );
};
export default Question;
