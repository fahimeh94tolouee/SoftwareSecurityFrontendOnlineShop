import React, { Component } from "react";
import { connect } from "react-redux";
import { TitleBox } from "../../styled_components/profile";
import { Row, Col } from "styled-bootstrap-grid";
import {
  addAddress,
  deleteAddress,
  getAddress,
  updateAddress
} from "../../actions/address";
import { AddressBox, AddBox } from "../../styled_components/profile/addresses";
import Modal from "../../components/shipping/modal";
class Addresses extends Component {
  static async getInitialProps({ store, query }) {}

  constructor(props) {
    super(props);
    this.state = {
      modalStatus: false,
      modalData: ""
    };
  }

  componentDidMount() {
    this.props.getAddress();
  }
  handleAddress(data, id) {
    if (!id) {
      this.props.addAddress(data);
    } else {
      this.props.updateAddress(data, id);
    }
  }
  ModalView() {
    if (this.state.modalStatus) {
      return (
        <Modal
          status={this.state.modalStatus}
          data={this.state.modalData}
          onSubmit={(data, id) => {
            this.handleAddress(data, id);
          }}
          close={() => {
            this.setState({
              modalStatus: false
            });
          }}
        />
      );
    }
  }
  render() {
    let items = this.props.address.items;
    return (
      <React.Fragment>
        <TitleBox>آدرس‌ها</TitleBox>
        <Row>
          <Col col={6}>
            <AddBox
              onClick={() => {
                this.setState({
                  modalStatus: "add"
                });
              }}
            >
              <i className="icon-road" />
              <span>افزودن آدرس جدید</span>
            </AddBox>
          </Col>
          {items.map(item => (
            <Col col={6} key={item.id}>
              <AddressBox>
                <div className="name">{item.name}</div>
                <ul className="contact">
                  <li>
                    شماره تماس:
                    {item.phone}
                  </li>
                  <li>
                    کد پستی:
                    {item.postal_code}
                  </li>
                </ul>
                <span className="address">
                  {item.province.label} , {item.city.label} ,
                  {item.district !== null ? item.district.label + " , " : ""}
                  {item.address}
                </span>
                <div className="actions">
                  <div
                    className="edit"
                    onClick={() => {
                      this.setState({
                        modalStatus: "edit",
                        modalData: item
                      });
                    }}
                  >
                    <span>ویرایش</span>
                  </div>
                  <div
                    className="remove"
                    onClick={() => {
                      this.props.deleteAddress(item.id);
                    }}
                  >
                    <span>حذف</span>
                  </div>
                </div>
              </AddressBox>
            </Col>
          ))}
        </Row>
        {this.ModalView()}
      </React.Fragment>
    );
  }
}
const mapStateToProps = store => {
  return {
    address: store.Address
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAddress: () => {
      dispatch(getAddress());
    },
    addAddress: data => {
      dispatch(addAddress(data));
    },
    updateAddress: (data, id) => {
      dispatch(updateAddress(data, id));
    },
    deleteAddress: id => {
      dispatch(deleteAddress(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Addresses);
