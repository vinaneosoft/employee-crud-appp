import { useRef, useState } from "react";
import { admin } from "../businesslogic/admindetails";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";


export function AdminLogin(){
    let [errorMessage, setMessage]=useState("");
    const [cookies, setCookie] =useCookies();
    const navigate=useNavigate();
    const email=useRef();
    const password=useRef();

    function testLogin(e){
        e.preventDefault();
       // console.log(email.current.value);
       // console.log(password.current.value);
        if(admin.emailid==email.current.value && admin.password==password.current.value){
            setCookie("admin", admin.emailid);
            alert("you are logged in successfully....");
            setMessage("");
            navigate("/home");
        }
        else{
            setMessage("Incorrect Username or password");
        }
    }
    return (
        <div className="p-5 bg-dark text-white">
            <h4>ADMIN LOGIN FORM</h4>
            <div>
            <small className="text-danger">{errorMessage}</small>
            </div>
            <form onSubmit={testLogin}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" ref={email} id="exampleInputEmail1"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" ref={password} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <button type="reset" className="btn btn-primary">Reset</button>
            </form>
        </div>
    );
}