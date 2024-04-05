import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { Row, Col } from "styled-bootstrap-grid";
import {
  SideBar,
  BlueBut,
  GreyBut,
  Content,
  ModuleBox
} from "../styled_components/layouts/profile";
import { getProfileInitial } from "../actions/profile";
import ProductCarousel from "../components/homeScreen/productCarousel";
import logout from "../utilities/logout";
import {
  ADDRESSES,
  ANNOUNCEMENTS,
  REVIEWS,
  INFORMATION,
  ORDERS,
  PROFILE,
  WISHLIST,
  RESET_PASSWORD
} from "../constants/urls";

const links = [
  { path:`${PROFILE}${INFORMATION}`, title: "Personal Information", icon: "icon-user" },
  { path: `${PROFILE}${ORDERS}`, title: "Orders", icon: "icon-box-3" },
  {
    path: `${PROFILE}${WISHLIST}`,
    title: "Wishlist",
    icon: "icon-favorite"
  },
  {
    path: `${PROFILE}${REVIEWS}`,
    title: "Reviews and Ratings",
    icon: "icon-ophthalmology"
  },
  { path: `${PROFILE}${ADDRESSES}`, title: "Addresses", icon: "icon-address" },
  {
    path: `${PROFILE}${ANNOUNCEMENTS}`,
    title: "Announcements",
    icon: "icon-bell"
  }
];
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData
    };
  }

  componentDidMount() {
    this.props.getProfileInitial();
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    let result = {};
    if (nextProps.userData !== prevState.userData) {
      result.userData = nextProps.userData;
      nextProps.getProfileInitial();
    }
    // if (nextProps.userData.data) {
    //   if (!nextProps.userData.data.is_active) {
    //     Router.push("/verify");
    //   }
    // }
    return result;
  }
  initialView() {
    let items = this.props.initial;
    return items.map((item, index) => {
      switch (item.type) {
        case "banner":
          return (
            <Row key={index}>
              {item.items.map(banner => (
                <Col col={banner.col} key={banner.id}>
                  <div className="banner">
                    <a href={banner.link.url}>
                      <img src={banner.image} alt="" />
                    </a>
                  </div>
                </Col>
              ))}
            </Row>
          );
        case "ProductCarousel":
          return (
            <ProductCarousel
              key={index}
              title={item.title}
              more={item.more}
              fetch_url={item.fetch_url}
            />
          );
        default:
          return null;
      }
    });
  }
  render() {
    const user = this.state.userData;
    if (!user) {
      return <div />;
    }
    return (
      <div className="container">
        <Row>
          <Col col={3}>
            <SideBar>
              <div className="user-data">
                <div className="name">
                  <span>
                    {user.fullName}
                  </span>
                  <span className="phone">{user.email}</span>
                </div>
                <Link href={PROFILE}>
                  <div className="but">
                    <i className="icon-next-1" />
                  </div>
                </Link>
              </div>
              <ul className="links">
                {links.map((item, index) => (
                  <li
                    className={this.props.path === item.path ? "active" : ""}
                    key={index}
                  >
                    <Link href={item.path}>
                      <a>
                        <i className={item.icon} />
                        <span>{item.title}</span>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </SideBar>
            <Link href={RESET_PASSWORD}>
              <BlueBut>Change Password</BlueBut>
            </Link>
            <GreyBut
              onClick={logout}
            >
              Logout
            </GreyBut>
          </Col>
          <Col col={9}>
            <Content>{this.props.children}</Content>
          </Col>
        </Row>
        <ModuleBox>{this.initialView()}</ModuleBox>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    initial: store.Profile.initial,
    userData: store.User.data,
    loading: store.User.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProfileInitial: () => {
      dispatch(getProfileInitial());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
