

export function EmployeeCard(){
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={"https://st2.depositphotos.com/1594308/8523/i/450/depositphotos_85237228-stock-photo-happy-businessman-with-touchpad.jpg"} className="card-img-top"  />
            <div className="card-body">
                <h5 className="card-title"><span>#id</span> <span>Employee Name</span></h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Department Code</li>
                <li class="list-group-item">Joined on</li>
                <li class="list-group-item">Experience</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">EDIT</a>
                <a href="#" class="card-link">DELETE</a>
            </div>
        </div>
    );
}