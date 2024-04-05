import React from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import { getCompare, setLoading } from "../actions/comapre";
import { getBreadcrumb } from "../actions/breadcrumb";
import { BreadcrumbBox } from "../styled_components/compare";
import Breadcrumb from "../components/lib/breadcrumb";
import ProductBox from "../components/compare/productBox";
import FeatureBox from "../components/compare/featureBox";
import SearchModal from "../components/compare/searchModal";
class Compare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      compare: this.props.index
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    let result = {};
    if (nextProps.compare !== prevState.compare) {
      result.compare = nextProps.compare;
      nextProps.setLoading({
        loading: false
      });
    }
    return result;
  }
  componentDidMount() {
    let url = this.props.router.asPath;
    url = url.replace("/compare/", "");
    let ids = url.split("/");
    let categoryId = ids[0];
    ids.shift();
    this.props.getBreadcrumb("category", categoryId);
    this.props.getCompare({
      category_id: categoryId,
      product_id: ids
    });
    this.setState({
      categoryId: categoryId
    });
  }
  removeOne(id) {
    let url = this.props.router.asPath;
    url = url.replace("/compare/", "");
    let ids = url.split("/");
    ids.splice(ids.indexOf(id.toString()), 1);
    ids = ids.join("/");
    this.props.router.replace("/compare/" + ids);
  }
  addProduct(id){
    this.setState({
      modalStatus: false
    });
    let url = this.props.router.asPath;
    url = url.replace("/compare/", "");
    let ids = url.split("/");
    ids.push(id);
    ids = ids.join("/");
    this.props.router.replace("/compare/" + ids);
  }
  breadcrumbView() {
    if (this.props.breadcrumb.items.length > 0) {
      return (
        <BreadcrumbBox>
          <Breadcrumb items={this.props.breadcrumb.items} type="category" />
          <div className="title-box">
            لیست مقایسه
            {
              this.props.breadcrumb.items[
                this.props.breadcrumb.items.length - 1
              ]["name"]
            }
          </div>
        </BreadcrumbBox>
      );
    }
  }
  modalView() {
    if (this.state.modalStatus) {
      return (
        <SearchModal
          id={this.state.categoryId}
          onSelect={this.addProduct.bind(this)}
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
    const { features, products } = this.props.compare;
    return (
      <div style={{ position: "relative" }}>
        {this.breadcrumbView()}
        <ProductBox
          products={products}
          removeOne={this.removeOne.bind(this)}
          openModal={() => {
            this.setState({
              modalStatus: true
            });
          }}
        />
        <FeatureBox products={products} features={features} />
        {this.modalView()}
      </div>
    );
  }
}
const mapStateToProps = store => {
  return {
    compare: store.Compare,
    breadcrumb: store.Breadcrumb
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCompare: data => {
      dispatch(getCompare(data));
    },
    setLoading: data => {
      dispatch(setLoading(data));
    },
    getBreadcrumb: (type, id) => {
      dispatch(getBreadcrumb(type, id));
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Compare)
);
