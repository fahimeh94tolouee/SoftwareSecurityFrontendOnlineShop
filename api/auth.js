import Request from "../utilities/request";
// import uniqueDeviceId from "../lib/generateUniqueDeviceId";
// import {
//   browserName,
//   fullBrowserVersion,
//   osName,
//   osVersion
// } from "react-device-detect";
import {
  AUTH_CHECK_REFERENCE_CODE_API,
  AUTH_LOGIN_API,
  AUTH_REGISTER_API,
  AUTH_RESET_PASSWORD_API,
  AUTH_VERIFY_API,
  // CHECK_API,
  // INIT_API,
  // RESET_API,
  // UPDATE_INFO_API,
  // USERS_API
} from "../constants/api";

const baseUrl = process.env.apiUrl;
// const platform = process.env.REACT_APP_PLATFORM_ID;

// const logData = {
//   platform: platform
// };
// const device_info = {
//   serial: uniqueDeviceId(),
//   platform: platform,
//   os_version: `${osName}_${osVersion}`,
//   model: `${browserName}_${fullBrowserVersion}`
// };

export const login = data => {
  // const params = Object.assign(logData, data);

  return Request({
    method: "post",
    url: `${baseUrl}${AUTH_LOGIN_API}`,
    // data: { ...data, device_info: device_info }
    data: data
  });
};

export const register = data => {
  // const params = Object.assign(logData, data);

  return Request({
    method: "post",
    url: `${baseUrl}${AUTH_REGISTER_API}`,
    data:data
    // data: {
    //   ...params,
    //   device_info: device_info
    // }
  });
};

// export const checkReferenceCode = phone_number => {
//   return Request({
//     method: "get",
//     url: `${baseUrl}/${AUTH_CHECK_REFERENCE_CODE_API}/${phone_number}`
//   });
// };
//
export const verify = data => {
  return Request({
    method: "post",
    url: `${baseUrl}${AUTH_VERIFY_API}`,
    needToken:true,
    data: data
  });
};
//
// export const forget = data => {
//   return Request({
//     method: "post",
//     url: `${baseUrl}/${AUTH_RESET_PASSWORD_API}/${INIT_API}`,
//     data: data
//   });
// };
//
// export const forgetVerify = data => {
//   return Request({
//     method: "post",
//     url: `${baseUrl}/${AUTH_RESET_PASSWORD_API}/${CHECK_API}`,
//     data: data
//   });
// };
//
// export const reset = data => {
//   const params = Object.assign(logData, data);
//   return Request({
//     method: "post",
//     url: `${baseUrl}/${AUTH_RESET_PASSWORD_API}/${RESET_API}`,
//     data: params
//   });
// };
//
// export const updateInfo = data => {
//   return Request({
//     method: "post",
//     url: `${baseUrl}/${USERS_API}/${UPDATE_INFO_API}`,
//     needToken: true,
//     data: data
//   });
// };
