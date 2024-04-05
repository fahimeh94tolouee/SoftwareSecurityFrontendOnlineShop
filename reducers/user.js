import getUserIdentification from "../utilities/specifics/getUserIdentification";
import * as types from "../actions/actionTypes";

const initialState = {
    token:false,
    data:null,
    loading: false,
    changePasswordProcessing:false,
    error: "",
    processing:false
};
const User = (state = initialState, action) => {
    let previousData = {},
      fullName = "";
    switch (action.type) {
        case 'SET_USER_DATA':
            return { ...state, ...action.payload };

        case types.GET_USER_DATA:
            return {...state, loading: true, data: null, error: "" }
        case types.GET_USER_DATA_SUCCESS:
            previousData = state.data ? { ...state.data } : {};
            fullName = getUserIdentification(action.data);
            return {
                ...state,
                loading: false,
                data: { ...previousData, ...action.data, fullName: fullName }
            }
        case types.GET_USER_DATA_FAILURE:
            return { ...state, loading: false, error: action.error };

        case types.CHANGE_USER_PASSWORD:
            return { ...state, changePasswordProcessing: true };
        case types.CHANGE_USER_PASSWORD_SUCCESS:
            return { ...state, changePasswordProcessing: false };
        case types.CHANGE_USER_PASSWORD_FAILURE:
            return { ...state, changePasswordProcessing: false };

        case types.UPDATE_USER_DATA:
            return { ...state, processing: true };
        case types.UPDATE_USER_DATA_SUCCESS:
            previousData = state.data ? { ...state.data } : {};
            fullName = getUserIdentification(action.data);
            return {
                ...state,
                processing: false,
                data: { ...previousData, ...action.data, fullName: fullName }
            };
        case types.UPDATE_USER_DATA_FAILURE:
            return { ...state, processing: false };
        default:
            return state
    }
};

export default User