import React, { Component } from "react";
import { connect } from "react-redux";
import Router from "next/router";
import { AuthBox } from "../styled_components/auth";
import {resetToken,resendCode} from "../actions/auth";
class ResetVerify extends Component {
    static async getInitialProps({ store, query }) {}
    static getDerivedStateFromProps(nextProps, prevState) {
        let result = {};
        if (nextProps.userData.data) {
            if (nextProps.userData.data.is_active) {
                Router.push("/");
            }
        }
        return result;
    }
    constructor(props) {
        super(props);
        this.state = {
            code: "",
            countDown: 60
        };
    }
    componentDidMount() {
        setInterval(() => {
            if (this.state.countDown > 0) {
                this.setState({
                    countDown: this.state.countDown - 1
                });
            }
        }, 1000);
        if (typeof sessionStorage !== "undefined") {
            if (!sessionStorage.getItem("verify_phone")) {
                Router.push("/login");
            }
        }
    }
    submit() {
        if (!isNaN(this.state.code) && this.state.code.length === 5) {
            this.props.resetToken(this.phoneNumber(),this.state.code);
        }
    }
    phoneNumber() {
        if (typeof sessionStorage !== "undefined") {
            return sessionStorage.getItem("verify_phone");
        }
    }
    resendCode() {
        this.setState({
            countDown: 60
        },()=>{
            this.props.resendCode(this.phoneNumber());
        });
    }
    resendCodeView() {
        if (this.state.countDown) {
            return (
                <span className="resend-count">
          دریافت کد مجدد بعد از (0:{this.state.countDown})
        </span>
            );
        } else {
            return (
                <span className="resend" onClick={this.resendCode.bind(this)}>
          دریافت کد مجدد
        </span>
            );
        }
    }
    render() {
        return (
            <AuthBox>
                <div className="title">
                    <i className="icon-tablet" />
                    تایید
                    <br />
                    شماره همراه
                </div>
                <div className="verify-notice">
                    برای شماره همراه
                    {this.phoneNumber()}
                    کد تایید ارسال گردیده است
                </div>
                <label>کد تایید را وارد نمایید</label>
                <input
                    type="text"
                    className="code-box"
                    value={this.state.code}
                    onChange={e => {
                        if (!isNaN(e.target.value) && e.target.value.length < 6) {
                            this.setState({
                                code: e.target.value
                            });
                        }
                    }}
                    placeholder="_ _ _ _ _"
                />
                {this.resendCodeView()}
                <div className="but" onClick={this.submit.bind(this)}>
                    تایید کد
                </div>
            </AuthBox>
        );
    }
}
const mapStateToProps = store => {
    return {
        userData: store.User
    };
};
const mapDispatchToProps = dispatch => {
    return {
        resetToken: (mobile,otp) => {
            dispatch(resetToken(mobile,otp));
        },
        resendCode:mobile=>{
            dispatch(resendCode(mobile));
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResetVerify);
