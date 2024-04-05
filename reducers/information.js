const initialState = {
    data:{}
};
const Information = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INFORMATION':
            return { ...state, ...action.payload };
        default:
            return state
    }
};

export default Information