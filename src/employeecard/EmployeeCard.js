import { Link } from "react-router";

import image1 from "../resources/Pooja Patil.jpg";
import image2 from "../resources/Soham Pawar.jpg";
/* single card design */
export function EmployeeCard({employee, deleteEmployee}){
  
    return (
        <div className="card" style={{width: "18rem", margin:"10px"}}>
            {/* <img src="https://imageio.forbes.com/specials-images/imageserve/609946db7c398a0de6c94893/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" 
            className="card-img-top"  /> */}
           {/* <img src={employee.employeePic} className="card-img-top"  /> */}
           {/*  <img src="../resources/Soham Pawar.jpg" className="card-img-top"  /> */}
         {/*   <img src={image1} className="card-img-top"  /> */}
         <img src={require("../resources/"+employee.employeePic)} className="card-img-top"  /> 
            <div className="card-body">
                <h5 className="card-title"><span>#{employee.id}</span> <span>{employee.employeeName}</span></h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><i>Department Code : </i><b>{employee.departmentCode}</b></li>
                <li className="list-group-item"><i>Joined on  </i><b>{employee.joiningDate.toString()}</b></li>
                <li className="list-group-item"><i>Experience : </i><b>{employee.experience} years</b></li>
            </ul>
            <div className="card-body">
                <Link to={`/editemployee/${employee.id}`} className="card-link" >EDIT</Link>
                <button onClick={()=>deleteEmployee(employee.id)} className="btn btn-link">DELETE</button>
            </div>
        </div>
    );
}



