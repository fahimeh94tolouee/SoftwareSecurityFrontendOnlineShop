import React from "react";
import { Box } from "../../styled_components/compare/searchModal";
import Reguest from "../../utilities/request";
import Select from "react-select";
class SearchModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      products: [],
      keyword: "",
      brand: { label: "تمامی برندها", value: "" }
    };
  }

  componentDidMount() {
    this.getProducts();
    this.getBrands();
    if (typeof window !== "undefined") {
      window.document.body.style.overflow = "hidden";
    }
  }
  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.document.body.style.overflow = "auto";
    }
  }
  getProducts() {
    this.setState({
      loading: true
    });
    Reguest({
      url: process.env.apiUrl + "/categories/" + this.props.id + "/search",
      method: "get",
      params: {
        text: this.state.keyword,
        brand_id: this.state.brand.value
      }
    })
      .then(response => {
        this.setState({
          products: response.data.data,
          loading: false
        });
      })
      .catch(error => {});
  }
  async getBrands() {
    let brands = [{ label: "تمامی برندها", value: "" }];
    await Reguest({
      url: process.env.apiUrl + "/categories/" + this.props.id + "/brands",
      method: "get"
    })
      .then(response => {
        response.data.data.forEach(item => {
          brands.push({ label: item.name, value: item.id });
        });
      })
      .catch(error => {});
    this.setState({
      brands: brands
    });
  }
  onSearch(type, value) {
    this.setState(
      {
        [type]: value
      },
      () => {
        this.getProducts();
      }
    );
  }
  contentView() {
    if (this.state.loading) {
      return (
        <div className="loading">
          <img src="/static/images/mallenogif.gif" />
        </div>
      );
    } else {
      if (this.state.products.length <= 0) {
        return <div className="empty">محصولی یافت نشد</div>;
      } else {
        return this.state.products.map(product => (
          <div
            className="product"
            key={product.id}
            onClick={() => {
              this.props.onSelect(product.id);
            }}
          >
            <img src={product.main_image.path} />
            <div className="title">{product.name}</div>
          </div>
        ));
      }
    }
  }
  render() {
    return (
      <Box>
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
          <div className="top">
            <div className="search-area">
              <div className="input-box">
                <input
                  type="text"
                  placeholder="جستجو در محصولات..."
                  onChange={e => {
                    this.setState({
                      keyword: e.target.value
                    });
                    if (e.target.value === "") {
                      this.onSearch("keyword", "");
                    }
                  }}
                  onKeyPress={e => {
                    if (e.charCode === 13) {
                      this.onSearch("keyword", e.target.value);
                    }
                  }}
                />
                <div
                  className="but"
                  onClick={() => {
                    this.onSearch("keyword", this.state.keyword);
                  }}
                >
                  <i className="icon-search" />
                </div>
              </div>
              <div className="select-box">
                <Select
                  options={this.state.brands}
                  value={this.state.brand}
                  onChange={data => {
                    this.onSearch("brand", data);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="content">{this.contentView()}</div>
        </div>
      </Box>
    );
  }
}
export default SearchModal;
