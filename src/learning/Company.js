import { useDispatch, useSelector } from "react-redux";
import { updateBudget } from "../reduxstore/CompanySlice";
import { useEffect, useState } from "react";


export function Company() {
    const neoobject=useSelector((state)=>state.company.value);
    const dispatch=useDispatch();
    const [amount, setAmount]=useState(0);
    useEffect(()=>{
        console.log("amount:",amount);
        
    });
    return (
        <section>
             <h4>Company Details</h4>
             <ol>
                <li> {neoobject.cid}</li>
                <li> {neoobject.cname}</li>
                <li> {neoobject.cbudget}</li>
             </ol>
             <input type="number" value={amount} 
             onChange={(e)=>setAmount(e.target.value)} ></input>
             <button onClick={()=>dispatch(updateBudget(parseFloat(amount)))}   className="btn btn-secondary">UPDATE BUDGET</button>
        </section>
    );
}