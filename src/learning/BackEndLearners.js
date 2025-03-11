export function BackEndLearners(){
  const bemployees=['Sarita Pandey','Manoj Trivedi', 'Karan Patil', 'Deepa Sarnobat'];
  const lielements=bemployees.map((bemp, index)=><li key={"be"+index}>{bemp}</li>)
  return (
     <div>
       <h4>Back End Learners</h4>
       <ol>
         {lielements}
       </ol>
     </div>
  );
}