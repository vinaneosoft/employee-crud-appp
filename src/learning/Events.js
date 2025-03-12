/* in a react if we want to manage the state of variable then we need to use
state management concepts in react
Hook : useState */

import { useRef, useState } from "react";

import { dadarAddress } from "../businesslogic/companyaddress";

export function Events(){
    /* [variable holding a state, function reference to set new state]*/
    let [companyName, setName]=useState("Neosoft Technologies");
    let [companyAddress, setAddress]=useState(dadarAddress);
    let [departmentName, setDepartment]=useState("Python"); //Pytho, Pyth

    let inputRef=useRef();    // 1.
    let addressRef=useRef();

    function change(){
       // console.log(inputRef);
        //console.log(inputRef.current.value);
       // companyName=newname; // new state it wont work
        setName(inputRef.current.value); // this will work
    }
    function changeAddress(){
        console.log(addressRef.current.value);
        setAddress(addressRef.current.value)
    }

    let [headingStyle, setBackColor]=useState({
        background:'yellow',
        color:'green',
        textTransform:'uppercase'
    })
    function changeBackground(newbackcolor){
        /* react rule : every object is immutable */
       // headingStyle.background=newbackcolor // error
        setBackColor({...headingStyle,background:newbackcolor,fontStyle:"italic" });
    }
    
    let [locations, setNewLoc]=useState(['Dadar, Mumbai','Parel, Mumbai','Rabale, Mumbai']);

    function addLocation(newLoc){
       // let newarry=locations.map(loc=>loc);
       // newarry.push(newLoc);
        setNewLoc([...locations,newLoc]);
    }
    return(<div>
       <section>
        <h4 onMouseOver={()=>changeBackground("pink")} style={headingStyle}>{companyName}</h4>
        <input type="text" name="cname" ref={inputRef} /> 
        <button onClick={change}>CHANGE COMPANY NAME</button>
       </section>
        <hr/>
       <section>
       <p>
            {companyAddress}
        </p>
        <input type="text" onKeyUp={changeAddress} ref={addressRef} placeholder="add address" />
       </section>
       <hr />
        <div><ul>{locations.map((location,index)=><li key={index}>{location}</li>)}</ul></div>
        <button onClick={()=>addLocation('Ahmadabad')}>Add new company location</button>
        <hr></hr>
        <section>
            <b>{departmentName}</b> {/*Pytho, Pyth */}
            {/* controlled ip : value attr, onChange */}
            <input type="text" placeholder="enter department" value={departmentName} onChange={(e)=>setDepartment(e.target.value)} ></input>
        </section>
    </div>);
}


