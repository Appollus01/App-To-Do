import {CompleteIcon} from './CompleteIcon';
import {DeleteIcon} from './DeleteIcon';

import "./css/TodoItem.css"

function TodoItem (props){
    return (
      <li className="todo-item">
        <div className="todo-item-content">
          <CompleteIcon completed={props.completed} onComplete={props.onComplete}/>
          {/* <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} onClick={props.onComplete}>V </span> */}
          <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
          <DeleteIcon onDelete={props.onDelete}/>
          {/* <span className="close-todo-item" onClick={props.onDelete}>X</span> */}
          
        </div>
        <div className="bar-container"></div>
        <div className="todo-item-footer">
          <button className="create-sub-todo-button">Crear sub tarea</button>
          <span className="show-content">Mostrar contenido v</span>
        </div>
        
      </li>
    );
  }

  export { TodoItem };