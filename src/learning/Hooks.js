import { useEffect, useState } from "react";


export function Hooks(){
    // useEffect, useRef, difference between useState and useRef

    /* hook to manage lifecycle of component
    1. intially it gets called when components get mounted
( note : in development mode, components gets mounted 2 times) 
    2. after that useEffect gets called 
        1. everytime when UI gets updated due to stage change in variable*/
    let [counter1, setCounter1]=useState(0) // individual copy for every instance of Hook component
    useEffect(()=>{
        console.log("useEffect called....");
        
    });
    return(
        <article>
            <h3>Learning Hooks</h3>
            <div>
                <p>{counter1}</p>
                <button onClick={()=>setCounter1(++counter1)}>INCREMENT</button>
            </div>
        </article>
    );
}