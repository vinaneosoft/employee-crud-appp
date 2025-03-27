import { Header } from './header/Header';
import './App.css';
import { Learning } from './learning/Learning';

import { Employees } from './employees/Employees';
//import { Events } from './learning/Events';
import { EmployeeForm } from './employeeform/EmployeForm';
import { Hooks } from './learning/Hooks';
import { Unmount } from './learning/Unmount';
import { createContext, useState } from 'react';
import { Outlet } from 'react-router';

export let MyContext=createContext();
/* UI merge  */

function App() {
  const mainHeading="EMPLOYEE MANAGEMENT"; 
  const companyName="Neosoft";// we will make changes in heading , changes will be reflected in child
  

  let [data, setData]=useState({
    cname:companyName,
    year:1988
  });
  // after 3 seconds, want to change year to 1990
  setTimeout(() => {
    setData({...data, year:1990})
  }, 3000);
  return (
   <>
          <h1 className='mainHeading'>{mainHeading}, <small>{companyName}</small></h1> 
          <b>{data.year}</b>
          <MyContext value={data}>
            <Header mheading={mainHeading} cname={companyName}></Header> 
    
            <Outlet></Outlet> {/* Outlet component used to load child elements on route match*/}
          <div>keep footer component here</div>
          </MyContext>
     
   </>
  );
}



export default App;


 /*A module cannot have multiple default exports.*/


// from one module we can export n properties
// u can export more than one pr with normal export
// u can export only one pr as default export

