import React from "react";
import { connect } from "react-redux";
import { Box } from "../styled_components/product/dataBox";
import { getComments } from "../actions/comment";
import Tabs from "../components/product/productData/tabs";
import Comments from "../components/product/productData/comments";
import Question from "../components/product/productData/question";
import Review from "../components/product/productData/review";
import Features from "../components/product/productData/features";
import {QuestionAction} from "../actions";
import {ChangeNewQuestionText} from "../actions/question";
class ProductData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "features",
      comments: null,
      comment_sort: "buyers",
      questions: null,
      question_sort: "newest"
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    let result = {};
    if (nextProps.comments !== prevState.comments) {
      result.comments = nextProps.comments;
    }
    if (nextProps.questions !== prevState.questions) {
      result.questions = nextProps.questions;
    }

    return result;
  }

  changeSort(value, type) {
    if (type === "comment") {
      this.setState(
        {
          comment_sort: value
        },
        () => {
          this.props.getComments(this.props.id, {
            sort: value
          });
        }
      );
    } else if (type === "question") {
      this.setState(
        {
          question_sort: value
        },
        () => {
          this.props.getQuestion(this.props.id, {
            sort: value
          });
        }
      );
    }
  }
  listView() {
    console.log(this.state.questions, "ddww");
    switch (this.state.status) {
      // case "features":
      //   return (
      //     <Features
      //       enName={this.props.enName}
      //       productData={this.props.productData}
      //     />
      //   );
      case "comments":
        return (
          <Comments
            name={this.props.name}
            comments={this.state.comments}
            sort={this.state.comment_sort}
            changeSort={value => {
              this.changeSort(value, "comment");
            }}
          />
        );
      case "question":
        return (
          <Question
            questions={this.state.questions}
            sort={this.state.question_sort}
            changeSort={value => {
              this.changeSort(value, "question");
            }}
            storeQuestion={(data)=>this.props.storeQuestion(this.props.id, data)}
            changeNewQuestionText={this.props.ChangeNewQuestionText}
          />
        );
      case "review":
        return (
          <Review
            name={this.props.name}
            advantages={this.props.advantages}
            disadvantages={this.props.disadvantages}
            rating={this.props.rating}
            desc={this.props.desc}
            meta_description={this.props.meta_description}
          />
        );
      default:
        return null;
    }
  }
  changeStatus(value) {
    if (this.state.status !== value) {
      this.setState(
        {
          status: value
        },
        () => {
          if (value === "question") {
            if (!this.state.questions.isFetched) {
              this.props.getQuestion(this.props.id, {
                sort: this.state.question_sort
              });
            }
          }
          if (value === "comments") {
            if (!this.state.comments.cache) {
              this.props.getComments(this.props.id, {
                sort: this.state.comment_sort
              });
            }
          }
        }
      );
    }
  }
  render() {
    return (
      <div className="container">
        <Box>
          <div className="data">
            <div className="sep" />
            <div className="tabs">
              <Tabs
                onChange={this.changeStatus.bind(this)}
                status={this.state.status}
              />
            </div>
            {this.listView()}
          </div>
        </Box>
      </div>
    );
  }
}
const mapStateToProps = store => {
  return {
    comments: store.Comment,
    questions: store.Question
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getComments: (id, sort) => {
      dispatch(getComments(id, sort));
    },
    getQuestion: (id, sort) => {
      // dispatch(getQuestion(id, sort));
      dispatch(QuestionAction.getListRequest(id, sort));
    },
    storeQuestion:(id, data)=>{
      dispatch(QuestionAction.storeRequest(id, data))
    },
    ChangeNewQuestionText:(data)=>{
      dispatch(QuestionAction.ChangeNewQuestionText(data))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductData);
