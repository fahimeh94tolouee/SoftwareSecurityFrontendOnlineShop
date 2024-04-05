const initialState = {
    loading:true,
    items:[]
}
const Menu = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MENU':
            return { ...state, ...action.payload }
        default:
            return state
    }
}

export default Menu