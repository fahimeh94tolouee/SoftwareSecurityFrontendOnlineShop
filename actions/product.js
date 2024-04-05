import Request from '../utilities/request';
import * as types from "./actionTypes";
export const setProduct = data => ({
    type: 'SET_PRODUCT',
    payload: data
});
export const setLoading = data=>({
    type: 'SET_INITIAL',
    payload: data,
});

export const getList = pageNumber => {
    return {
        type: types.GET_PRODUCT_LIST_REQUEST,
        pageNumber
    };
};

export const getListSuccess = data => {
    return {
        type: types.GET_PRODUCT_LIST_SUCCESS,
        data: data
    };
};
export const getListFailure = error => {
    return {
        type: types.GET_PRODUCT_LIST_FAILURE,
        error: error
    };
};

export const show = id => {
    return {
        type: types.SHOW_PRODUCT_REQUEST,
        id
    };
};

export const showSuccess = data => {
    return {
        type: types.SHOW_PRODUCT_SUCCESS,
        data: data
    };
};
export const showFailure = error => {
    return {
        type: types.SHOW_PRODUCT_FAILURE,
        error: error
    };
};

export const getProduct = (id) => {

    return async (dispatch) => {
        dispatch(setLoading({
            loading:true
        }));
        await Request({
            url: process.env.apiUrl + '/products/' + id,
            method: 'get',
        }).then(response => {
            dispatch(setProduct({
                data: response.data.data,
                meta: response.data.meta,
                variations: response.data.meta.product_variations,
            }))
        }).catch(error => {
        })
    }
};

export const getProductVariations = (product, variation) => {

    return async (dispatch) => {
        dispatch(setProduct({
            loading: true
        }));
        await Request({
            url: process.env.apiUrl + '/products/' + product + '/variations/types/' + variation,
            method: 'get',
        }).then(response => {
            dispatch(setProduct({
                loading: false,
                variations: response.data.data,
            }))
        }).catch(error => {
        })
    }
};