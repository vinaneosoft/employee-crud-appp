import { Link } from "react-router";
import { EmployeeCard } from "../employeecard/EmployeeCard";
import "./Employees.css";

export function Employees(){
    // array of employees
    const neoemployees=[
        {
            employeeId:111,
            employeeName:"Pravina Kumar",
            departmentCode:"PT",
            joiningDate:new Date('2 Jan 2018'),
            experience:10,
            employeePic:"https://th.bing.com/th/id/OIP.6dEHUdq-yfCqbEULVoOYKgHaE8?rs=1&pid=ImgDetMain"
        },
        {
            employeeId:112,
            employeeName:"Sameer Kumar",
            departmentCode:"PT",
            joiningDate:new Date('3 Jan 2018'),
            experience:12,
            employeePic:"https://www.nordstudio.ch/wp/wp-content/uploads/2018/02/mitarbeiter-business-fotos_08.jpg"
        },
        {
            employeeId:113,
            employeeName:"Pravin Pawar",
            departmentCode:"JS",
            joiningDate:new Date('2 Dec 2018'),
            experience:5,
             employeePic:"https://www.nordstudio.ch/wp/wp-content/uploads/2018/02/mitarbeiter-business-fotos_08.jpg"
        },
        {
            employeeId:114,
            employeeName:"Pravin Pawar",
            departmentCode:"JS",
            joiningDate:new Date('2 Dec 2018'),
            experience:5,
             employeePic:"https://www.nordstudio.ch/wp/wp-content/uploads/2018/02/mitarbeiter-business-fotos_08.jpg"
        },
        {
            employeeId:115,
            employeeName:"Pravin Pawar",
            departmentCode:"JS",
            joiningDate:new Date('2 Dec 2018'),
            experience:5,
             employeePic:"https://www.nordstudio.ch/wp/wp-content/uploads/2018/02/mitarbeiter-business-fotos_08.jpg"
        },
        {
            employeeId:116,
            employeeName:"Pravin Pawar",
            departmentCode:"JS",
            joiningDate:new Date('2 Dec 2018'),
            experience:5,
             employeePic:"https://www.nordstudio.ch/wp/wp-content/uploads/2018/02/mitarbeiter-business-fotos_08.jpg"
        },
        {
            employeeId:116,
            employeeName:"Pravin Pawar",
            departmentCode:"JS",
            joiningDate:new Date('2 Dec 2018'),
            experience:5,
             employeePic:"https://www.nordstudio.ch/wp/wp-content/uploads/2018/02/mitarbeiter-business-fotos_08.jpg"
        }
      
    ]

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