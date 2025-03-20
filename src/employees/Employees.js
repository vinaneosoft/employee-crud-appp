import { Link } from "react-router";
import { EmployeeCard } from "../employeecard/EmployeeCard";
import "./Employees.css";
import { getEmployees } from "../businesslogic/crud";
import { useEffect, useState } from "react";

export function Employees(){
    // array of employees
    const [neoemployees, setEmployees]= useState([]); 

    async  function getAllEmployees(){
        const data=  await getEmployees();
       // console.log("in Employee component");
        console.log(data);
       // neoemployees=[...data]; // wrong
       setEmployees(data);  // re-render
    }

    useEffect(()=>{
        console.log("Employees mounted");
        getAllEmployees();
        console.log("process continued......");
    }, []);

    /*useEffect with empty depedancy is bad practice 
    solution : loader functions in routing : we will implement in searching*/

    /* mutiple cards : EmployeeCard: reused it  */
    const empcards=neoemployees.map((employee, index)=><EmployeeCard key={"empcard"+index} employee={employee} />) 
    /*UI : JSX, JS{}*/
    return( 
        <div>
            <Link className="btn btn-primary" to="/addemployee">ADD NEW</Link>
            <section className="d-flex flex-wrap justify-content-evenly bg-dark">
                {empcards}
            </section>
        </div>
        
    );
   
}
//http://localhost:3000/employees/addemployee :wrong
//http://localhost:3000/addemployee : correct