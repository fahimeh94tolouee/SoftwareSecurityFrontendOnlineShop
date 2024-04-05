import React, { Component } from "react";
import { connect } from "react-redux";
import Router from "next/router";
import { AuthBox } from "../styled_components/auth";
import { doForget } from "../actions/auth";
class Forget extends Component {
    static async getInitialProps({ store, query }) {}

    constructor(props) {
        super(props);
        this.state = {
            phone: "",
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let result = {};
        if (nextProps.userData.data) {
            if (!nextProps.userData.data.is_active) {
                Router.push("/verify");
            } else {
                Router.push("/");
            }
        }
        return result;
    }

    phoneChange(value) {
        if (
            !isNaN(value) &&
            (value.charAt(0) === 0 || value.charAt(0) === "0") &&
            value.length < 12
        ) {
            this.setState({
                phone: value
            });
        }
    }

    submit() {
        if(this.state.phone.length ===11){
            this.props.doForget(this.state.phone);
        }
    }
    render() {
        return (
            <React.Fragment>
                <AuthBox>
                    <div className="title">
                        <i className="icon-password" />
                        یادآوری
                        <br />
                        کلمه عبور
                    </div>
                    <label>شماره موبایل</label>
                    <input
                        type="text"
                        value={this.state.phone}
                        onChange={e => {
                            this.phoneChange(e.target.value);
                        }}
                        placeholder="شماره موبایل مورد نظر را وارد نمایید"
                    />

                    <div className="but" onClick={this.submit.bind(this)}>
                        یادآوری کلمه عبور
                    </div>
                </AuthBox>
            </React.Fragment>
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
        doForget: mobile => {
            dispatch(doForget(mobile));
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Forget);
