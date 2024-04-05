import Request from "../utilities/request";
import { setToken } from "../utilities/tokenManager";
import {toastr} from 'react-redux-toastr'
import {SetMessage} from "../utilities/specifics/errorMessages";
import * as types from "./actionTypes";
import {EMAIL} from "../constants/storageKey";
import {LOGIN} from "../constants/urls";
export const setUserData = data => ({
  type: "SET_USER_DATA",
  payload: data
});

export const registerRequest = (data) =>{
  return{
    type: types.REGISTER_REQUEST,
    data: data
  }
};
export const registerSuccess = () =>{
  return{
    type: types.REGISTER_SUCCESS,
  }
};

export const registerFailure = () =>{
  return{
    type: types.REGISTER_FAILURE,
  }
};

export const verifyRequest = (data) =>{
  return{
    type: types.VERIFY_REQUEST,
    data: data
  }
};
export const verifySuccess = () =>{
  return{
    type: types.VERIFY_SUCCESS,
  }
};
export const verifyFailure = () =>{
  return{
    type: types.VERIFY_FAILURE,
  }
};

export const loginRequest = (data) =>{
  return{
    type: types.LOGIN_REQUEST,
    data: data
  }
};
export const loginSuccess = () =>{
  return{
    type: types.LOGIN_SUCCESS,
  }
};
export const loginFailure = () =>{
  return{
    type: types.LOGIN_FAILURE,
  }
};
// export const doLogin = (username, password, remember) => {
//   return dispatch => {
//     Request({
//       url: process.env.apiUrl + "/oauth/login",
//       method: "post",
//       data: {
//         grant_type: "password",
//         client_id: process.env.clientId,
//         client_secret: process.env.clientSecret,
//         username: username,
//         password: password
//       }
//     })
//       .then(response => {
//         setToken(response.data.token);
//         dispatch(
//           setUserData({
//             token: response.data.token,
//             data: response.data.user
//           })
//         );
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
// };
// export const register = (username, password) => {
//   return dispatch => {
//     Request({
//       url: process.env.apiUrl + "/auth/register/",
//       method: "post",
//       data: {
//         client_id: process.env.clientId,
//         client_secret: process.env.clientSecret,
//         email: username,
//         password: password,
//         scope: "*"
//       }
//     })
//       .then(response => {
//         setToken(response.data.token);
//         dispatch(
//           setUserData({
//             token: response.data.token,
//             data: response.data.data
//           })
//         );
//         // window.location.replace("/verify");
//       })
//       .catch(error => {
//         SetMessage(error, true)
//       });
//   };
// };
export const resendCode = email => {
  return dispatch => {
    Request({
      method: "post",
      url: process.env.apiUrl + "/auth/resend-otp/",
      data: {
        email: email
      },
      needToken:true
    })
      .then(() => {})
      .catch(error => {
        console.log(error);
      });
  };
};
// export const doVerify = otp => {
//   return async dispatch => {
//     Request({
//       url: process.env.apiUrl + "/sms/verify",
//       method: "post",
//       needToken: true,
//       data: {
//         otp: otp
//       }
//     })
//       .then(response => {
//         window.location.replace("./");
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
// };

export const doForget = mobile => {
  return async dispatch => {
    Request({
      url: process.env.apiUrl + "/resetPassword/create",
      method: "post",
      data: {
        mobile: mobile
      }
    })
      .then(response => {
        sessionStorage.setItem("verify_phone", mobile);
        window.location.replace("./resetverify");
      })
      .catch(error => {
        console.log(error);
      });
  };
};
export const resetToken = (mobile, otp) => {
  return async dispatch => {
    Request({
      url: process.env.apiUrl + "/resetPassword/find",
      method: "post",
      data: {
        mobile: mobile,
        otp: otp
      }
    })
      .then(response => {
        sessionStorage.setItem("reset_token", response.data.data.token);
        window.location.replace("./resetpassword");
      })
      .catch(error => {
        console.log(error);
      });
  };
};
export const resetPassword = (data, url="/auth/reset-password/") =>{
  return async dispatch => {
    Request({
      url: process.env.apiUrl + url,
      method: "post",
      data: data
    })
        .then(response => {
          sessionStorage.removeItem('reset_token');
          sessionStorage.removeItem(EMAIL);
          window.location.replace(LOGIN);
        })
        .catch(error => {
          console.log(error);
        });
  };
}
