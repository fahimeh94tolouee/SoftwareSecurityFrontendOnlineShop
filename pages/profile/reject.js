import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleOrder, RejectOrder } from "../../actions/order";
import { TitleBox } from "../../styled_components/profile";
import { ProductsBox } from "../../styled_components/profile/reject";
import Checkbox from "../../components/lib/checkbox";
import Select from "react-select";
import Dropzone from "react-dropzone";
import Request from "../../utilities/request";
const causes = [
  { label: "آسیب دیدگی کالا", value: 1 },
  { label: "باز بودن بسته ارسال شده", value: 2 },
  {
    label: "عدم مطابقت بسته ارسالی با محصول خریداری شده",
    value: 3
  },
  {
    label: "خرابی محصول پس از استفاده و بازگشت به همراه گارانتی",
    value: 4
  },
  {
    label: "عدم مطابقت محصول ارسالی با عکس مندرج در سایت",
    value: 5
  }
];
class Reject extends Component {
  static async getInitialProps({ store, query }) {
    return {
      id: query.id
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      variations: [],
      cause: "",
      description: "",
      images: []
    };
  }

  componentDidMount() {
    this.props.getSingleOrder(this.props.id);
  }
  submit() {
    let data = this.state;
    let rejectData = {
      variation_ids: data.variations,
      cause: data.cause.value,
      description: data.description,
      image_ids: []
    };
    data.images.forEach(image => {
      if (image.id > 0) {
        rejectData.image_ids.push(image.id);
      }
    });
    this.props.RejectOrder(this.props.id, rejectData);
  }
  handleVariation(id) {
    let variations = this.state.variations;
    if (variations.indexOf(id) >= 0) {
      variations.splice(variations.indexOf(id), 1);
    } else {
      variations.push(id);
    }
    this.setState({
      variations: variations
    });
  }
  priceView(price) {
    if (price > 0) {
      let sep = price.toLocaleString("fa-IR");
      return (
        <React.Fragment>
          {sep}
          <span className="currency">تومان</span>
        </React.Fragment>
      );
    } else {
      return <span className="currency">رایگان</span>;
    }
  }

