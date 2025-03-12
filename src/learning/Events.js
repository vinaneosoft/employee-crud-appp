/* in a react if we want to manage the state of variable then we need to use
state management concepts in react
Hook : useState */

import { useState } from "react";

import { dadarAddress } from "../businesslogic/companyaddress";

export function Events(){
    /* [variable holding a state, function reference to set new state]*/
    let [companyName, setName]=useState("Neosoft Technologies");
    let [companyAddress, setAddress]=useState(dadarAddress);
    function change(newname){
        console.log("in change funciton");
       // companyName=newname; // new state it wont work
        setName(newname); // this will work
    }

    let [headingStyle, setBackColor]=useState({
        background:'yellow',
        color:'green',
        textTransform:'uppercase'
    })
    function changeBackground(newbackcolor){
        /* react rule : every object is immutable */
       // headingStyle.background=newbackcolor // error
        setBackColor({...headingStyle,background:newbackcolor});
    }
    

    return(<div>
        <h4 onMouseOver={()=>changeBackground("pink")} style={headingStyle}>{companyName}</h4>
        <button onClick={()=>change("Neosoft")}>CHANGE COMPANY NAME</button>
        <p>
            {companyAddress}
        </p>
        <button>CHANGE ADDRESS</button>
    </div>);
}


