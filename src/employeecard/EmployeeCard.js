
/* single card design */
export function EmployeeCard({employee}){
    return (
        <div className="card" style={{width: "18rem", margin:"10px"}}>
            <img src={employee.employeePic} className="card-img-top"  />
            <div className="card-body">
                <h5 className="card-title"><span>#{employee.employeeId}</span> <span>{employee.employeeName}</span></h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><i>Department Code : </i><b>{employee.departmentCode}</b></li>
                <li className="list-group-item"><i>Joined on  </i><b>{employee.joiningDate.toString()}</b></li>
                <li className="list-group-item"><i>Experience : </i><b>{employee.experience} years</b></li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">EDIT</a>
                <a href="#" className="card-link">DELETE</a>
            </div>
        </div>
    );
}