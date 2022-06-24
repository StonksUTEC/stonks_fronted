import cookies from "../libs/CookiesApp"
export  function getToken() {
    return cookies.get('Token');
}
export function existsToken() {
    console.log('Exists token', cookies.get('Token'));
    if (cookies.get('Token') === undefined || cookies.get('Token') === '') return false;
    return true;
}