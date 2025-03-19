import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //  no {}, u can use alias direct e.g.  import Ap from './App'; 
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter, redirect } from 'react-router';
import { AdminLogin } from './adminlogin/AdminLogin';
import { Employees } from './employees/Employees';
import { EmployeeForm } from './employeeform/EmployeForm';
import { Home } from './home/Home';
import { Create } from './home/Create';
import { Read } from './home/Read';

let routes=[
  {
    path:'/',
    element:  <App />,
    children :[
        {
            path:'/',
            loader:()=>redirect('adminlogin')
        },  
        // when root path matches, one child must be automatically loaded
        {
            path:'adminlogin',
            element:<AdminLogin />
        },
        {
            path:'employees',
            element:<Employees />
        
        },
        {
            path:'addemployee',
            element:<EmployeeForm></EmployeeForm>
        },
        {
            path:'home',
            element:<Home></Home>,
            children:[
                {
                    path:'create',
                    element:<Create></Create>
                },
                {
                    path:'read',
                    element:<Read></Read>
                }
            ]
        }

    ]
  }
]
// root path : http://localhost:3000/
// http://localhost:3000/addemployee
//http://localhost:3000/employees
//http://localhost:3000/home
//http://localhost:3000/home/create
//http://localhost:3000/home/read
let browserRouter=createBrowserRouter(routes);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={browserRouter}></RouterProvider>
    </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
