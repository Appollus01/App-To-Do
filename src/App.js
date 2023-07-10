import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoArt } from './TodoArt';
import { CreateTodoButton } from './CreateTodoButton';
import "./css/ContainerTodoListImg.css"


import React from 'react';

const defaultTodos = [
  { text: 'salir a caminar', completed: true},
  { text: 'Tomar el curso de react', completed: false},
  { text: 'Completar curso de fullstack', completed: false},
  { text: 'Completar el curso de javascript', completed: false},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText)
  });
  
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      {/* //componentes */}
      <TodoCounter completed ={completedTodos} total = {totalTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue.toString().toLowerCase()}/>
      <div className='Container-todoList-img'>
        <TodoList > 

          {searchedTodos.map(todo => (
            <TodoItem 
            key ={todo.text} 
            text={todo.text}
            completed = {todo.completed}
            onComplete={() => completeTodo(todo.text)} 
            onDelete={() => deleteTodo(todo.text)}/>
          ))}

        </TodoList>
        <TodoArt />
      </div>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
