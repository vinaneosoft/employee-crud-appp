import { useDispatch, useSelector } from "react-redux";
import { updateBudget } from "../reduxstore/CompanySlice";


export function Company() {
    const neoobject=useSelector((state)=>state.company.value);
    const dispatch=useDispatch();
    return (
        <section>
             <h4>Company Details</h4>
             <ol>
                <li> {neoobject.cid}</li>
                <li> {neoobject.cname}</li>
                <li> {neoobject.cbudget}</li>
             </ol>
             <button onClick={()=>dispatch(updateBudget(6000))}   className="btn btn-secondary">UPDATE BUDGET</button>
        </section>
    );
}