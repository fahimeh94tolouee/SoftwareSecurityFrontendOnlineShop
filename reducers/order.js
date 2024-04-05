import {ADD_TO_CART_FAILURE, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS} from "../actions/actionTypes";

const initialState = {
    items:[],
    order:{},
    processing:false,
    cartItems:[]
};
const Order = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ORDER':
            return { ...state, ...action.payload };
        case ADD_TO_CART_REQUEST:
            return {...state, processing:true};
        case ADD_TO_CART_SUCCESS:
            return {...state, processing:false, cartItems: action.data};
        case ADD_TO_CART_FAILURE:
            return {...state, processing:false};
        default:
            return state
    }
}

export default Order;