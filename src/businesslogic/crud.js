import axios from "axios";

// front end logic to connect to backend
const url="http://localhost:3200/employeeinfo"
async function  getEmployees(){
    const promise=await axios.get(url);
}