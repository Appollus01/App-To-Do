import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import React from 'react';

const defaultTodos = [
  { text: 'salir a caminar', completed: true},
  { text: 'Tomar el curso de react', completed: false},
  { text: 'Completar curso de fullstack', completed: false},
  { text: 'Completar el curso de javascript', completed: false},
]

function App() {
  return (
    <React.Fragment>
      {/* //componentes */}
      <TodoCounter completed ={16} total = {25}/>
      <TodoSearch />
      
      <TodoList > 

        {defaultTodos.map(todo => (
          <TodoItem 
          key ={ todo.text} 
          text={todo.text}
          completed = {todo.completed} />
        ))}

      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
