import React, { Component } from "react";
import { connect } from "react-redux";
import Router, { withRouter } from "next/router";
import qs from "qs";

import { getCategoriesFilter, setLoading } from "../actions/categoriesFilter";
import { getProductList } from "../actions/productList";
import { getBreadcrumb } from "../actions/breadcrumb";

import { Row } from "styled-bootstrap-grid";
import { ListBox } from "../styled_components/categories";
import FilterBox from "../components/categories/filtersBox";

import FilteredBox from "../components/lib/filteredBox";
import Breadcrumb from "../components/lib/breadcrumb";
import ListSort from "../components/lib/listSort";
import ProductBox from "../components/lib/productBox";
import ReactPaginate from "react-paginate";

class Categories extends Component {
  static async getInitialProps({ store, query, asPath }) {
    let urlQuery = "";
    if (asPath.indexOf("?") >= 0) {
      urlQuery = asPath.replace(asPath.substring(0, asPath.indexOf("?")), "");
    }
    await store.dispatch(getCategoriesFilter(query.slug));
    await store.dispatch(getProductList(query.slug, urlQuery));
    await store.dispatch(getBreadcrumb("category", query.slug));
    return { slug: query.slug };
  }
  state = {
    slug: this.props.slug
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    let result = {};
    if (nextProps.slug !== prevState.slug) {
      result.slug = nextProps.slug;
    }
    if (nextProps.filters !== prevState.filters) {
      result.filters = nextProps.filters;
      result.filtered = Categories.makeFiltersState(nextProps.filters.items);
    }
    if (nextProps.products !== prevState.products) {
      result.products = nextProps.products;
      nextProps.setLoading({
        loading: false
      });
    }
    if (nextProps.breadcrumb !== prevState.breadcrumb) {
      result.breadcrumb = nextProps.breadcrumb;
    }

    return result;
  }
  /**
   * Make state object for filtered items
   * @param {Object} items
   * @return {Object}
   */
  static makeFiltersState(items) {
    const filtered = {};
    items.forEach(item => {
      if (item.type === "colors" || item.type === "checkbox") {
        filtered[item.slug] = [];
      } else if (item.type === "boolean") {
        filtered[item.slug] = item.status;
      }
    });
    return filtered;
  }
  /**
   * Parse url and decode values
   * @param {String} url
   */
  parseUrl(url) {
    return qs.parse(url, {
      encode: false,
      decoder(str, decoder, charset) {
        const strWithoutPlus = str.replace(/\+/g, " ");
        if (charset === "iso-8859-1") {
          return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
        }
        if (/^(\d+|\d*\.\d+)$/.test(str)) {
          return parseFloat(str);
        }
        const keywords = {
          true: true,
          false: false,
          null: null,
          undefined
        };
        if (str in keywords) {
          return keywords[str];
        }
        try {
          return decodeURIComponent(strWithoutPlus);
        } catch (e) {
          return strWithoutPlus;
        }
      }
    });
  }
  componentDidMount() {
    let filtered = this.state.filtered;
    let route = this.props.router;
    let urlQuery = {};
    if (route.asPath.indexOf("?") >= 0) {
      let url = route.asPath.replace(
        route.asPath.substring(0, route.asPath.indexOf("?")) + "?",
        ""
      );
      urlQuery = this.parseUrl(url);
      delete urlQuery.page;
    }
    filtered = Object.assign(filtered, urlQuery);
    this.setState({
      filtered: filtered
    });
    this.props.setLoading({
      loading: false
    });
  }
  /**
   * Handle  filter changes
   * @param {String} type
   * @param {String} slug
   * @param {String,Array} value
   */
  onChange(type, slug, value) {
    const filtered = this.state.filtered;
    switch (type) {
      case "boolean":
        filtered[slug] = !filtered[slug];
        break;
      case "checkbox":
        if (filtered[slug].indexOf(value) < 0) {
          filtered[slug].push(value);
        } else {
          filtered[slug].splice(filtered[slug].indexOf(value), 1);
        }
        break;
      case "range":
        if (filtered[slug] === undefined) {
          filtered[slug] = {
            min: 0,
            max: 1
          };
        }
        filtered[slug]["min"] = value[0];
        filtered[slug]["max"] = value[1];
        break;
      case "search_box":
        if (value === null || value === "") {
          delete filtered[slug];
        } else {
          filtered[slug] = value;
        }
      default:
        break;
    }
    this.setState(
      {
        filtered: filtered
      },
      () => {
        this.changeUrl(filtered);
      }
    );
  }
  /**
   * Create filters jsx template
   * @return {jsx}
   */
  makeFiltersView() {
    const filters = this.state.filters;
    return filters.items.map((item, key) => (
      <FilterBox
        loading={this.props.loading}
        filtered={this.state.filtered}
        filters={this.state.filters.items}
        data={item}
        key={key}
        onChange={this.onChange.bind(this)}
        currentCategory={this.state.slug}
      />
    ));
  }
  /**
   * Create list jsx template
   * @return {jsx}
   */
  makeListView() {
    return (
      <React.Fragment>
        <div className="breadcrumb-box">
          <Breadcrumb items={this.state.breadcrumb.items} type="category" />
          <div>
            <span className="total">
              <span>{this.state.products.meta.total}</span>
              تعداد محصولات در این دسته
            </span>
          </div>
        </div>
        <div className="list-box">
          <ListSort
            active={this.state.products.sort}
            onChange={sort => {
              this.changeUrl({ sort: sort }, false);
            }}
          />
          <ul className="list">
            {this.state.products.items.map(product => (
              <ProductBox product={product} key={product.id} />
            ))}
          </ul>
          <div className="pagination">
            <ReactPaginate
              pageCount={this.state.products.meta.last_page}
              pageRangeDisplayed={4}
              marginPagesDisplayed={2}
              initialPage={this.state.products.meta.current_page - 1}
              previousLabel={<i className="next" />}
              nextLabel={<i className="back" />}
              onPageChange={this.paginate.bind(this)}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
  /**
   * Change page url & get products
   * @param {Object} params
   */
  changeUrl(params = {}, reset = true) {
    let route = this.props.router;
    let urlQuery = {};
    if (reset) {
      if (route.asPath.indexOf("?") >= 0) {
        let url = route.asPath.replace(
          route.asPath.substring(0, route.asPath.indexOf("?")) + "?",
          ""
        );
        url = this.parseUrl(url);
        if (url.sort !== undefined) {
          urlQuery.sort = url.sort;
        }
      }
    } else {
      if (route.asPath.indexOf("?") >= 0) {
        let url = route.asPath.replace(
          route.asPath.substring(0, route.asPath.indexOf("?")) + "?",
          ""
        );
        urlQuery = this.parseUrl(url);
      }
    }

    urlQuery = Object.assign(urlQuery, params);
    Router.replace(
      `/categories?slug=${this.state.slug}`,
      `/categories/${this.state.slug}/?${qs.stringify(urlQuery, {
        encode: false
      })}`,
      { shallow: true }
    );
    this.props.getProducts(
      this.state.slug,
      "?" + qs.stringify(urlQuery, { encode: false })
    );
  }
  /**
   * Handle paginate
   * @param {Integer} page
   */
  paginate(page) {
    if (this.state.products.meta.current_page !== page.selected + 1) {
      this.changeUrl({ page: page.selected + 1 }, false);
    }
  }

  /**
   * remove single filter
   * @param {Object} page
   */
  removeFilter(data) {
    let filtered = this.state.filtered;
    switch (data.type) {
      case "search_box":
        delete filtered[data.slug];
        break;
      case "checkbox":
        if (Array.isArray(filtered[data.slug])) {
          filtered[data.slug].splice(
            filtered[data.slug].indexOf(data.value),
            1
          );
        }
        break;
      case "boolean":
        delete filtered[data.slug];
        break;
      case "range":
        delete filtered[data.slug];
        break;
      default:
        break;
    }
    this.setState(
      {
        filtered: filtered
      },
      () => {
        this.changeUrl(filtered);
      }
    );
  }
  /**
   * Reset all filters
   */
  resetFilter() {
    let filtered = Categories.makeFiltersState(this.state.filters.items);
    this.setState(
      {
        filtered: filtered
      },
      () => {
        this.changeUrl(filtered);
      }
    );
  }
  render() {
    return (
      <div className="container">
        <ListBox>
          <Row>
            <div className="filters-row">
              <FilteredBox
                filters={this.state.filters.items}
                filtered={this.state.filtered}
                removeFilter={this.removeFilter.bind(this)}
                resetFilter={this.resetFilter.bind(this)}
              />
              {this.makeFiltersView()}
            </div>
            <div className="products-row">{this.makeListView()}</div>
          </Row>
        </ListBox>
      </div>
    );
  }
}
const mapStateToProps = store => {
  return {
    filters: store.CategoriesFilter,
    products: store.ProductList,
    breadcrumb: store.Breadcrumb,
    loading: store.Initial.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProducts: (slug, params) => {
      dispatch(getProductList(slug, params));
    },
    setLoading: data => {
      dispatch(setLoading(data));
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Categories)
);
