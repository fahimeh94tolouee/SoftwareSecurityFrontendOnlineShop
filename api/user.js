import Request from "../utilities/request";
import {CHANGE_PASSWORD_API, UPDATE_INFO_API, USER_API} from "../constants/api";

const baseUrl = process.env.apiUrl;


export const getInfo = () => {
    return Request({
        method: "get",
        url: `${baseUrl}${USER_API}`,
        needToken: true,
    });
};

export const updateInfo = data => {
    return Request({
        method: "put",
        url: `${baseUrl}${USER_API}${UPDATE_INFO_API}`,
        needToken: true,
        data: data
    });
};


export const changePassword = data => {
    return Request({
        method: "post",
        url: `${baseUrl}${USER_API}${CHANGE_PASSWORD_API}`,
        needToken: true,
        data: data
    });
};
