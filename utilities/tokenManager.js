import {ACCESS_TOKEN} from "../constants/storageKey";

export const setToken = (token) => {
    /***
     * remove old token
     * document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
     * document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
     * set new token
     ***/
    setCookie(ACCESS_TOKEN, token.access_token, ((token.expires_in - 30) * 1000));
    // setCookie("refreshToken", token.refresh_token, (180*24*60*60*1000));
};
export const getToken = (tokenName) => {
    return getCookie(tokenName);
};
const setCookie = (cookieName, cookieValue, expireTime) => {
    const date = new Date();
    date.setTime(date.getTime() + expireTime);
    const expires = "expires=" + date.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
};
const getCookie = (cookieName) => {
    const name = cookieName + "=";
    const cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return false;
};
export const deleteCookie = (cookieName)=>{
    document.cookie = cookieName + "= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
};