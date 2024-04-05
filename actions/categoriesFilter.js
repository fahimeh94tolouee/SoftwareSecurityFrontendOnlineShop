import Request from '../utilities/request';
export const setCategoriesFilter = data => ({
    type: 'SET_CATEGORIES_FILTER',
    payload: data
});
export const setLoading = data=>({
    type: 'SET_INITIAL',
    payload: data,
});
export const getCategoriesFilter = (slug) => {
    return async (dispatch) => {
        dispatch(setLoading({
            loading:true
        }));
        await Request({
            url: process.env.apiUrl + '/categories/'+slug+'/filters',
            method: 'get',
        }).then(response => {
            dispatch(setCategoriesFilter({
                items:response.data.data
            }));
        }).catch(error => {
        })
    }
}