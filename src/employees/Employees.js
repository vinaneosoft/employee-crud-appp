import { Link } from "react-router";
import { EmployeeCard } from "../employeecard/EmployeeCard";
import "./Employees.css";

export function Employees(){
    // array of employees
    const neoemployees=[]; // call getEmployees

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