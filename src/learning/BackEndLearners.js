export function BackEndLearners(){
  const bemployees=['Sarita Pandey','Manoj Trivedi', 'Karan Patil', 'Kripa Sarnobat'];
  const lielements=bemployees.filter(emp=>emp.toUpperCase().startsWith('K'))
  .map((bemp, index)=><li key={"be"+index}>{bemp}</li>)
  return (
     <div>
       <h4>Back End Learners</h4>
       <ol>
         {lielements}
       </ol>
     </div>
  );
}