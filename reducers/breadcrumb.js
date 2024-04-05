const initialState = {
    loading:true,
    items:[]
}
const Breadcrumb = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BREADCRUMB':
            return { ...state, ...action.payload }
        default:
            return state
    }
}

export default Breadcrumb