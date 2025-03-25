/* {} : JSZ expressions, data binding */

import './Header.css';
import { Navbar } from '../navbar/Navbar';
//import { useSelector } from 'react-redux';
/* functional component */
export function Header(props){
    const subHeading="EMPLOYEE OPERATIONS"; // local variable

    /* js styling keys: built in keys: same as css : only in camel case */
    const styleObj={
        backgroundColor:'#000000',
        padding:'10px',
        color : 'white'
    }
    //const counter=useSelector((state)=>state.counter.value);
    return(
        <header className="topheader" style={styleObj}>
            <h2>{subHeading}</h2>
            <p>{counter}</p>
            <Navbar mheading={props.mheading} cname={props.cname}></Navbar>
        </header>
        
    );
}