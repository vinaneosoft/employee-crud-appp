import { useEffect, useState } from "react";
import { useLoaderData, useLocation, useNavigate, useParams } from "react-router";
import { addEmployee } from "../businesslogic/crud";

export function EmployeeForm(){
    let {id}= useParams(); // id of employee to be searched
    let navigate=useNavigate();

    let location=useLocation();
    let emptyemployee={
        id:"",
        employeeName:"",
        departmentCode:"PT",
        joiningDate:"",
        experience:"",
        employeePic:""
    };
    let searchedemployee=useLoaderData(); /* id is available */

    function initialState(){
        if(location.pathname.includes("editemployee"))
           return searchedemployee;
        else
            return emptyemployee;
    }   
    let [employee, setEmployee]=useState(()=>initialState());
  
    function clearForm(){
        setEmployee(emptyemployee);
    }
    function getDetails(ev){
      // console.log(employee); 
        console.log(ev.target.value);
        console.log(ev.target.name);
        //employee.employeeName=ev.target.value // mutable : wrong : 
        // rule : every object is immutable in react
        setEmployee({...employee, [ev.target.name]:ev.target.value}); // copy, key value replace 
    }

    async function addEmp(event){
        event.preventDefault();
        const data=await addEmployee(employee);//crud
       // console.log(data);
        if(data!=null){
            alert(`Employe with id ${data.id} added successfully....`);
            // once new employee will get added we want to navigate to /employees
            // routing without clicking on Link
            navigate("/employees"); // routing
        }
    }
    useEffect(()=>{
        console.log(employee); 
        console.log(searchedemployee);
    });
    return(
        <div className="border border-5 border-info bg-dark text-white" style={{margin:'5px 100px'}}>
        <h4 className="text-center">Employee Form</h4>
        <form className="m-5" onSubmit={addEmp} method="post">
            <div className="mb-3">
                <label htmlFor="employeeName" className="form-label">ID</label>
                <input type="text" className="form-control" placeholder="id will be autogenerated" 
                value={employee.id}
                 id="id" name="id"  onChange={getDetails} readOnly  />
            </div>
            <div className="mb-3">
                <label htmlFor="employeeName" className="form-label">Name</label>
                <input type="text" className="form-control" value={employee.employeeName} 
                onChange={getDetails} id="employeeName" name="employeeName"/>
            </div>
            <div className="mb-3">
                <label htmlFor="experience" className="form-label">Experience</label>
                <input type="number" className="form-control" id="experience" name="experience" value={employee.experience} 
                onChange={getDetails}  />
            </div>
            <div className="mb-3">
                <label htmlFor="joiningDate" className="form-label">Date Of Joining</label>
                <input type="datetime-local" className="form-control" id="joiningDate"  name="joiningDate"
                value={employee.joiningDate} onChange={getDetails}  />
            </div>
            <div className="mb-3">
                <label htmlFor="departmentCode" className="form-label">Department</label>
                <select className="form-select" id="departmentCode" name="departmentCode" value={employee.departmentCode} 
                onChange={getDetails} >
                    <option value="PT">Python</option>
                    <option value="JS">JavaScript</option>
                    <option value="AD">Android</option>
                    <option value="IOS">IOS</option>
                    <option value="PHP">PHP</option>
                    <option value="RJS">ReactJS</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="employeePic" className="form-label">URL of your picture</label>
                <input type="url" className="form-control" id="employeePic"  name="employeePic"
                value={employee.employeePic} onChange={getDetails}  />
            </div>
            <button type="submit" className="btn btn-primary">{location.pathname.includes("editemployee")?"UPDATE":"ADD"}</button>
            <button type="reset" className="btn btn-primary" onClick={clearForm}>RESET</button>
        </form>
        </div>
      
    );
}


