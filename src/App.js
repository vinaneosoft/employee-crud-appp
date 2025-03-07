import { Header } from './Header/Header';
import './App.css';

function App() {
  return (
    /* jsx element */
   <>
     <h1 className='mainHeading'>EMPLOYEE MANAGEMENT</h1> 
     <Header></Header>
   </>
  );
}










function test1(){
}
 function test2(){
}


export {test1, test2}

export default App;


 /*A module cannot have multiple default exports.*/


// from one module we can export n properties
// u can export more than one pr with normal export
// u can export only one pr as default export