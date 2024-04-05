import Request from '../utilities/request';
export const setHomepageInfo = data => ({
    type: 'SET_HOMEPAGE_INFO',
    payload: data
});
export const setLoading = data=>({
    type: 'SET_INITIAL',
    payload: data,
});

export const getHomepageInfo  = () => {
    return async (dispatch) => {
        dispatch(setLoading({
            loading:true,
        }));
        await Request({
            url: process.env.apiUrl + '/website/items/home_page/',
            method: 'get',
        }).then(response => {
            dispatch(setHomepageInfo({
                cache: true,
                items: response.data.data.value,
            }));
        }).catch(error => {
            console.log(error);
        })
    }
};