import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";


export function RouteGuard({children}){
const [cookies]=useCookies();// listener
const navigate=useNavigate();
    /* authentication  */
    /* if admin has logged in then show child
    else alert(please login first) */
  

      return cookies.admin!=undefined ? children :   alert("Please login first"); 
}