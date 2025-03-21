import { Link } from "react-router";

/* single card design */
export function EmployeeCard({employee, deleteEmployee}){


    return (
        <div className="card" style={{width: "18rem", margin:"10px"}}>
            <img src={employee.employeePic} className="card-img-top"  />
            <div className="card-body">
                <h5 className="card-title"><span>#{employee.id}</span> <span>{employee.employeeName}</span></h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><i>Department Code : </i><b>{employee.departmentCode}</b></li>
                <li className="list-group-item"><i>Joined on  </i><b>{employee.joiningDate.toString()}</b></li>
                <li className="list-group-item"><i>Experience : </i><b>{employee.experience} years</b></li>
            </ul>
            <div className="card-body">
                <Link to={`/editemployee/${employee.employeeId}`} className="card-link" >EDIT</Link>
                <button onClick={()=>deleteEmployee(employee.employeeId)} className="btn btn-link">DELETE</button>
            </div>
        </div>
    );
}



