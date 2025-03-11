import { BackEndLearners } from "./BackEndLearners";
import { FrontEndLearners } from "./FrontEndLearners";

export function Learning(){
    // conditional statements
    const minagelimit=20;
    let empAge=40;
    const maxagelimit=40;
    const checkAge=()=>{
        if(empAge>=minagelimit && empAge<=maxagelimit)
            return 'ALLOWED';
        else
            return 'NOT ALLOWED';
    }
    const courseType="front end";
    const courseName="React.js";
    const getLearners=()=>{
        if(courseType=="front end")
            return <FrontEndLearners/>
        else if (courseType=="back end")
            return <BackEndLearners />
        else
            return <>
                <FrontEndLearners/>
                <BackEndLearners />
            </>
    }
    return(
        <>
            <section>
                <p>Minimum age limit for enrolling for training is {minagelimit}</p>
                <p>Age of employee who is trying to enroll is {empAge}</p>
                <h3>IF condition</h3>
                <p>{(empAge>=minagelimit && empAge<=maxagelimit) && 'You are allowed to enroll for training'}</p>
                <h3>IF ELSE condition</h3>
                <p>{(empAge>=minagelimit && empAge<=maxagelimit) ? 'ALLOWED' : 'NOT ALLOWED'}</p>
                <h3>function call binding</h3>
                <p>{checkAge()}</p>
            </section>
            <hr></hr>
            <section>
                <h3>Course Learners</h3>
                <div>
                    {
                        courseType=="front end" ? <FrontEndLearners courseName={courseName}></FrontEndLearners> 
                        : courseType=="back end" ? <BackEndLearners></BackEndLearners> 
                        : <><FrontEndLearners></FrontEndLearners> <BackEndLearners></BackEndLearners></>
                    }
                </div>
                <h3>Course Learners from function</h3>
                <div>
                    {getLearners()}
                </div>
            </section>
        </>
    );
}

