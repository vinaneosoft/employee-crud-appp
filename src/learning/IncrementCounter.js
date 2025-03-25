
import { store } from "../reduxstore/store";
import { increment } from "../reduxstore/reducers";
import { useEffect } from "react";
import { useSelector } from "react-redux";


export function IncrementCounter(){
  /*   store.subscribe(()=>{
        console.log(store.getState());
      }); */
    //useSelector, useDispatch : hooks not needed
   const counter=useSelector((state)=>state.counter.value); // listening for changes in state of store data, it gets called automatically when action is dispacthed on store
   useEffect(()=>{
    console.log(counter);
  },[counter]); 
   return(
        <div>
            <h5>IncrementCounter component</h5>
            <p>Counter from Store : {counter} </p>
            <button className="btn btn-info" 
            onClick={()=>store.dispatch(increment())}>INCREMENT</button> {/** from here we will dispatch the action */}
        </div>
    );
    
}