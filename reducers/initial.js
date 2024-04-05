const initialState = {
    cache: false,
    loading:false,
    items:[]
};
const Initial = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INITIAL':
            return { ...state, ...action.payload };
        default:
            return state
    }
};

export default Initial