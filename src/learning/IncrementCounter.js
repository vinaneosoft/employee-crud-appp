
import { store } from "../reduxstore/store";
import { increment } from "../reduxstore/reducers";


export function IncrementCounter(){
   
      store.subscribe(()=>{
        console.log(store.getState());
        
      });
    //useSelector, useDispatch : hooks not needed
    return(
        <div>
            <h5>IncrementCounter component</h5>
            <p>Counter from Store :  </p>
            <button className="btn btn-info" 
            onClick={()=>store.dispatch(increment())}>INCREMENT</button> {/** from here we will dispatch the action */}
        </div>
    );
}