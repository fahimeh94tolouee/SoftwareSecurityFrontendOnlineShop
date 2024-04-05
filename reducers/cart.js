const initialState = {
    items:[],
    meta:{},
};
const Cart = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CART':
            return { ...state, ...action.payload }
        default:
            return state
    }
}

export default Cart;