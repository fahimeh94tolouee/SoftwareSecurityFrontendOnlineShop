import React, { Component } from "react";
import { connect } from "react-redux";
import Router from "next/router";
import Link from "next/link";
import { AuthBox, Ribbon } from "../styled_components/auth";
import {loginRequest} from "../actions/auth";
import Button from "../components/button";
import {FORGET_PASSWORD, REGISTER} from "../constants/urls";
class Login extends Component {
  static async getInitialProps({ store, query }) {}

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   let result = {};
  //   if (nextProps.userData.data) {
  //     if (!nextProps.userData.data.is_active) {
  //       Router.push("/verify");
  //     }else if (typeof Router.query.redirect !== "undefined") {
  //       Router.push(Router.query.redirect);
  //     } else {
  //       Router.push("/");
  //     }
  //   }
  //   return result;
  // }

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
  submitLogin() {
    this.props.doLogin({
        email:this.state.email,
        password:this.state.password,
      });
  }
  render() {
    return (
      <React.Fragment>
        <AuthBox>
          <div className="title">
            <i className="icon-user" />
            Login
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
            <Link href={FORGET_PASSWORD}>
              <a>I forgot my password</a>
            </Link>
          </label>
          <input
            type="password"
            value={this.state.password}
            onChange={e => {
              this.passwordChange(e.target.value);
            }}
            placeholder="Enter your password"
          />
          <Button onClick={this.submitLogin.bind(this)} loading={this.props.loading}>
            Login
          </Button>

        </AuthBox>
        <Ribbon>
          New to Maleno?

          <Link href={REGISTER}>
          <a>Create your account</a>
          </Link>
        </Ribbon>
      </React.Fragment>
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
    doLogin: (data) => {
      dispatch(loginRequest(data));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
