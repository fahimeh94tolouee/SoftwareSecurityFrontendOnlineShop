const initialState = {
    cache: false,
    items:[]
};
const HomepageInfo = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_HOMEPAGE_INFO':
            return { ...state, ...action.payload };
        default:
            return state
    }
};

export default HomepageInfo