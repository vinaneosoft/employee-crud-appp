import { useState } from "react";

export function EmployeeForm(){
    let [employee, setEmployee]=useState( {
        employeeId:"",
        employeeName:"",
        departmentCode:"",
        joiningDate:"",
        experience:"",
        employeePic:""
    });


    function getDetails(ev){
        console.log(ev.target.value);
        console.log(ev.target.id);
        //setName(ev.target.value);
    }

    return(
        <div className="border border-5 border-info bg-dark text-white" style={{margin:'5px 100px'}}>
        <h4 className="text-center">Employee Form</h4>
        <form className="m-5">
            <div className="mb-3">
                <label htmlFor="employeeName" className="form-label">Name</label>
                <input type="text" className="form-control" value={employee.employeeName} 
                onChange={getDetails} id="employeeName" />
            </div>
            <div className="mb-3">
                <label htmlFor="experience" className="form-label">Experience</label>
                <input type="number" className="form-control" id="experience" value={employee.experience} 
                onChange={getDetails}  />
            </div>
            <div className="mb-3">
                <label htmlFor="joiningDate" className="form-label">Date Of Joining</label>
                <input type="datetime-local" className="form-control" id="joiningDate" 
                value={employee.joiningDate} onChange={getDetails}  />
            </div>
            <div className="mb-3">
                <label htmlFor="departmentCode" className="form-label">Department</label>
                <select className="form-select" id="departmentCode" value={employee.departmentCode} 
                onChange={getDetails} >
                    <option value="PT">Python</option>
                    <option value="JS">JavaScript</option>
                    <option value="AD">Android</option>
                    <option value="IOS">IOS</option>
                    <option value="PHP">PHP</option>
                    <option value="RJS">ReactJS</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="reset" className="btn btn-primary">Reset</button>
        </form>
        <hr></hr>
        <p>{employee.employeeName}</p>
        </div>
      
    );
}