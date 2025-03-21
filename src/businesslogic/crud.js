import axios from "axios";  // default exported import

const url="http://localhost:3200/employeeinfo";
export async function getEmployees(){
  const response=await axios.get(url);
  if(response.statusText=="OK")
    return response.data;
  else
    console.log(response);
}