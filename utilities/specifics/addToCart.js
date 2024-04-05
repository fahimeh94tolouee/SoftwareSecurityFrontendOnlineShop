import {CART} from "../../constants/storageKey";
import {CART as CART_URL} from "../../constants/urls";

export const addToCart = (id, qty) => {
  let cart = [];
  let pushStatus = true;
  if (localStorage.getItem(CART)) {
    cart = JSON.parse(localStorage.getItem(CART));
  }
  cart.filter(item => {
    if (item.id === id) {
      pushStatus = false;
    }
  });
  if (pushStatus) {
    cart.push({ id: id, quantity: qty });
  }
  localStorage.setItem(CART, JSON.stringify(cart));
}