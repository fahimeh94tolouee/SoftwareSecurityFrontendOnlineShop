const initialState = {
    loading:true,
}
const Loading = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return { ...state, ...action.payload }
        default:
            return state
    }
}

export default Loading