import { Link, Outlet } from "react-router";


export function Home(){
    let message="CRUD meaning";
    return(
        <main>
            <h3>{message}</h3>
            <p>
            Employee CRUD refers to the basic operations performed on employee data in a 
            database or application. CRUD stands for:
            </p>
            <ul>
                <li>Create - Adding new employee records</li>
                <li>Read - Retrieving or viewing employee details</li>
                <li>Update - Modifying existing employee information</li>
                <li>Delete - Removing employee records</li>
            </ul>
            <p>
                 Employee CRUD is commonly implemented in HR management 
                systems, payroll applications, 
                and administrative dashboards to manage employee data efficiently.
                It can be built using various programming languages, frameworks, and databases.
            </p>
            <nav className="navbar navbar-expand-sm bg-body-tertiary">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link" to="create">CREATE</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="read">READ</Link>
                </li>
            </ul>
            </div>
            </div>
            </nav>
            <Outlet></Outlet>
        </main>

    );
}
/**
 * /home/
 * http://localhost:3000/home/create
 */