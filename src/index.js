import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // u can use alias direct e.g.  import Ap from './App'; 
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter } from 'react-router';

/* import { test1, test2 } from './App'; // import { test1 as t1, test2 as t2 }
import * as app from './App';
app.test1();
app.test2();
test1();
test2();
 */



let routes=[
  {
    path:'/',
    element:  <App />
  }
]

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
