
/* single card design */
export function EmployeeCard(){
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src="https://st2.depositphotos.com/1594308/8523/i/450/depositphotos_85237228-stock-photo-happy-businessman-with-touchpad.jpg" className="card-img-top"  />
            <div className="card-body">
                <h5 className="card-title"><span>#id</span> <span>Employee Name</span></h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Department Code</li>
                <li className="list-group-item">Joined on</li>
                <li className="list-group-item">Experience</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">EDIT</a>
                <a href="#" className="card-link">DELETE</a>
            </div>
        </div>
    );
}