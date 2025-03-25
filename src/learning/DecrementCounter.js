import { store } from "../reduxstore/store";


export function DecrementCounter(){
    store.subscribe(()=>console.log(store.getState()));
    return(
        <div>
             <h5>DecrementCounter component</h5>
            <p>Counter from Store : </p>
            <button className="btn btn-info">DECREMENT</button> {/** from here we will dispatch the action */}
        </div>
    );
}