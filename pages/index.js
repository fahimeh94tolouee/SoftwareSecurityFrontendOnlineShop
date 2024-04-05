import React, { Component } from "react";
import { connect } from "react-redux";
import { getHomepageInfo, setLoading } from "../actions/homepageInfo";
import { ProductAction } from "../actions";
import FullscreenCarousel from "../components/homeScreen/fullscreenCarousel";
import BannerBox from "../components/homeScreen/bannerBox";
import ProductBannerCarousel from "../components/homeScreen/productBannerCarousel";
import ProductCarousel from "../components/homeScreen/productCarousel";
import BrandCarousel from "../components/homeScreen/brandCarousel";
import FullscreenBanner from "../components/homeScreen/fullscreenBanner";
import Link from "next/link";
import {ProductCard, ProductListContainer, ProductRow} from "../styled_components/lib/productCarousel";
import {PRODUCT} from "../constants/urls";
import {CATEGORY_TYPES, PRODUCTS_PER_ROW_IN_MAIN_PAGE} from "../constants/others";
import {chunkArray} from "../utilities/chunkArray";

class Index extends Component {
  static async getInitialProps({ store, query }) {

    // await store.dispatch(getHomepageInfo());
    store.dispatch(ProductAction.getList());
  }
  MakeView() {

    return this.props.homeInfo.items.map((item, key) => {
      switch (item.type) {
        case "FullscreenCarousel":
          return <FullscreenCarousel items={item.items} key={key} />;
        case "BannerBox":
          return <BannerBox items={item.items} key={key} />;
        case "ProductBannerCarousel":
          return (
            <ProductBannerCarousel
              title={item.title}
              more={item.more}
              items={item.items}
              key={key}
            />
          );
        case "ProductCarousel":
          return (
            <ProductCarousel
              title={item.title}
              more={item.more}
              fetch_url={item.fetch_url}
              key={key}
            />
          );
        case "BrandCarousel":
          return <BrandCarousel items={item.items} key={key} />;
        case "FullscreenBanner":
          return <FullscreenBanner items={item.items} key={key} />;
        default:
          return null;
      }
    });
  }

  ProductList(){
    const{productList} = this.props;
    const productChunks = chunkArray(productList, PRODUCTS_PER_ROW_IN_MAIN_PAGE);
    return productChunks.map((chunk, key)=>{
      return (
        <ProductRow key={key}>
          {chunk.map((item)=>{
            return(
              <ProductCard key={item.id} categoryType={CATEGORY_TYPES.indexOf(item.category)}>
                <Link
                  as={`${PRODUCT}/${item.id}`}
                  href={`${PRODUCT}?id=${item.id}`}
                >
                  <div className="slide-in">
                    <div className="img-box">
                      <img src={`${process.env.apiUrl}/${item.image_path}`}  alt={item.type}/>
                    </div>
                    <div className="title">{item.title}</div>
                    <div className="detail">
                      <div className="category">{item.type}</div>
                      <div className="price">
                        {item.price}
                        <span className="currency"> $</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ProductCard>
            )
          })}
        </ProductRow>
      )
    })
  }
  componentDidMount() {
    const{fetched} = this.props;
    // if (!this.props.homeInfo.cache) {
    //   this.props.getHomepageInfo();
    // }
    if (!fetched){
      this.props.getList()
    }
    this.props.setLoading({
      loading: false
    });

  }
  render() {
    // return this.MakeView();
    return(<ProductListContainer>
      {this.ProductList()}
    </ProductListContainer>)
    // return ;
  }
}

const mapStateToProps = store => {
  return {
    homeInfo: store.HomepageInfo,
    productList: store.Product.list,
    fetched: store.Product.fetched
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getHomepageInfo: () => {
      dispatch(getHomepageInfo());
    },
    setLoading: data => {
      dispatch(setLoading(data));
    },
    getList:(pageNumber)=>{
      dispatch(ProductAction.getList(pageNumber))
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
