/* in a react if we want to manage the state of variable then we need to use
state management concepts in react
Hook : useState */

import { useState } from "react";


export function Events(){
    /* [variable holding a state, function reference to set new state]*/
    let [companyName, setName]=useState("Neosoft Technologies");
    function change(newname){
        console.log("in change funciton");
       // companyName=newname; // new state it wont work
        setName(newname); // this will work
    }

    return(<div>
        <h4>{companyName}</h4>
        <button onClick={()=>change("Neosoft")}>CHANGE COMPANY NAME</button>
    </div>);
}


