import Request from '../utilities/request';
export const setProductList = data => ({
    type: 'SET_PRODUCT_LIST',
    payload: data
});

export const setLoading = data=>({
    type: 'SET_INITIAL',
    payload: data,
});
export const getProductList = (slug, query='') => {
    return async (dispatch) => {
        dispatch(setLoading({
            loading:true
        }));
        await Request({
            url: process.env.apiUrl + '/categories/' + slug + '/products/'+query,
            method: 'get',
        }).then(response => {
            dispatch(setProductList({
                items: response.data.data,
                meta: response.data.meta,
                sort: response.data.sort,
            }))
        }).catch(error => {
        })
    }
};