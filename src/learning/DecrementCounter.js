

export function DecrementCounter(){
    return(
        <div>
             <h5>DecrementCounter component</h5>
            <p>Counter from Store : </p>
            <button>DECREMENT</button> {/** from here we will dispatch the action */}
        </div>
    );
}