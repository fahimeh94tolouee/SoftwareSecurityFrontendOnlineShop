import Request from '../utilities/request';
export const setAddress = data => ({
    type: 'SET_ADDRESS',
    payload: data
});

export const getAddress = () => {
    return async (dispatch) => {
        await Request({
            url: process.env.apiUrl + '/profile/addresses',
            method: 'get',
            needToken:true,
        }).then(response => {
            dispatch(setAddress({
                items: response.data.data
            }))
        }).catch(error => {
        })
    }
};

export const addAddress = (data) => {
    return async (dispatch) => {
        await Request({
            url: process.env.apiUrl + '/profile/addresses',
            method: 'post',
            needToken:true,
            data:data,
        }).then(response => {
            dispatch(setAddress({
                items: response.data.data
            }))
        }).catch(error => {
        })
    }
};
export const updateAddress = (data,id) => {
    return async (dispatch) => {
        await Request({
            url: process.env.apiUrl + '/profile/addresses/'+id,
            method: 'put',
            needToken:true,
            data:data,
        }).then(response => {
            dispatch(setAddress({
                items: response.data.data
            }))
        }).catch(error => {
        })
    }
};
export const setDefaultAddress = (id) => {
    return async (dispatch) => {
        await Request({
            url: process.env.apiUrl + '/profile/addresses/default/'+id,
            method: 'patch',
            needToken:true,
        }).then(response => {
            dispatch(setAddress({
                items: response.data.data
            }))
        }).catch(error => {
        })
    }
};
export const deleteAddress = (id) => {
    return async (dispatch) => {
        await Request({
            url: process.env.apiUrl + '/profile/addresses/'+id,
            method: 'delete',
            needToken:true,
        }).then(response => {
            dispatch(setAddress({
                items: response.data.data
            }))
        }).catch(error => {
        })
    }
};