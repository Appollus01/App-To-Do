import React from 'react';
import '../css/EmptyTodo.css'

function EmptyTodos (){
  
    return (
      <div className='EmptyTodo-Container'>

        <p className='EmptyTodo'>No tienes tareas pendientes....</p>
        <p className='addTodo'>Nueva tarea</p>
      </div>
      
    )
  }

  export { EmptyTodos };