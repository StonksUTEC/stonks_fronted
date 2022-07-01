import cookies from "../libs/CookiesApp"
export  function getToken() {
    return cookies.get('Token');
}
export function existsToken() {
    if (cookies.get('Token') === undefined || cookies.get('Token') === '') return false;
    return true;
}

export function tokenIsCorrect() {

}