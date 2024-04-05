// import React from "react";
// import Axios from "axios/index";
// import { getToken, setToken, deleteCookie } from "./tokenManager";
// import {ACCESS_TOKEN} from "../constants/storageKey";
//
// const Request = config => {
//   const redirectLogin = async () => {
//     if (typeof window !== "undefined") {
//       await window.location.replace(
//         "/login?redirect=" + window.location.pathname
//       );
//     }
//   };
//   const Refresh = async stopRedirect => {
//     if (getToken("refreshToken")) {
//       await Axios({
//         method: "post",
//         url: process.env.apiUrl + "/oauth/token",
//         stopRedirect:stopRedirect,
//         data: {
//           grant_type: "refresh_token",
//           refresh_token: getToken("refreshToken"),
//           client_id: process.env.clientId,
//           client_secret: process.env.clientSecret
//         }
//       })
//         .then(response => {
//           setToken(response.data);
//         })
//         .catch(() => {
//           if (stopRedirect===false) {
//             redirectLogin();
//           }
//         });
//     } else {
//       if (stopRedirect===false) {
//         redirectLogin();
//       }
//     }
//   };
//   const removeTokens = async () => {
//     await deleteCookie(ACCESS_TOKEN);
//     // await deleteCookie("refreshToken");
//     await redirectLogin();
//   };
//
//   Axios.interceptors.request.use(
//     async function(config) {
//       if (config.needToken) {
//         if (!getToken(ACCESS_TOKEN)) {
//           await Refresh(config.stopRedirect || false);
//         }
//         Object.assign(config.headers, {
//           Authorization: "Bearer " + getToken(ACCESS_TOKEN)
//         });
//       }
//       return config;
//     },
//     function(error) {
//       // Do something with request error
//       return Promise.reject(error);
//     }
//   );
//
//   Axios.interceptors.response.use(
//     function(response) {
//       // Do something with response data
//       return response;
//     },
//     async function(error) {
//       if (error.response.status === 401) {
//         if (error.config.url !== process.env.apiUrl + "/oauth/token") {
//           await Refresh();
//           if (getToken(ACCESS_TOKEN)) {
//             Object.assign(error.config.headers, {
//               Authorization: "Bearer " + getToken(ACCESS_TOKEN)
//             });
//             return Axios.request(error.config);
//           }
//         } else {
//           removeTokens();
//         }
//       }
//       // Do something with response error
//       return Promise.reject(error);
//     }
//   );
//   return Axios.request(config);
// };
// export default Request;

import Axios from "axios/index";
import { getToken } from "./tokenManager";
import { deleteCookie } from "./tokenManager";
// import { appVersion } from "../constants";
import logout from "../utilities/logout";
import { ACCESS_TOKEN } from "../constants/storageKey";

const Request = config => {
  const needToken = config.needToken;
  const redirectLogin = () => {
    if (typeof window !== "undefined") {
      let href = window.location.href;
      href = href.replace("/login" + window.location.search, "");
      if (window.location.origin !== href) {
        window.location.replace("/?redirect=" + window.location.pathname);
      }
    }
  };
  const removeTokens = () => {
    deleteCookie(ACCESS_TOKEN);
    redirectLogin();
  };

  Axios.interceptors.request.use(
    async function(config) {
      // if (config.method === "get") {
      //   config.params = config.params
      //     ? { ...config.params, app_version: appVersion }
      //     : { app_version: appVersion };
      // } else {
      //   if (config.headers["Content-Type"] === "multipart/forms-data") {
      //     if (
      //       config.data instanceof FormData &&
      //       (!config.data.get || !config.data.get("app_version"))
      //     ) {
      //       config.data.append("app_version", appVersion);
      //     }
      //   } else {
      //     config.data = config.data
      //       ? { ...config.data, app_version: appVersion }
      //       : { app_version: appVersion };
      //   }
      // }
      if (needToken && getToken(ACCESS_TOKEN)) {
        Object.assign(config.headers, {
          Authorization: "Bearer " + getToken(ACCESS_TOKEN)
        });
      } else if (needToken && !getToken(ACCESS_TOKEN)) {
        removeTokens();
      }
      return config;
    },
    function(error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  Axios.interceptors.response.use(
    function(response) {
      return response;
    },
    function(error) {
      if (error.response) {
        const errorRes = error.response;
        if (errorRes.status === 401) {
          // token expired
          removeTokens();
        } else if (errorRes.status === 404) {
          // not found
          // if (error.response.data.project_not_found) {
          //   // project not found
          //   if (getProjectRelatedLocalStorage()) {
          //     removeProjectRelatedLocalStorage();
          //     window.location.reload();
          //   }
          // }
        }
        // else if (errorRes.status === 403) {
        //   if (errorRes.data.user_not_verified) {
        //     logout();
        //   } else if (
        //     errorRes.data.project_status_expired ||
        //     errorRes.data.user_limit_exceeded
        //   ) {
        //     // removeProjectRelatedLocalStorage();
        //     window.location.reload();
        //   }
        // }
      }
      return Promise.reject(error);
    }
  );
  return Axios.request(config);
};
export default Request;
