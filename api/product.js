import Request from "../utilities/request";
import {LIST_API, PRODUCT_API} from "../constants/api";
// import { PAGE } from "../constants/filters";

const baseUrl = process.env.apiUrl;

export const getList = page_number => {
  return Request({
    method: "get",
    url: `${baseUrl}${PRODUCT_API}${LIST_API}`,
    // params: { [PAGE]: page_number },
    // needToken: true
  });
};

export const show = id => {
  return Request({
    method: "get",
    url: `${baseUrl}${PRODUCT_API}${id}/`,
    // needToken: true
  });
};