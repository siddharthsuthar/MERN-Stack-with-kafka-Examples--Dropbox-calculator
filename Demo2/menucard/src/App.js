import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import MyToDo from './components/MyToDo';

class App extends Component {

    // handleAddTodo = (newItem) => {
    //     this.setState((state) => {
    //         state.todos.push({
    //             todo: newItem,
    //             status: 'active'
    //         });
    //     });
    // };
    //
    // handleDone = (changedTodo) => {
    //     this.setState((state) => {
    //        state.todos = state.todos.map((item) => {
    //            if(item.todo === changedTodo){
    //                item.status = 'done';
    //            }
    //
    //            return item;
    //        })
    //     });
    // };

    render() {

        return (
            <Jumbotron>
            <MyToDo/>
            </Jumbotron>
        );
    }
}

export default App;