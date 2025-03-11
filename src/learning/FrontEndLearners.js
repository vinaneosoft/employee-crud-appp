// render tha data from array in ol
/*<ol>
  <li>name1</li>
  <li>name2</li>
  <li>name3</li>
  </ol> */

export function FrontEndLearners(){
    const femployees=['Sarita Pawar','Harish Trivedi', 'Karan Sanu', 'Vina Sarnobat'];
    const lielements=femployees.map((femp, index)=><li key={"fe"+index}>{femp}</li>)
    return (
       <div>
         <h4>Front End Learners</h4>
         <ol>
           {lielements}
         </ol>
       </div>
    );
}