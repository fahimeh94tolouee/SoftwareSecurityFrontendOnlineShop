const initialState = {
    items:[],
    meta:{}
};
const Favorites = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FAVORITES':
            return { ...state, ...action.payload };
        default:
            return state
    }
};

export default Favorites;