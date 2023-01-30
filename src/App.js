import React, {useState, useEffect} from 'react';
import './App.css';
//import Components
import Form from './components/Form';
import Todolist from './components/TodoList';
import Todo from './components/Todo';

const getLocalStorage = () => {
  let todos = localStorage.getItem('todos');
  if(todos){
    return JSON.parse(localStorage.getItem('todos'))
  } else {
    return []
  }
}

function App() {

  const [inputText, setInputText] = useState('');
  const [todos,setTodos] = useState(getLocalStorage());
  const [status,setStatus] = useState('all')
  const [filterTodos,setFilterTodos] = useState([]);
//Storge local
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
      },[todos]);
  
  //use effect
  useEffect(() => {
    filterHandler();
  }, [todos,status]);

//Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  }
  return (
    <div className='App'>
      <header>
        <h3>Vlad todo List </h3>
      </header>
      <Form 
      inputText={inputText}
      todos={todos}
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStatus}
      />
      <Todolist 
      filterTodos={filterTodos}
      setTodos={setTodos} 
      todos={todos}
      />
    </div>
  )
}

export default App;
