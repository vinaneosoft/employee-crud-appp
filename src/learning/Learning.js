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
    return(
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
    );
}