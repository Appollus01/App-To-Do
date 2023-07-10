import React from 'react';
import './css/TodoSearch.css';

function TodoSearch ({searchValue, setSearchValue,}){
  
    return (
      <input className="search-todo" placeholder = "Buscar tarea" value={searchValue} onChange={(event) => {setSearchValue(event.target.value)}}></input>
    );
  }

  export { TodoSearch };