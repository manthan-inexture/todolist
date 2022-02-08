import React, { Component } from 'react';
import HandleTodo from './HandleTodo';

export default class TodosData extends Component {
     state = {
         todos: [{
             text: "this is firsrt",
             checked: 'false',
         }]
     };
 
    handleState = () => {
        const newTodos = this.state.todos.concat({ text })
          this.setState({
              toodos: newTodos
          })
    };

  
    
    render() {
            const saveInput = (e) => {
                this.setState({
                    input: e.target.value
                });
            };
   
    const handlenewtodo = () => {
        console.log(this.state);
    }

    const handledelete = (id) => {
      
    }

    const handlechecked = () => {
    }
    const chekedall = () => {
    }
    return (
        <div className="container mt-3">     
            <h1 className='text-center mt-3'>Todo list</h1>
            < HandleTodo handleState={this.HandleTodo}  />
            <div className="row justify-content-md-center">
                <div className="col col-md-5">
                        {this.state.todos.map((todo ,index) => {return (<div className="input-group mb-2" key={index}>          
                                    <div className ="input-group-text">
                                        <input className="form-check-input m t-0"  name='cheky' type="checkbox"  onChange={(e) => handlechecked(e)} />
                                    </div>  
                            <span type="text" className="form-control">{ todo.text}</span>
                                    <button className="btn btn-outline-danger" type="button"
                                        id="button-addon2"><i className="fas fa-trash-alt"></i></button>
                                 </div> )}) }
                    
                </div>
                 < div className = "col col-md-12  text-center" >
                            <button className='btn btn-danger'>Delete All</button>
                            <button className='btn btn-warning' onClick={chekedall}>filter All</button>
                    </div>
              </div>
        </div>
    )
};
  }

