import React from "react";
import { AddressModal } from "../../styled_components/shipping/addressModal";
import { Row, Col } from "styled-bootstrap-grid";
import Select from "react-select";
import Request from "../../utilities/request";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "",
        phone: "",
        province: "",
        city: "",
        address: "",
        postal_code: ""
      },
      provinces: []
    };
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.document.body.style.overflow = "hidden";
    }
    this.getLocation("provinces", 1);
    if (this.props.status === "edit") {
      this.setState(
        {
          data: this.props.data
        },
        () => {
          this.getLocation("cities", this.props.data.province.value);
          this.getLocation("districts", this.props.data.city.value);
        }
      );
    }
  }
  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.document.body.style.overflow = "auto";
    }
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
      .catch(error => {
      });
  }
  handleChange(value, type, location = false) {
    let data = this.state.data;
    data[type] = value;
    if (location) {
      this.getLocation(location, value.value);
    }
    this.setState({
      data: data
    });
  }
  districtView() {
    if (
      typeof this.state.districts === "object" &&
      this.state.districts.length > 0
    ) {
      return (
        <Col col="6">
          <label>
            محله
            <span className="star">*</span>
          </label>
          <Select
            className="select"
            classNamePrefix="select"
            value={this.state.data.district}
            onChange={value => {
              this.handleChange(value, "district");
            }}
            options={this.state.districts}
            placeholder="محله مورد نظر خود را انتخاب کنید"
          />
        </Col>
      );
    }
  }
  submit() {
    let data = this.state.data;
    let requireErrors = [];
    Object.keys(data).forEach(key => {
      if (data[key] === "") {
        requireErrors.push(key);
      }
    });
    if (requireErrors.length <= 0) {
      if(this.props.status ==='edit'){
        this.props.onSubmit(data, this.props.data.id);
      }else{
        this.props.onSubmit(data, false);
      }
      this.props.close();
    }
  }
  render() {
    return (
      <AddressModal>
        <div
          className="overlay"
          onClick={() => {
            this.props.close();
          }}
        />
        <div className="inner">
          <span
            className="close"
            onClick={() => {
              this.props.close();
            }}
          />
          <div className="title">افزودن آدرس جدید</div>
          <div className="form">
            <Row>
              <Col col="6">
                <label>
                  نام و نام خانوادگی تحویل گیرنده
                  <span className="star">*</span>
                </label>
                <input
                  className="input"
                  type="text"
                  value={this.state.data.name}
                  onChange={e => {
                    this.handleChange(e.target.value, "name");
                  }}
                  placeholder="نام تحویل گیرنده را وارد نمایید"
                />
              </Col>
              <Col col="6">
                <label>
                  شماره موبایل
                  <span className="star">*</span>
                </label>
                <input
                  className="input ltr"
                  type="text"
                  value={this.state.data.phone}
                  onChange={e => {
                    this.handleChange(e.target.value, "phone");
                  }}
                  placeholder="09XXXXXXXXX"
                />
              </Col>
              <Col col="6">
                <label>
                  استان
                  <span className="star">*</span>
                </label>
                <Select
                  className="select"
                  classNamePrefix="select"
                  value={this.state.data.province}
                  onChange={value => {
                    this.handleChange(value, "province", "cities");
                  }}
                  options={this.state.provinces}
                  placeholder="استان مورد نظر خود را انتخاب کنید"
                />
              </Col>
              <Col col="6">
                <label>
                  شهر
                  <span className="star">*</span>
                </label>
                <Select
                  className="select"
                  classNamePrefix="select"
                  value={this.state.data.city}
                  onChange={value => {
                    this.handleChange(value, "city", "districts");
                  }}
                  options={this.state.cities}
                  placeholder="شهر مورد نظر خود را انتخاب کنید"
                />
              </Col>
              {this.districtView()}
              <Col col="12">
                <label>
                  آدرس پستی
                  <span className="star">*</span>
                </label>
                <textarea
                  placeholder="آدرس تحویل گیرنده را وارد نمایید"
                  value={this.state.data.address}
                  onChange={e => {
                    this.handleChange(e.target.value, "address");
                  }}
                />
              </Col>
              <Col col="12">
                <label>
                  کد پستی
                  <span className="star">*</span>
                </label>
                <input
                  className="input ltr"
                  placeholder="کد پستی تحویل گیرنده را بدون خط تیره وارد نمایید"
                  value={this.state.data.postal_code}
                  onChange={e => {
                    this.handleChange(e.target.value, "postal_code");
                  }}
                />
              </Col>
            </Row>
          </div>
          <div className="buts">
            <div className="submit" onClick={this.submit.bind(this)}>
              ثبت و ارسال به این آدرس
            </div>
            <div
              className="cancel"
              onClick={() => {
                this.props.close();
              }}
            >
              انصراف و بازگشت
              <i className="icon-rewind" />
            </div>
          </div>
        </div>
      </AddressModal>
    );
  }
}
export default Modal;
