import React, { Component } from "react";
import { connect } from "react-redux";
import validator from "validator";
import { TitleBox } from "../../styled_components/profile";
import { InforamtionBox } from "../../styled_components/profile/information";
import { Row, Col } from "styled-bootstrap-grid";
import CheckBox from "../../components/lib/checkbox";
import Request from "../../utilities/request";
import {UserAction} from "../../actions";
import Button from "../../components/button";
class Information extends Component {
  static async getInitialProps({ store, query }) {}

  constructor(props) {
    super(props);
    this.state = { data: this.props.userData.data };
  }
  componentDidMount() {
    // this.props.getInformation();
    // this.getLocation("provinces", 1);
  }
  getLocation(type, id) {
    Request({
      method: "get",
      url: process.env.apiUrl + "/admin/locations/" + id + "/children"
    })
      .then(response => {
        this.setState({
          [type]: response.data.data
        });
      })
      .catch(error => {});
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    let result = {};
    if (nextProps.userData.data !== prevState.data) {
      result.data = nextProps.userData.data;
    }
    return result;
  }
  handelChange(value, name) {
    let data = this.state.data;
    data[name] = value;
    this.setState({
      data: data
    });
  }
  handelCheckBox(name) {
    let data = this.state.data;
    data[name] = !data[name];
    this.setState({
      data: data
    });
  }

  submit() {
    this.props.updateInformation(this.state.data);
  }
  actionBox() {
    const{processing}=this.props.userData;
    return (
      <div className="action-box">
        <Button onClick={this.submit.bind(this)} loading={processing}>
          Save
        </Button>

        {/*<div className="cancel">Cancel</div>*/}
      </div>
    );
  }
  formView() {
    let data = this.state.data;
    if (typeof data !== "undefined") {
      return (
        <form>
          <div className="form-box">
            <Row>
              <Col col={6}>
                <div className="title">Personal Information</div>
                <label>First Name</label>
                <input
                  type="text"
                  value={data.first_name}
                  onChange={e => {
                    this.handelChange(e.target.value, "first_name");
                  }}
                />
                <label>Last Name</label>
                <input
                  type="text"
                  value={data.last_name}
                  onChange={e => {
                    this.handelChange(e.target.value,  "last_name");
                  }}
                />
                <label>Email</label>
                <input
                  type="text"
                  value={data.email}
                  disabled={true}
                />
                <label>Credit Card</label>
                <input
                  type="number"
                  value={data.credit_card}
                  onChange={e => {
                    this.handelChange(
                      e.target.value,
                      "credit_card"
                    );
                  }}
                />
              </Col>
              <Col col={6}>
                <div className="title">Contact Information</div>
                <label>Phone Number</label>
                <input
                  type="number"
                  value={data.phone_number}
                  onChange={e => {
                    this.handelChange(e.target.value, "phone_number");
                  }}
                />
                <label>Address</label>
                <input
                  type="text"
                  value={data.address}
                  onChange={e => {
                    this.handelChange(e.target.value, "address");
                  }}
                />
                <label>Postal Code</label>
                <input
                  type="text"
                  value={data.postal_code}
                  onChange={e => {
                    this.handelChange(e.target.value,  "postal_code");
                  }}
                />
                <div
                  onClick={() => {
                    this.handelCheckBox("subscribe_newsletter");
                  }}
                >
                  <CheckBox
                    title="Subscribe to Maleno Newsletter"
                    status={data.subscribe_newsletter}
                  />
                </div>
              </Col>
            </Row>
          </div>
          {this.actionBox()}

        </form>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <TitleBox>Edit Personal Information</TitleBox>
        <InforamtionBox>{this.formView()}</InforamtionBox>
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
    getInformation: () => {
      dispatch(UserAction.getInfo());
    },
    updateInformation: data => {
      dispatch(UserAction.updateInfo(data));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Information);
