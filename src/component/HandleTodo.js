import React, { Component } from 'react';

export default class HandleTodo extends Component {

    state = {
        todotext: ""
    };

    handleonchange = (e) => {
        this.setState({
            todotext: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.HandleTodo()
    }

  render() {
    return  <div className="row justify-content-md-center mt-5">
                <div className="col col-md-7">
                <form onSubmit={this.handleSubmit}>
            <div className="input-group mb-3">
                            <input type="text" className="form-control" onChange={this.handleonchange} value={this.state.todotext}   placeholder="Add new Task overhere"   aria-describedby="button-addon2"/>
                            <button className="btn btn-secondary" type="button" ><i className="fas fa-plus-square"></i></button>
            </div>
                 </form>
                    </div>
            </div>;
  }
}
