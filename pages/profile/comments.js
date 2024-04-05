import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserComments, deleteComment } from "../../actions/comment";
import { TitleBox, NotFound } from "../../styled_components/profile";
import { CommentBox } from "../../styled_components/profile/comments";
import { Row, Col } from "styled-bootstrap-grid";
class Comments extends Component {
  static async getInitialProps({ store, query }) {}
  componentDidMount() {
    this.props.getUserComments(this.props.id);
  }

  makeView() {
    const { comments } = this.props;
    if (typeof comments === "undefined") {
      return <div />;
    }
    if (comments.length <= 0) {
      return (
        <NotFound>
          <i className="icon-shield-1" />
          شما هنوز هیچ نظری ثبت نکرده اید
        </NotFound>
      );
    } else {
      return (
        <Row>
          {comments.map(comment => (
            <Col col={6} key={comment.id}>
              <CommentBox>
                <div className="likes">
                  <div className="like">1</div>
                  <div className="dislike">2</div>
                  {comments.likes
                    ? `<div className="like">${comments.likes}</div>`
                    : ""}
                  {comments.dislikes
                    ? `<div className="dislike">${comments.dislikes}</div>`
                    : ""}
                </div>
                <div className="image">
                  <img src={comment.main_image.path} />
                </div>
                <div className="detail">
                  <strong>{comment.title}</strong>
                  <div className="content">{comment.comment}</div>
                  <div className="actions">
                    <div
                      className="remove"
                      onClick={() => {
                        if (this.props.deleteComment(comment.id)) {
                          this.props.getUserComments(this.props.id);
                        }
                      }}
                    >
                      حذف
                    </div>
                  </div>
                </div>
              </CommentBox>
            </Col>
          ))}
        </Row>
      );
    }
  }
  render() {
    return (
      <React.Fragment>
        <TitleBox>نقد و نظرات</TitleBox>
        {this.makeView()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => {
  return {
    comments: store.Comment.userComments
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUserComments: () => {
      dispatch(getUserComments());
    },
    deleteComment: id => {
      dispatch(deleteComment(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
