import React, { Component } from "react";
import { connect } from "react-redux";
import Router from "next/router";
import { AuthBox } from "../styled_components/auth";
import Checkbox from "../components/lib/checkbox";
import {registerRequest} from "../actions/auth";
import Button from "../components/button";
import {HOME, VERIFY} from "../constants/urls";
class Register extends Component {
  static async getInitialProps({ store, query }) {}
  static getDerivedStateFromProps(nextProps, prevState) {
    let result = {};
    if (nextProps.userData.data) {
        if(nextProps.userData.data.is_active){
            Router.push(HOME);
        }else {
            Router.push(VERIFY)
        }
    }
    return result;
  }
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      policy: false
    };
  }
  policyStatus() {
    this.setState({
      policy: !this.state.policy
    });
  }
  emailChange(value) {
    this.setState({
      email: value
    });
  }
  passwordChange(value) {
    this.setState({
      password: value
    });
  }
  submit() {
    if(this.state.policy){
      this.props.register({
        email: this.state.email,
        password: this.state.password
      });
    }else{

    }

  }
  render() {
    return (
      <AuthBox>
        <div className="title">
          <i className="icon-speak" />
          Sign up
        </div>
        <label>Email Address</label>
        <input
          type="text"
          value={this.state.email}
          onChange={e => {
            this.emailChange(e.target.value);
          }}
          placeholder="Enter your email address"
        />
        <label>
          Password
        </label>
        <input
          type="password"
          value={this.state.password}
          onChange={e => {
            this.passwordChange(e.target.value);
          }}
          placeholder="Enter your password"
        />
        <div onClick={this.policyStatus.bind(this)}>
          <Checkbox
            title="I have read and agree to the Privacy Policy and Terms and Conditions of using Maleno services."
            status={this.state.policy}
          />
        </div>
        <Button onClick={this.submit.bind(this)} loading={this.props.loading} disabled={!this.state.policy}>
          Sign up
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
    register: (data) => {
      dispatch(registerRequest(data));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
