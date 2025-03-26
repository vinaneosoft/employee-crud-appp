import { Link } from "react-router";
import { EmployeeCard } from "../employeecard/EmployeeCard";
import "./Employees.css";
import { deleteEmployeeById, getEmployees } from "../businesslogic/crud";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";

export function Employees(){
    const neoobject=useSelector((state)=>state.company.value);
const [cookies, setCookie, removeCookie]=useCookies();// listener
    // array of employees
    const [neoemployees, setEmployees]= useState([]); 

    async  function getAllEmployees(){
        const data=  await getEmployees();
       // console.log(data);
       if(data.length==0)
            alert("NO RECORDS FOUND....");
        setEmployees(data);  // re-render
    }

    async function deleteEmployee(id){
        console.log("in delete function parent", id);
        const data=await deleteEmployeeById(id); // crud 
       // console.log(data);
        if(data!=null){
            alert(`Employee with id ${data.id} deleted successfully....`);
            getAllEmployees();
        }
        else{
            alert("Something went wrong while deleting....");
        }
           
    }


    useEffect(()=>{
        console.log("Employees mounted");
        getAllEmployees(); // async call  // connected to external resource after rendering of component
        console.log("process continued......");
    }, []);

    /*useEffect with empty depedancy is bad practice 
    solution : loader functions in routing : we will implement in searching*/

    /* mutiple cards : EmployeeCard: reuse it  */
    const empcards=neoemployees.map((employee, index)=><EmployeeCard key={"empcard"+index} employee={employee} deleteEmployee={deleteEmployee}  />) 
    /*UI : JSX, JS{}*/
    return( 
        <div>
             {cookies.admin!=undefined &&
                <Link className="btn btn-primary" to="/addemployee">ADD NEW</Link>
             }
            <p>Company Budget : {neoobject.cbudget}</p>
           
            <section className="d-flex flex-wrap justify-content-evenly bg-dark">
                {empcards}
            </section>
        </div>
        
    );
   
}
//http://localhost:3000/employees/addemployee :wrong
//http://localhost:3000/addemployee : correct