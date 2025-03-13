import { Header } from './header/Header';
import './App.css';
//import { Learning } from './learning/Learning';

import { Employees } from './employees/Employees';
//import { Events } from './learning/Events';
import { EmployeeForm } from './employeeform/EmployeForm';
import { Hooks } from './learning/Hooks';
import { Unmount } from './learning/Unmount';

/* UI merge  */
function App() {
  const mainHeading="EMPLOYEE MANAGEMENT"; 
  const companyName="Neosoft";// we will make changes in heading , changes will be reflected in child
  return (
   <>
     <h1 className='mainHeading'>{mainHeading}, <small>{companyName}</small></h1> 
     <Header mheading={mainHeading} cname={companyName}></Header> 
    <Unmount></Unmount>
    
   </>
  );
}










function test1(){
}
 function test2(){
}


export {test1, test2}

export default App;


 /*A module cannot have multiple default exports.*/


// from one module we can export n properties
// u can export more than one pr with normal export
// u can export only one pr as default export