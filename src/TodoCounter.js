import React from 'react';
import './css/TodoCounter.css';
import { TodoContext } from './TodoContext';

function TodoCounter (){
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)
  var barCounterFilled = (completedTodos/totalTodos)*100 + "%";
    return (
      <><h1 className='TodoCounter'>
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> ToDo
      </h1>
      
      <div className="bar-counter-container" >
        <div className='progress-bar' style={{width: barCounterFilled}} ></div>
      </div></>
    );
  }

  export { TodoCounter };