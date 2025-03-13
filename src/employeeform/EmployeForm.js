
export function EmployeeForm(){
    return(
        <>
        <h1>Employee Form</h1>
        <form>
            <div class="mb-3">
                <label for="exampleInputName" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleInputName" />
            </div>
            <div class="mb-3">
                <label for="exampleInputNumber1" class="form-label">Experience</label>
                <input type="number" class="form-control" id="exampleInputNumber1" />
            </div>
            <div class="mb-3">
                <label for="exampleInputNumber1" class="form-label">Date Of Join</label>
                <input type="datetime-local" class="form-control" id="exampleInputNumber1" />
            </div>
            <div class="mb-3">
                <label for="exampleInputNumber1" class="form-label">Department</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Python</option>
                    <option value="JS">JavaScript</option>
                    <option value="AD">Android</option>
                    <option value="IOS">IOS</option>
                    <option value="PHP">PHP</option>
                    <option value="RJS">ReactJS</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="reset" class="btn btn-primary">Reset</button>
        </form>
        </>
      
    );
}