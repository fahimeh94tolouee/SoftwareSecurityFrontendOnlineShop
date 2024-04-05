import { combineReducers } from "redux";
import {reducer as toastrReducer} from 'react-redux-toastr'
import User from "./user";
import HomepageInfo from "./homepageInfo";
import Menu from "./menu";
import CategoriesFilter from "./categoriesFilter";
import ProductList from "./productList";
import Breadcrumb from "./breadcrumb";
import Product from "./product";
import Comment from "./comment";
import Question from "./question";
import Initial from "./initial";
import Cart from "./cart";
import Order from"./order"
import Address from "./address";
import Favorites from './favorites';
import Notif from "./notif";
import Profile from "./profile";
import Compare from './compare'
import Auth from './auth';
export default combineReducers({
  User: User,
  HomepageInfo: HomepageInfo,
  Menu: Menu,
  CategoriesFilter: CategoriesFilter,
  ProductList: ProductList,
  Breadcrumb: Breadcrumb,
  Product: Product,
  Comment: Comment,
  Question: Question,
  Initial: Initial,
  Cart: Cart,
  Order:Order,
  Address: Address,
  Favorites:Favorites,
  Notif:Notif,
  Profile:Profile,
  Compare:Compare,
  toastr: toastrReducer,
  Auth:Auth
});
