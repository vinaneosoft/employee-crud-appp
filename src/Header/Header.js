import './Header.css';
import { Navbar } from '../navbar/Navbar';
/* functional component */
export function Header(){
    return(
        <header className="topheader">
            <h2>EMPLOYEE CRUD OPERATIONS</h2>
            <Navbar></Navbar>
        </header>
        
    );
}