import Request from '../utilities/request';
export const setInitial = data => ({
    type: 'SET_INITIAL',
    payload: data
});

export const getInitial  = () => {
    return async (dispatch) => {
        await Request({
            url: process.env.apiUrl + '/website/initialization',
            method: 'get',
        }).then(response => {
            dispatch(setInitial({
                cache: true,
                items: response.data.data,
            }))
        }).catch(error => {
            console.log(error);
        })
    }
};
export const setUserAgent = data =>({
    type: 'SET_INITIAL',
    payload: {
        userAgent:data
    }
});