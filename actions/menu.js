import Request from '../utilities/request';
export const setMenu = data => ({
    type: 'SET_MENU',
    payload: data
});

export const getMenu = () => {
    return async (dispatch) => {
        await Request({
            url: process.env.apiUrl + '/menus',
            method: 'get',
        }).then(response => {
            dispatch(setMenu({
                loading: false,
                items: response.data.data
            }))
        }).catch(error => {
        })
    }
};