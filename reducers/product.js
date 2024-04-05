import * as types from "../actions/actionTypes";

const DEFAULT_PRODUCT = {

};
const initialState = {
    loading:true,
    data:{},
    list:[],
    fetched:false,
    error:"",
    product:DEFAULT_PRODUCT,
    showLoading:false,
    showError:"",
    meta:{},
    variations:[],
}
const Product = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCT':
            return { ...state, ...action.payload }
        case types.GET_PRODUCT_LIST_REQUEST:
            return { ...state, loading: true, error: "" };
        case types.GET_PRODUCT_LIST_SUCCESS:
            return { ...state, list: action.data, loading: false, fetched: true };
        case types.GET_PRODUCT_LIST_FAILURE:
            return { ...state, loading: false, error: action.error, fetched: true };

        case types.SHOW_PRODUCT_REQUEST:
            return {
                ...state,
                product: DEFAULT_PRODUCT,
                showLoading: true,
                showError: ""
            };
        case types.SHOW_PRODUCT_SUCCESS:
            return { ...state, product: action.data, showLoading: false };
        case types.SHOW_PRODUCT_FAILURE:
            return { ...state, showLoading: false, showError: action.error };
        default:
            return state
    }
}

export default Product