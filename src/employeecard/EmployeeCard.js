import { Link } from "react-router";

import image1 from "../resources/Pooja Patil.jpg";
import image2 from "../resources/Soham Pawar.jpg";
import { useCookies } from "react-cookie";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Tooltip } from "@mui/material";

/* single card design */
export function EmployeeCard({employee, deleteEmployee}){
  const [cookies, setCookie, removeCookie]=useCookies();// listener
    return (
        <div className="card" style={{width: "18rem", margin:"10px"}}>
            {/* <img src="https://imageio.forbes.com/specials-images/imageserve/609946db7c398a0de6c94893/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" 
            className="card-img-top"  /> */}
           <img src={employee.employeePic} className="card-img-top"  />
           {/*  <img src="../resources/Soham Pawar.jpg" className="card-img-top"  /> this wont work */}
         {/*   <img src={image1} className="card-img-top"  /> */}
        {/*  <img src={require("../resources/"+employee.employeePic)} className="card-img-top"  />  */}
            <div className="card-body">
                <h5 className="card-title"><span>#{employee.id}</span> <span>{employee.employeeName}</span></h5>
            </div>


            <ul className="list-group list-group-flush">
                <li className="list-group-item"><i>Department Code : </i><b>{employee.departmentCode}</b></li>
                <li className="list-group-item"><i>Joined on  </i><b>{employee.joiningDate.toString()}</b></li>
                <li className="list-group-item"><i>Experience : </i><b>{employee.experience} years</b></li>
            </ul>
            <div className="card-body d-flex justify-content-between">
            {cookies.admin!=undefined ?
               <>
                    <Button LinkComponent={Link} to={`/editemployee/${employee.id}`} >
                        <Tooltip title="edit employee" placement="right">
                            <EditIcon color="secondary" />
                        </Tooltip>
                    </Button>
                    <Button onClick={()=>deleteEmployee(employee.id)}>
                        <Tooltip title="delete employee" placement="left">
                            <DeleteIcon color="error" />
                        </Tooltip>
                    </Button>
    
                </>
                :
                <small>please login to update the details</small>
            }
            </div>
        </div>
    );
}