  stepView() {
    let order = this.props.order.order;
    if (typeof order.id === "undefined") {
      return <div />;
    }
    let step = this.state.step;
    switch (step) {
      case 0:
        return (
          <React.Fragment>
            <div className="label">شماره سفارش : {this.props.id}</div>
            <div className="products">
              <table>
                <thead>
                  <tr>
                    <th>عنوان محصول</th>
                    <th>شماره سریال</th>
                    <th>قیمت</th>
                    <th>مهلت مرجوعی</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {order.shippments.map(shippment => {
                    return shippment.product_variations.map(
                      (variation, index) => (
                        <tr key={variation.id}>
                          <td>
                            <div className="product-detail">
                              <img src={variation.product.main_image.path} />
                              <div className="content">
                                <span>{variation.product.name}</span>
                                <small>
                                  فروشنده : {variation.product.seller.name}
                                </small>
                                <small>{variation.guarantee.name}</small>
                                <small>رنگ : {variation.color.name}</small>
                              </div>
                            </div>
                          </td>
                          <td>{variation.serial_number}</td>
                          <td>{this.priceView(variation.price)}</td>
                          <td>{shippment.return_timeout}</td>
                          <td>
                            <div
                              onClick={() => {
                                this.handleVariation(variation.id);
                              }}
                            >
                              <Checkbox
                                status={
                                  this.state.variations.indexOf(variation.id) >=
                                  0
                                    ? true
                                    : false
                                }
                              />
                            </div>
                          </td>
                        </tr>
                      )
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div
              className="select-product"
              onClick={() => {
                if (this.state.variations.length > 0) {
                  this.setState({
                    step: 1
                  });
                }
              }}
            >
              انتخاب کالا‌های مرجوعی
            </div>
          </React.Fragment>
        );
      case 1:
        return (
          <React.Fragment>
            <div className="label">شماره سفارش : {this.props.id}</div>
            <div className="products">
              <table>
                <tbody>
                  {order.shippments.map(shippment => {
                    return shippment.product_variations.map(
                      (variation, index) => {
                        if (this.state.variations.indexOf(variation.id) >= 0) {
                          return (
                            <tr key={variation.id}>
                              <td>
                                <div className="product-detail">
                                  <img
                                    src={variation.product.main_image.path}
                                  />
                                  <div className="content">
                                    <span>{variation.product.name}</span>
                                    <small>{variation.guarantee.name}</small>
                                    <small>رنگ : {variation.color.name}</small>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span className="slag">فروشنده </span>
                                {variation.product.seller.name}
                              </td>
                              <td>
                                <span className="slag"> قیمت</span>
                                {this.priceView(variation.price)}
                              </td>
                            </tr>
                          );
                        }
                      }
                    );
                  })}
                </tbody>
              </table>
            </div>
            <label>علت مرجوعی</label>
            <Select
              className="select"
              classNamePrefix="select"
              value={this.state.cause}
              onChange={value => {
                this.setState({
                  cause: value
                });
              }}
              options={causes}
              placeholder="علت مرجوعی خود را انتخاب کنید"
            />
            <label>لطفا علت مرجع نمودن این کالا را توضیح دهید</label>
            <textarea
              placeholder="مثلا : بر روی خودکار خط و خش وجود دارد"
              value={this.state.description}
              onChange={e => {
                this.setState({
                  description: e.target.value
                });
              }}
            />
            <label>
              برای افزایش سرعت روند مرجوعی کالا لطفا تصویر یا فیلم از ایراد
              کالاها ارسال نمایید
            </label>

            <Dropzone
              onDrop={acceptedFiles => {
                this.dropFile(acceptedFiles);
              }}
              multiple={false}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} className="dropzone">
                  <input {...getInputProps()} />
                  {this.dropzoneImageView()}
                  <div className="but">انتخاب فایل</div>
                </div>
              )}
            </Dropzone>
            <div className="select-product" onClick={this.submit.bind(this)}>
              تایید نهایی اطلاعات مرجوعی
            </div>
          </React.Fragment>
        );
    }
  }
  dropzoneImageView() {
    let images = this.state.images;
    if (images.length <= 0) {
      return <span>فایل مورد نظر خود را کشیده و در این قسمت رها کنید</span>;
    } else {
      const imageStatus = status => {
        if (status === 0) {
          return "pending";
        } else if (status < 0) {
          return "failed";
        } else {
          return "success";
        }
      };
      return (
        <div className="images">
          {images.map((image, index) => (
            <div
              className={imageStatus(image.id)}
              key={index}
              onClick={e => {
                e.stopPropagation();
              }}
            >
              <span
                className="del"
                onClick={() => {
                  this.removeImage(index);
                }}
              />
              <img src={image.preview} />
            </div>
          ))}
        </div>
      );
    }
  }
  removeImage(index) {
    let images = this.state.images;
    images.splice(index, 1);
    this.setState({
      images: images
    });
  }
  dropFile(file) {
    let images = this.state.images;
    images.push({
      id: 0,
      file: file[0],
      preview: window.URL.createObjectURL(file[0])
    });
    let index = images.length - 1;
    this.setState(
      {
        images: images
      },
      () => {
        let data = new FormData();
        data.append("image", file[0]);
        Request({
          url: process.env.apiUrl + "/profile/orders/return/images",
          method: "post",
          needToken: true,
          headers: {
            "content-type": "multipart/form-data"
          },
          data: data
        })
          .then(response => {
            if (typeof images[index] !== "undefined") {
              images[index]["id"] = response.data.data.id;
              this.setState({
                images: images
              });
            }
          })
          .catch(error => {
            if (typeof images[index] !== "undefined") {
              images[index]["id"] = -1;
              this.setState({
                images: images
              });
            }
          });
      }
    );
  }
  render() {
    return (
      <React.Fragment>
        <TitleBox>درخواست مرجوعی کالا</TitleBox>
        <ProductsBox>{this.stepView()}</ProductsBox>
      </React.Fragment>
    );
  }
}
const mapStateToProps = store => {
  return {
    order: store.Order
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getSingleOrder: id => {
      dispatch(getSingleOrder(id));
    },
    RejectOrder: (id, data) => {
      dispatch(RejectOrder(id, data));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reject);
