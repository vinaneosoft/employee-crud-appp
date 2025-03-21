import axios from "axios";  // default exported import

const url="http://localhost:3200/employeeinfo";
export async function getEmployees(){
  const response=await axios.get(url);  // get request
  if(response.statusText=="OK")
    return response.data;
  else
    console.log(response);
}


export async function deleteEmployeeById(id){
  const response=await axios.delete(`${url}/${id}`);  // delete request
  console.log(response);
  return response.data;
}