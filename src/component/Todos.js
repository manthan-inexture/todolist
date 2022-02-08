import React, { useState,useEffect } from 'react';
import Form from './Form';
import Todolist from './Todolist';
const Todos = () => {  
    
    const [todo, setTodo] = useState("");
    const [todoList, settodoList] = useState([]);
    const [status, setStatus] = useState('all');
    const [filter, setFilter] = useState([]);

    const handlefilter = () =>{
        switch (status) {
            case "completed":
                setFilter(todoList.filter((todos) => todos.completed == true))
                break;
            case "uncompleted":
                setFilter(todoList.filter((todos) => todos.completed == false))
                break;
            default:
                setFilter(todoList);
        }
    }
    useEffect(() => {
        console.log("called");
        handlefilter();
    }, [todoList,status ]);
    
    // console.log(todoList);
    return (
        <div className="container mt-3">     
            <h1 className='text-center mt-3'>Todo list </h1>
            <Form todoList={todoList} todo = {todo} setStatus={setStatus} settodoList={settodoList} setTodo={setTodo}/>
            <Todolist filter={filter} todoList={todoList} settodoList={settodoList} />
        </div>
    )
};

export default Todos;
