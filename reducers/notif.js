const initialState = {
    items:[],
};
const Notif = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NOTIF':
            return { ...state, ...action.payload };
        default:
            return state
    }
};

export default Notif;