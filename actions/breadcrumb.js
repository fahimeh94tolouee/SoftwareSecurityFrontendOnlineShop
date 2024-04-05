import Request from '../utilities/request';
export const setBreadcrumb = data => ({
    type: 'SET_BREADCRUMB',
    payload: data
});

export const getBreadcrumb = (type, id) => {
    return async (dispatch) => {
        dispatch(setBreadcrumb({
            loading: true
        }));
        await Request({
            url: process.env.apiUrl + '/breadcrumbs',
            method: 'get',
            params: {
                type:type,
                id:id
            }
        }).then(response => {
            dispatch(setBreadcrumb({
                loading: false,
                items: response.data.data
            }))
        }).catch(error => {
        })
    }
}