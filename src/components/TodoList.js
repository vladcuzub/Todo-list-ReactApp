import React from "react";
import Todo from "./Todo";

function Todolist({ todos, setTodos, filterTodos}) {
  
      return (
            <div className="todo-container">
            <ul className="todo-list">
                  {filterTodos.map(todo =>(
                  <Todo 
                  todos={todos}
                  setTodos={setTodos}
                  key={todo.id} 
                  text={todo.text} 
                  todo={todo}
                  filterTodos={filterTodos}
                />
                  ))}
            </ul>
          </div>    
      )
}
export default Todolist;  