import * as types from "../actions/actionTypes";
const initialState = {
  loading: false,
  // is_checking_reference_code: false,
  // message: "",
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return { ...state, loading: true };
    case types.LOGIN_SUCCESS:
      return { ...state, loading: false };
    case types.LOGIN_FAILURE:
      return { ...state, loading: false };

    // case types.FORGET_REQUEST:
    //   return { ...state, loading: true };
    // case types.FORGET_SUCCESS:
    //   return { ...state, loading: false };
    // case types.FORGET_FAILURE:
    //   return { ...state, loading: false };

    case types.REGISTER_REQUEST:
      return { ...state, loading: true };
    case types.REGISTER_SUCCESS:
      return { ...state, loading: false };
    case types.REGISTER_FAILURE:
      return { ...state, loading: false };

    // case types.REFERENCE_CODE_REQUEST:
    //   return { ...state, is_checking_reference_code: true, message: "", isValid:"" };
    // case types.REFERENCE_CODE_SUCCESS:
    //   return { ...state, is_checking_reference_code: false, message: action.payload, isValid: true};
    // case types.REFERENCE_CODE_FAILURE:
    //   return { ...state, is_checking_reference_code: false, message: action.payload, isValid: false };

    // case types.RESET_PASSWORD_REQUEST:
    //   return { ...state, loading: true };
    // case types.RESET_PASSWORD_SUCCESS:
    //   return { ...state, loading: false };
    // case types.RESET_PASSWORD_FAILURE:
    //   return { ...state, loading: false };

    case types.VERIFY_REQUEST:
      return { ...state, loading: true };
    case types.VERIFY_SUCCESS:
      return { ...state, loading: false };
    case types.VERIFY_FAILURE:
      return { ...state, loading: false };
    //
    // case types.FORGET_VERIFY_REQUEST:
    //   return { ...state, loading: true };
    // case types.FORGET_VERIFY_SUCCESS:
    //   return { ...state, loading: false };
    // case types.FORGET_VERIFY_FAILURE:
    //   return { ...state, loading: false };

    default:
      return state;
  }
};

export default Auth;
