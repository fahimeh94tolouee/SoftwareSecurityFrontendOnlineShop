import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import {
  getProduct,
  getProductVariations,
  setLoading
} from "../actions/product";
import {OrderAction, ProductAction} from "../actions";
import { getBreadcrumb } from "../actions/breadcrumb";
import Breadcrumb from "../components/lib/breadcrumb";
import { TopBox, BreadcrumbBox } from "../styled_components/product";

import TopSection from "../components/product/topSection";
import Slogans from "../components/product/slogans";
import Variations from "../components/product/variations";
import ProductData from "../containers/productData";
import ProductCarousel from "../components/homeScreen/productCarousel";
import {CART} from "../constants/storageKey";
import {CART as CART_URL} from "../constants/urls";

class Product extends Component {
  constructor() {
    super();
    this.TopBoxRef = React.createRef();

  }
  static async getInitialProps({ store, query }) {
    // await store.dispatch(getProduct(query.id));
    await store.dispatch(ProductAction.show(query.id));
    // await store.dispatch(getBreadcrumb("product", query.id));

    return { id: query.id };
  }
  state = {
    id: this.props && this.props.id
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    let result = {};
    if (nextProps.id !== prevState.id) {
      result.id = nextProps.id;
      nextProps.setLoading({
          loading:false,
      })
    }
    return result;
  }
  componentDidMount() {
      this.props.setLoading({
          loading:false,
      })
    this.props.show(this.state.id)
  }

    variationChange(value) {
    // this.props.getProductVariations(this.props.id, value);
  }
  addToCart(data) {
    this.props.addToCart(data)
  }
  render() {
    const{product} = this.props;
    return (
      <React.Fragment>
        <TopBox ref={this.TopBoxRef}>
          <TopSection
            addToCart={this.addToCart.bind(this)}
            product={product}
            variationChange={this.variationChange.bind(this)}
            containerWidth={this.TopBoxRef && this.TopBoxRef.current && this.TopBoxRef.current.getBoundingClientRect().width}
          />
        </TopBox>
        <Slogans />
        {/*<Variations items={product.variations} />*/}
        {/*<ProductCarousel*/}
        {/*  title="جدیدترین محصولات افزوده شده"*/}
        {/*  more="/product/1"*/}
        {/*  fetch_url={*/}
        {/*    process.env.apiUrl + "/home_page/lists?type=newest_products"*/}
        {/*  }*/}
        {/*/>*/}
        <ProductData
          name={product.title}
          // enName={product.en_name}
          // productData={product.product_data}
          // advantages={product.advantages}
          // disadvantages={product.disadvantages}
          // rating={this.props.product.meta.ratings}
          desc={product.description}
          // meta_description={product.meta_description}
          id={this.state.id}
        />
        {/*<ProductCarousel*/}
        {/*  title="خریداران این محصول این محصولات را نیز خرید اند"*/}
        {/*  more="/product/1"*/}
        {/*  fetch_url={*/}
        {/*    process.env.apiUrl + "/home_page/lists?type=newest_products"*/}
        {/*  }*/}
        {/*/>*/}
      </React.Fragment>
    );
  }
}
const mapStateToProps = store => {
  return {
    product: store.Product.product,
    breadcrumb: store.Breadcrumb
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProduct: id => {
      dispatch(getProduct(id));
    },
    getProductVariations: (product, variation) => {
      dispatch(getProductVariations(product, variation));
    },
    setLoading: data => {
      dispatch(setLoading(data));
    },
    show: id=>{
      dispatch(ProductAction.show(id))
    },
    addToCart:(data)=>{
      dispatch(OrderAction.addToCart(data))
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Product)
);
