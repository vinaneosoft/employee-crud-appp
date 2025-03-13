import { useState } from "react";
import { Hooks } from "./Hooks";

export function Unmount(){

    let [flag, setFlag]=useState(true);
    return(
        <section>
            <button onClick={()=>setFlag(false)}>REMOVE</button>
             {flag && <Hooks></Hooks>}
        </section>
       
    );
}