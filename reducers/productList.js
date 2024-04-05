const initialState = {
    loading:true,
    items:[],
    meta:{}
}
const ProductList = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCT_LIST':
            return { ...state, ...action.payload }
        default:
            return state
    }
}

export default ProductList