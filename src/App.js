import { Header } from './header/Header';
import './App.css';
import { Learning } from './learning/Learning';
import { EmployeeCard } from './employeecard/EmployeeCard';
import { Employees } from './employees/Employees';

/* UI merge  */
function App() {
  const mainHeading="EMPLOYEE MANAGEMENT";
  return (
   <>
     <h1 className='mainHeading'>{mainHeading}</h1> 
     <Header mheading={mainHeading}></Header> 
    <Employees></Employees>
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