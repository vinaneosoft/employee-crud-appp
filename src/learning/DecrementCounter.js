import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { decrement } from "../reduxstore/CounterSlice";

export function DecrementCounter(){
    const counter=useSelector((state)=>state.counter.value);
    const dispatch=useDispatch();
    useEffect(()=>{
        console.log(counter);
    },[counter]);
    return(
        <div>
             <h5>DecrementCounter component</h5>
            <p>Counter from Store : {counter} </p>
            <button onClick={()=>dispatch(decrement())} className="btn btn-info">DECREMENT</button> {/** from here we will dispatch the action */}
        </div>
    );

  
}