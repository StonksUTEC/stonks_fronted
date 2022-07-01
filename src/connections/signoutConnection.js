import cookies from "../libs/CookiesApp";

export function signout() {
    cookies.set("Token", '', { path: '/' })
    window.location.replace('/signin')
}
