import { Component } from 'react';
import './App.css';
import ToDoitem from './ToDoitem/ToDoitem.js';
import todosDate from './todosData.js';
import ToDozagl from './zagl';

class App extends Component {

  constructor(){
    super();
    this.state = {
      todoItems : todosDate
    }
  }
  handleChange =  id =>{
    const index = this.state.todoItems.map(item => item.id).indexOf(id);
    this.setState(state =>{
      let{todoItems} = state;
      todoItems[index].completed =true;
      return todoItems;
    })
  }
  render(){
    const {todoItems} = this.state;
    const activeTasks = todoItems.filter(task=> task.completed ===false);
    const completedTasks =todoItems.filter(task => task.completed ===true);
    const finalTasks = [...activeTasks, ...completedTasks].map(item =>{
      return (
        <div className="App">          
         <ToDoitem
         key = {item.id}
         description = {item.description}
         completed = {item.completed}
         handleChange={() => {this.handleChange(item.id)}}
         />
        </div>
      )
    }) 
    return (
      <div className="App">
        <ToDozagl/>
      {finalTasks}
      </div>
    );
  }  
}

export default App;
