import { EmployeeCard } from "../employeecard/EmployeeCard";
import "./Employees.css";

export function Employees(){
    // array of employees
    const neoemployees=[
        {
            employeeId:111,
            employeeName:"Pravin Kumar",
            departmentCode:"PT",
            joiningDate:new Date('2 Jan 2018'),
            experience:10
        },
        {
            employeeId:112,
            employeeName:"Sameer Kumar",
            departmentCode:"PT",
            joiningDate:new Date('3 Jan 2018'),
            experience:12
        },
        {
            employeeId:113,
            employeeName:"Pravin Pawar",
            departmentCode:"JS",
            joiningDate:new Date('2 Dec 2018'),
            experience:5
        },
        {
            employeeId:114,
            employeeName:"Pravin Pawar",
            departmentCode:"JS",
            joiningDate:new Date('2 Dec 2018'),
            experience:5
        },
        {
            employeeId:115,
            employeeName:"Pravin Pawar",
            departmentCode:"JS",
            joiningDate:new Date('2 Dec 2018'),
            experience:5
        },
        {
            employeeId:116,
            employeeName:"Pravin Pawar",
            departmentCode:"JS",
            joiningDate:new Date('2 Dec 2018'),
            experience:5
        }
    ]

    /* mutiple cards : EmployeeCard: reused it  */
    const empcards=neoemployees.map((employee, index)=><EmployeeCard key={"empcard"+index} employee={employee} />) 
    /*UI : JSX, JS{}*/
    return( 
        <section className="d-flex flex-wrap justify-content-evenly bg-dark">
            {empcards}
        </section>
    );
   
}
