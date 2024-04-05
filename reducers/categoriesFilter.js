const initialState={
    loading:true,
    items:[]
}
const CategoriesFilter = (state = initialState,action)=>{
    switch (action.type) {
        case 'SET_CATEGORIES_FILTER':
            return {...state,...action.payload}
        default:
            return state
    }
}
export default CategoriesFilter