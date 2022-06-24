import { useNavigate } from "react-router-dom";
import cookies from "../libs/CookiesApp";

export function signout() {
    cookies.set("Token", '', { path: '/' })
    console.log("Logout...");
    window.location.replace('/signin')
}
