import { toastr } from "react-redux-toastr";

export const CheckIsExist = error => {
  return (
    error.response &&
    error.response.data &&
    error.response.data.message &&
    Array.isArray(error.response.data.message)
  );
};

export const SetMessage = (error, toast) => {
  let message = "";
  if (!error.response && error.message === "Network Error") {
    message = [
      "Unable to access the server. Please check your internet connection and try again later."
    ];
  } else if (CheckIsExist(error)) {
    message = error.response.data.message;
  } else {
    message = [
      "An error occurred while fetching data from the server. Please try again later."
    ];
  }
  if (toast) {
    message.forEach(message => {
      toastr.error(" ", message.toString());
    });
  }
  return message;
};
