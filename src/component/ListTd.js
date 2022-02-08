import React from 'react';

function ListTd({ text, todo, todoList, settodoList }) {
    const handledelete = () => {
        // console.log(todo);
        settodoList(todoList.filter((el) => el.id !== todo.id));
    }
    const handlecomplete = () => {
        settodoList(todoList.map(el => {
            if (el.id === todo.id) {
                return {
                    ...el , completed : !el.completed,
                }
            }
            return el;
        } ))
    }

    return (<div className="input-group mb-2">
        <span type="text" className={`form-control ${todo.completed ? "compi" : ' '} `}>{text}</span>
        <button onClick={handlecomplete} className="btn btn-success" type="button"
            id="button-addon2"><i className="fas fa-check"></i></button>
        <button onClick={handledelete} className="btn btn-danger" type="button"
            id="button-addon2" ><i className="fas fa-trash-alt"></i></button>
    </div>)
}

export default ListTd;
