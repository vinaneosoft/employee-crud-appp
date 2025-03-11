/* {} : JSZ expressions, data binding */

import './Header.css';
import { Navbar } from '../navbar/Navbar';
/* functional component */
export function Header(props){
    const subHeading="EMPLOYEE OPERATIONS"; // local variable
    return(
        <header className="topheader">
            <h2>{subHeading}</h2>
            <Navbar mheading={props.mheading} cname={props.cname}></Navbar>
        </header>
        
    );
}