import React, { useState } from 'react';

const Todos = () => {
    const [newTodo, setNewTodo] = useState("");
    const [items, setItems] = useState([ ]);

    const handlenewtodo = () => {
        if (!newTodo) {
        } else {
            setItems([...items, newTodo]);
            setNewTodo('')
        }
    }

    const handledelete = (id) => {
        const upitems = items.filter((element, index) => {
            return index !== id;
        });
        setItems(upitems);
    }

    const handlechecked = (e,id) => {
        const styleElement = document.getElementById(id);
        if (e.target.checked == true) {
            styleElement.style.textDecoration = "line-through";
            styleElement.style.backgroundColor = "#a2e1a6"
        } else {
            styleElement.style.backgroundColor = "white"
            document.getElementById(id).style.textDecoration = "none";
        }
    }
    const chekedall = () => {
         let  checkboxes = document.getElementsByName("cheky");
        var selectedCboxes = Array.prototype.slice.call(checkboxes).filter(ch => ch.checked == true);
        let unselectedCboxes = Array.prototype.slice.call(checkboxes).filter(ch => ch.checked == false);
       console.log(selectedCboxes);
    }
    return (
        <div className="container mt-3">     
                <h1 className='text-center mt-3'>Todo list</h1>
            <div className="row justify-content-md-center mt-5">
                <div className="col col-md-7">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Add new Task overhere" value={newTodo}  onChange={(e ) => setNewTodo(e.target.value)} aria-describedby="button-addon2"/>
                            <button className="btn btn-secondary" type="button"  onClick={handlenewtodo}><i className="fas fa-plus-square"></i></button>
                            </div>
                    </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="col col-md-5">
                    {
                        items.map((element, index) => {
                            return (
                                <div className="input-group mb-2" key={index}>          
                                    <div className="input-group-text">
                                        <input className="form-check-input m t-0"  name='cheky' type="checkbox"  onChange={(e) => handlechecked(e,index)} />
                                    </div>  
                                    <span type="text" id={index}  className="form-control">{element}</span>
                                    <button className="btn btn-outline-danger" type="button"
                                        id="button-addon2" onClick={ () => handledelete(index)}><i className="fas fa-trash-alt"></i></button>
                                 </div> )
                        })
                            }
                </div>
                <div>{ }</div>
                 < div className = "col col-md-12  text-center" >
                            <button className='btn btn-danger' onClick={() =>   setItems([]) }>Delete All</button>
                            {/* <button className='btn btn-warning' onClick={chekedall}>filter All</button> */}
                    </div>
              </div>
        </div>
    )
};

export default Todos;
