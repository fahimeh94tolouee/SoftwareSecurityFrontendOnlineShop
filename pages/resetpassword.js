import React, { Component } from "react";
import { connect } from "react-redux";
import { AuthBox } from "../styled_components/auth";
import { resetPassword } from "../actions/auth";
import { UserAction } from "../actions";
import Button from "../components/button";
import {
  changePasswordNewPassLength,
  changePasswordOldPassLength,
} from "../constants/maxLenghtAtrribute";
import {toastr} from "react-redux-toastr";
import {checkPasswordStrangeness} from "../utilities/specifics/passwordChecking";
import {EMAIL, RESET_PASS_TOKEN} from "../constants/storageKey";
class ResetPassword extends Component {
  static async getInitialProps({ store, query }) {}

  constructor(props) {
    super(props);
    this.state = {
      oldPassword: "",
      newPassword: "",
      confirmPassword: ""
    };
  }
  handleChange(value, type) {
    this.setState({
      [type]: value
    });
  }
  getSessionStorageEmail() {
    if (typeof sessionStorage !== "undefined") {
      return sessionStorage.getItem(EMAIL);
    }
  }
  getResetToken() {
    if (typeof sessionStorage !== "undefined") {
      return sessionStorage.getItem(RESET_PASS_TOKEN);
    }
    return false;
  }
  submit() {
    const{oldPassword, newPassword, confirmPassword} = this.state;
    const{changePassword, resetPassword} = this.props;
    const isChangePassword = !this.getResetToken();
    let hasError = false;
    if(isChangePassword) {
      if (!oldPassword) {
        toastr.error("Old Password required!")
        hasError = true;
      }
    }
    hasError |= checkPasswordStrangeness(newPassword, "New Password")
    if (newPassword !== confirmPassword){
      toastr.error("New Password and Confirm Password must match.");
      hasError = true
    }
    if (!hasError){
      let postData = {
        new_password: newPassword,
        confirm_password: confirmPassword
      }
      if (isChangePassword){
        postData = {
          old_password: oldPassword,
          ...postData,
        }
        changePassword(postData)
      }
      else {
        //TODO FIX
        postData = {
          email: this.getSessionStorageEmail(),
          ...postData
        }
        resetPassword(postData)
      }
    }
  }
  oldPassView() {
    if (!this.getResetToken()) {
      return (
        <React.Fragment>
          <label>Old Password</label>
          <input
            type="password"
            value={this.state.oldPassword}
            onChange={e => {
              this.handleChange(e.target.value, "oldPassword");
            }}
            placeholder="Enter your old password"
            maxLength={changePasswordOldPassLength}
          />
        </React.Fragment>
      );
    }
  }
  render() {
    return (
      <AuthBox>
        <div className="title">
          <i className="icon-password" />
          Change Password
        </div>
        {this.oldPassView()}
        <label>New Password</label>
        <input
          type="password"
          value={this.state.newPassword}
          onChange={e => {
            this.handleChange(e.target.value, "newPassword");
          }}
          maxLength={changePasswordNewPassLength}
          placeholder="Enter your new password"
        />
        <label>Confirm New Password</label>
        <input
          type="password"
          value={this.state.confirmPassword}
          onChange={e => {
            this.handleChange(e.target.value, "confirmPassword");
          }}
          maxLength={changePasswordNewPassLength}
          placeholder="Enter your new password again"
        />
        <Button onClick={this.submit.bind(this)} loading={this.props.processing}>
          Change Password
        </Button>

      </AuthBox>
    );
  }
}
const mapStateToProps = store => {
  return {
    userData: store.User,
    processing: store.User.changePasswordProcessing
  };
};
const mapDispatchToProps = dispatch => {
  return {
    resetPassword: (data) => {
      dispatch(resetPassword(data));
    },
    changePassword: (data) =>{
      dispatch(UserAction.changePassword(data))
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword);
