import {deleteCookie} from "./tokenManager";
import {ACCESS_TOKEN} from "../constants/storageKey";

export default ()=> {
    localStorage.clear();
    sessionStorage.clear();
    deleteCookie(ACCESS_TOKEN);
    // window.location.replace('/');
    window.location.href = "/"
}