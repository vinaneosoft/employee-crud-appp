import { useEffect, useState } from "react";


export function Hooks(){
    
    // useEffect, useRef, difference between useState and useRef

    /*useEffect: hook to manage lifecycle of component
    1. intially it gets called when components get mounted
( note : in development mode, components gets mounted 2 times) 
   2.
        1. no dependancy
            useEffect gets called on every re-render
        2. [] : empty dependancy : useEffect will NOT get called on re-rendering 
        3. [variables] :nonempty dependancy: useEffect gets called on re-render only if value of dependancy is changed
   3. useEffect gets called when components removed from DOM (unmount)
        */
    let [counter1, setCounter1]=useState(0) // individual copy for every instance of Hook component
    let [counter2, setCounter2]=useState(0);
    useEffect(()=>{
        console.log("set up logic.... u can connect to external system");
        console.log(counter1);
        return () => {
           console.log("clean up logic...., release resources hold");    
           console.log(counter1);
          };
    },[counter1]);
    return(
        <article>
            <h3>Learning Hooks</h3>
            <div>
                <p>{counter1}</p>         
                <button onClick={()=>{
                    setCounter1(counter1+1); // UI update
                }}>INCREMENT</button>
                <p>{counter2}</p>
                <button onClick={()=>{
                    setCounter2(counter2+1);
                }}>INCREMENT</button>
            </div>
        </article>
    );
}
/*
initially when ur application gets loaded all componnets gets mounted the useEffect gets called.
after that, if state gets changed for dependancy varible then UI gets re-rendered and useEffect gets called
because dependancy array value is changed

suppose useEffect gets called
1. setup on component mount
2. on every re-render : clean up, set up....
3. cleanup on component unmount
 */