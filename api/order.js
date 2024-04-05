import Request from "../utilities/request";
import {ADD_TO_CART_API, ORDER_API} from "../constants/api";

const baseUrl = process.env.apiUrl;

export const addToCart = (data) => {
  return Request({
    method: "post",
    url: `${baseUrl}${ORDER_API}${ADD_TO_CART_API}`,
    needToken: true,
    data:data
  });
};