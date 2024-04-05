import Request from "../utilities/request";
import {PRODUCT_API, QUESTION_API, QUESTION_LIST_API} from "../constants/api";

const baseUrl = process.env.apiUrl;

export const getList = (productId) => {
  return Request({
    method: "get",
    url: `${baseUrl}${PRODUCT_API}${productId}${QUESTION_LIST_API}`,
  });
};

export const store = (productId, data) => {
  return Request({
    method: "post",
    url: `${baseUrl}${PRODUCT_API}${productId}${QUESTION_API}`,
    needToken: true,
    data: data
  });
};

export const update = (productId, id, data) => {
  return Request({
    method: "put",
    url: `${baseUrl}${PRODUCT_API}${productId}${QUESTION_API}${id}/`,
    needToken: true,
    data: data
  });
};
