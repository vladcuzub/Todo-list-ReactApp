  import React from "react";

  function Form({inputText, setInputText, todos, setTodos, setStatus})  {

  const inputTextHandler = (e) => {
  setInputText(e.target.value)
  }
  const submitTodoHandler = (e) => {
  e.preventDefault();
  setTodos([
    ...todos, {text: inputText, completed: false, id: Math.random() * 2 }
  ]);
  setInputText('')
  }
  const statusHandler = (e) => {
    setStatus(e.target.value)
  }
        return (
              <form>
              <input 
              value={inputText} 
              onChange={inputTextHandler}
              type="text" 
              className="todo-input" 
              placeholder="Add your Task..."
               />
              <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
              </button>
              <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                  <option value="all">All</option>
                  <option value="completed">Completed</option>
                  <option value="uncompleted">Uncompleted</option>
                </select>
              </div>
            </form>    
        );
  }

  export default Form;