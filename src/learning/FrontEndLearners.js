// render tha data from array in ol
/*<ol>
  <li>name1</li>
  <li>name2</li>
  <li>name3</li>
  </ol> */

import { useContext, useEffect } from "react";
import { MyContext } from "../App";

export function FrontEndLearners({courseName}){

  let {cname,year}=useContext(MyContext);

    const femployees=['Sarita Pawar','Harish Trivedi', 'Karan Sanu', 'Vina Sarnobat'];
    const lielements=femployees.map((femp, index)=><li key={"fe"+index}>{femp}</li>)
   
    return (
       <div>
          <p>
            <b>{cname} established in {year}</b>
          </p>
         <h4>Front End Learners</h4>
         <h5>{courseName}</h5>
         <ol>
           {lielements}
         </ol>
       </div>
    );
}