import React from 'react';
import Todos from './Todos';
import uniqid from 'uniqid';
function Form({ todo, setTodo, todoList, settodoList, setStatus }) {
    const handleinput = (e) => {
      
            setTodo(e.target.value);
        
        // console.log(e.target.value);
    }
    const handlesubmit = () => {
        if (todo == "") {

        }
        else {
            settodoList([
                ...todoList, { text: todo, completed: false, id: uniqid() }
            ])
            setTodo("");
        }
       
    }
    const handlestatus = (e) => {
        setStatus(e.target.value);
    }
    return (
        <div className="row justify-content-md-center mt-5">
            <div className="col col-md-6">
                <form className="input-group mb-3">
                    <input type="text" value={todo} onChange={handleinput} className="form-control" placeholder="Add new Task overhere" aria-describedby="button-addon2" />
                    <button onClick={handlesubmit} className="btn btn-success" type="button"><i className="fas fa-plus-square"></i></button>
                </form>
            </div>
            <div className="col-md-2">
                < select onChange={handlestatus} className="form-control btn btn-success dropdown-toggle" id="exampleFormControlSelect1" >
                    <option value="all">All </option>
                    <option value="completed"> Completed </option>
                    <option value="uncompleted" > Uncompleted </option>
                </select>
            </div>
        </div>);
}
export default Form;
