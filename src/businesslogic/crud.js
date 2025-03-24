import axios from "axios";  // default exported import

const url="http://localhost:3200/employeeinfo";
export async function getEmployees(){
  try{
    const response=await axios.get(url);  // get request
    return response.data;
  }catch(error){
    console.log(error);
  }
  return [];
}

export async function deleteEmployeeById(id){
  try{
    const response=await axios.delete(`${url}/${id}`);  // delete request
    return response.data;
  }catch(error){
    console.log(error);
  }
  return null;
}

export async function addEmployee(employee){
  try{
    const response=await axios.post(url,employee);   // post request, data will be passed via body od the request
    return response.data;
  }catch(error){
    console.log(error);
  }  
  return null;
}

export async function getEmployeeById(id){
  try{
    const response=await axios.get(`${url}/${id}`)
    return response.data;
  }catch(error){
    console.log(error);
  }
  return null;
} 

export async function updateEmployee(id,employee){
  try{
    const response=await axios.put(`${url}/${id}`, employee);
    return response.data;
  }catch(error){
    console.log(error);
  }
  return null;
}

/* in json file : 
 keep one key as id and its value as a string
 primary crud by json server will be done using this id key */