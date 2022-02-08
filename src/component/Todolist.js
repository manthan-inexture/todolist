import React from 'react';
import ListTd from './ListTd';

function Todolist({ todoList , settodoList ,filter }) {
    return (
        <div className="row justify-content-md-center">
            <div className="col col-md-5">{
                filter.map((todo) => (
                    <ListTd key={todo.id} todo={todo} text={todo.text} todoList={todoList} settodoList={settodoList}/>
                ))
            }
            </div>
        </div>
    )
}
export default Todolist;
