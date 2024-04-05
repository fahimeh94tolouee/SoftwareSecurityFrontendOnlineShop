import Request from '../utilities/request';

export const setFavorites = data => ({
    type: 'SET_FAVORITES',
    payload: data
});

export const getFavorites = () => {
    return async (dispatch) => {
        await Request({
            url: process.env.apiUrl + '/products/favorite/',
            method: 'get',
            needToken:true,
        }).then(response => {
            dispatch(setFavorites({
                items:response.data.data,
                meta:response.data.meta
            }))
        }).catch(error => {
        })
    }
};
export const deleteFavorites= (id) => {
    return async (dispatch) => {
        await Request({
            url: process.env.apiUrl + '/products/'+id+'/favorite/remove/',
            method: 'delete',
            needToken:true,
        }).then(response => {
            dispatch(setFavorites({
                items:response.data.data,
                meta:response.data.meta
            }))
        }).catch(error => {
        })
    }
};