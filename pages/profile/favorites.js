import React, { Component } from "react";
import { connect } from "react-redux";
import { getFavorites, deleteFavorites } from "../../actions/favorites";
import { TitleBox } from "../../styled_components/profile";
import { Row, Col } from "styled-bootstrap-grid";
import { ProductBox } from "../../styled_components/profile/favorites";
import Link from "next/link";
import Router from 'next/router';
class Favorites extends Component {
  static async getInitialProps({ store, query }) {}
  componentDidMount() {
    this.props.getFavorites();
  }
  countView() {
    let meta = this.props.favorites.meta;
    if (typeof meta.to !== "undefined") {
      return `نمایش ${meta.to} از ${meta.total} کالا`;
    }
  }
  priceView(price) {
    if (price) {
      return `${price.toLocaleString("fa-IR")} تومان `;
    } else {
      return "ناموجود";
    }
  }
  dataView(item) {
    if (item.price > 0) {
      return (
        <ul className="data">
          <li>
            <i className="icon-shop" />
            فروشنده : {item.seller.name}
          </li>
          <li>
            <i className="icon-shield-1" />
            {item.guarantee.name}
          </li>
          <li>
            <span style={{ backgroundColor: item.color.hex_color_code }} />
            رنگ : {item.color.name}
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="data">
          <li>
            <span style={{ backgroundColor: item.color.hex_color_code }} />
            رنگ : {item.color.name}
          </li>
        </ul>
      );
    }
  }
  actionView(item) {
    if (item.price) {
      return (
        <div className="action-but blue-action"
        onClick={()=>{
          this.addToCart(item.product_variation_id,1)
        }}>
          <i className="icon-supermarket" />
        </div>
      );
    } else {
      return (
        <div className="action-but grey-action">
          <i className="icon-bell" />
        </div>
      );
    }
  }
  addToCart(id, qty) {
    let cart = [];
    let pushStatus = true;
    if(localStorage.getItem('cart')){
      cart = JSON.parse(localStorage.getItem('cart'));
    }
    cart.filter(item=>{
      if(item.id === id){
        pushStatus= false
      }
    });
    if(pushStatus){
      cart.push({id:id,quantity:qty});
    }
    localStorage.setItem('cart',JSON.stringify(cart));
    Router.push('/cart');
  }
  render() {
    console.log(this.props);
    let items = this.props.favorites.items;
    return (
      <React.Fragment>
        <TitleBox>
          لیست علاقه‌مندی‌ها
          <span className="more-data">{this.countView()}</span>
        </TitleBox>
        <Row>
          {items.map(item => (
            <Col col={6} key={item.id}>
              <ProductBox>
                <div
                  className="remove"
                  onClick={() => {
                    this.props.deleteFavorites(item.id);
                  }}
                />
                <div className="image">
                  <Link
                    as={`/product/${item.id}`}
                    href={`/product?id=${item.id}`}
                  >
                    <img src={item.main_image.path} alt={item.name} />
                  </Link>
                </div>
                <div className="detail">
                  <div className="title">
                    <Link
                      as={`/product/${item.id}`}
                      href={`/product?id=${item.id}`}
                    >
                      <a>{item.name}</a>
                    </Link>
                  </div>
                  <ul className="rate">
                    <li>
                      <i className="icon-star" />
                    </li>
                    <li>
                      <i className="icon-star" />
                    </li>
                    <li>
                      <i className="icon-star" />
                    </li>
                    <li>
                      <i className="icon-star" />
                    </li>
                    <li>
                      <i className="icon-favorite" />
                    </li>
                  </ul>
                  {this.dataView(item)}
                  <div className="price">
                    {this.priceView(item.price)}
                    {this.actionView(item)}
                  </div>
                </div>
              </ProductBox>
            </Col>
          ))}
        </Row>
      </React.Fragment>
    );
  }
}
const mapStateToProps = store => {
  return {
    favorites: store.Favorites
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getFavorites: () => {
      dispatch(getFavorites());
    },
    deleteFavorites: id => {
      dispatch(deleteFavorites(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
