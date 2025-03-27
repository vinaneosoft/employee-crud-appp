import { Link } from "react-router";
import { EmployeeCard } from "../employeecard/EmployeeCard";
import "./Employees.css";
import { deleteEmployeeById, getEmployees } from "../businesslogic/crud";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
export function Employees(){
    const neoobject=useSelector((state)=>state.company.value);
const [cookies]=useCookies();// listener
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
        const b=window.confirm("Do you really want to delete???");
        if(b){
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
             {cookies.admin!=undefined ?
              
                <Button LinkComponent={Link} to="/addemployee" variant="outlined" 
                startIcon={<AddIcon></AddIcon>}>ADD EMPLOYEE </Button>
                :
                <small>please login to add details</small>
             }
          
            <section className="d-flex flex-wrap justify-content-evenly bg-dark">
                {empcards}
            </section>
        </div>
        
    );
   
}
//http://localhost:3000/employees/addemployee :wrong
//http://localhost:3000/addemployee : correct