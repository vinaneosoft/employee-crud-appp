

export function AdminLogin(){

    return (
        <div className="p-5 bg-dark text-white">
            <h4>ADMIN LOGIN FORM</h4>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <button type="reset" className="btn btn-primary">Reset</button>
            </form>
        </div>
    );
}