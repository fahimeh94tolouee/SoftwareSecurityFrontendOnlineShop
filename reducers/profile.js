const initialState = {
    summary:[],
    initial:[],
};
const Profile = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PROFILE':
            return { ...state, ...action.payload };
        default:
            return state
    }
};

export default Profile;