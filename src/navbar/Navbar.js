import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router";


export function Navbar(props){
  // getting cookies
 const [cookies, ,removeCookie]=useCookies();// listener
 
  function logout(){
    removeCookie("admin");
    alert("logged out....");
  }
const searchType="search";
    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary">
         
  <div className="container-fluid">
    <Link className="navbar-brand" to="home">{props.mheading}, <small>{props.cname}</small></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="employees"> Show Employees</Link>
        </li>
        {cookies.admin!=undefined && <li className="nav-item">
          <Link className="nav-link" to="addemployee">ADD NEW</Link>
        </li>}

       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type={searchType} placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <ul  className="navbar-nav  mb-lg-0">
        {
          cookies.admin==undefined &&
          <li className="nav-item">
          <Link className="nav-link" to="adminlogin">Login</Link>
        </li>
        }
       {
        cookies.admin!=undefined &&
         <li className="nav-item">
         <button className="nav-link" onClick={logout}>Logout</button>
       </li>
       }
      </ul>
    </div>
  </div>
  
</nav>
    );
}