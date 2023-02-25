import React from 'react';

const ToDoitem = props => {
  return (
    <div className="todo-item">
       <div className="description-wrapper">    
        <input type="checkbox" 
          defaultChecked={props.completed}
          onChange={props.handleChange}
          />      

          <p>{props.description}</p>                 
       </div>
      
    </div>
  )
}

export default ToDoitem;