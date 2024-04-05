import React, { Component } from "react";
import { connect } from "react-redux";
import Router from "next/router";
import { AuthBox } from "../styled_components/auth";
import {resendCode, verifyRequest} from "../actions/auth";
import {deleteCookie} from "../utilities/tokenManager";
import {ACCESS_TOKEN, EMAIL} from "../constants/storageKey";
import {stringIsNotEmpty} from "../utilities/checkIsNotEmpty";
import Button from "../components/button";
import {RESEND_OTP_TIME} from "../constants/others";
import {otpCodeLength} from "../constants/maxLenghtAtrribute";
import {formatTime} from "../utilities/formatDateTime";
import {HOME, REGISTER} from "../constants/urls";
class Verify extends Component {
  static async getInitialProps({ store, query }) {}
  static getDerivedStateFromProps(nextProps, prevState) {
    let result = {};
    if (nextProps.userData.data) {
      if (nextProps.userData.data.is_active) {
        Router.push(HOME);
      }
    }
    return result;
  }
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      countDown: RESEND_OTP_TIME
    };
    this.timerInterval = null;
  }
  componentDidMount() {
    this.timerInterval = setInterval(() => {
      if (this.state.countDown > 0) {
        this.setState({
          countDown: this.state.countDown - 1
        });
      }
    }, 1000);
  }
  componentWillUnmount() {
    // Clear the interval when the component unmounts
    clearInterval(this.timerInterval);
  }

  otpIsValid(){
    return !isNaN(this.state.code) && this.state.code.length === otpCodeLength
  }
  submit() {
    if (this.otpIsValid()) {
      console.log("ddd");
      this.props.doVerify({email:this.getEmail(), otp_code:this.state.code});
    }
  }
  getEmail() {
    if (typeof window !== 'undefined' && stringIsNotEmpty(sessionStorage.getItem(EMAIL))) {
      return sessionStorage.getItem(EMAIL);
    }
    return ""
  }
  resendCode() {
    this.setState(
      {
        countDown: RESEND_OTP_TIME
      },
      () => {
        this.props.resendCode(this.getEmail());
      }
    );
  }
  resendCodeView() {
    if (this.state.countDown) {
      return (
        <span className="resend-count">
          Receive a new code after ({formatTime(this.state.countDown)})
        </span>
      );
    } else {
      return (
        <span className="resend" onClick={this.resendCode.bind(this)}>
          Request New Code
        </span>
      );
    }
  }
  goBackView() {
    return (
      <span
        className="go-back"
        onClick={() => {
          deleteCookie(ACCESS_TOKEN)
          Router.push(REGISTER);
        }}
      >
        Edit email
      </span>
    );
  }
  render() {
    return (
      <AuthBox>
        <div className="title">
          <i className="icon-tablet" />
          Email Confirmation
        </div>
        <div className="verify-notice">
          A verification code has been sent to {this.getEmail()}.
          {this.goBackView()}
        </div>
        <label>Enter OTP code</label>
        <input
          type="text"
          className="code-box"
          value={this.state.code}
          onChange={e => {
            if (!isNaN(e.target.value) && e.target.value.length < (otpCodeLength+1)) {
              this.setState({
                code: e.target.value
              });
            }
          }}
          placeholder="_ _ _ _ _ _"
        />
        {this.resendCodeView()}
        <Button onClick={this.submit.bind(this)} loading={this.props.loading} disabled={!this.otpIsValid()}>
          Confirm
        </Button>
      </AuthBox>
    );
  }
}
const mapStateToProps = store => {
  return {
    userData: store.User,
    loading: store.Auth.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    doVerify: data => {
      dispatch(verifyRequest(data));
    },
    resendCode: email => {
      dispatch(resendCode(email));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Verify);
