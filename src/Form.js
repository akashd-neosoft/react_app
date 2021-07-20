import './App.css'

function Form(){
    return (
        <>
        <div class="container">
        <h2>Add Cake Details</h2>
        <form>
            <div class="form-group">
                <label for="formGroupExampleInput">Cake Name:</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Your Full Name" />
            </div>
            <div className="price">
                <div class="form-group">
                    <label for="formGroupExampleInput">Price:</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Your Price" />
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput">Weight:</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Your Weight" />
                </div>

            </div>
            <div class="form-group">
                <label for="formGroupExampleInput">Description:</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Your Full Address" />
            </div>
            <div className="option_container">
                <div className="select_container">
                    <label>Type: </label>
                    <select>
                        <option>Type 1</option>
                        <option>Type 2</option>
                        <option>Type 3</option>
                    </select>
                </div>
                <div className="checkbox_container">
                    <label>Eggless: </label>
                    <input type="checkbox" />
                </div>
            </div>
        </form>
        </div>
        </>
    )
}

export default Form;