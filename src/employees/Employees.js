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
            employeeId:121,
            employeeName:"Sameer Kumar",
            departmentCode:"PT",
            joiningDate:new Date('3 Jan 2018'),
            experience:12
        },
        {
            employeeId:212,
            employeeName:"Pravin Pawar",
            departmentCode:"JS",
            joiningDate:new Date('2 Dec 2018'),
            experience:5
        },
        {
            employeeId:111,
            employeeName:"Pravin Pawar",
            departmentCode:"JS",
            joiningDate:new Date('2 Dec 2018'),
            experience:5
        },
        {
            employeeId:111,
            employeeName:"Pravin Pawar",
            departmentCode:"JS",
            joiningDate:new Date('2 Dec 2018'),
            experience:5
        },
        {
            employeeId:111,
            employeeName:"Pravin Pawar",
            departmentCode:"JS",
            joiningDate:new Date('2 Dec 2018'),
            experience:5
        }
    ]

    /* mutiple cards : EmployeeCard: reused it  */
    const empcards=neoemployees.map((employee, index)=><EmployeeCard key={"empcard"+index} />) 
    /*UI : JSX, JS{}*/
    return( 
        <section className="d-flex flex-wrap justify-content-evenly">
            {empcards}
        </section>
    );
   
}
