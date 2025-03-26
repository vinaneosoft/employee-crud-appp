import { useSelector } from "react-redux";


export function Company() {
    const neoobject=useSelector((state)=>state.company.value);
    return (
        <section>
             <h4>Company Details</h4>
             <ol>
                <li> {neoobject.cid}</li>
                <li> {neoobject.cname}</li>
                <li> {neoobject.cbudget}</li>
             </ol>
             <button className="btn btn-secondary">UPDATE BUDGET</button>
        </section>
    );
}