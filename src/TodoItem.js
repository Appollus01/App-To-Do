import "./css/TodoItem.css"

function TodoItem (props){
    return (
      <li className="todo-item">
        <div className="todo-item-content">
          <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>V </span>
          <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
          <span className="close-todo-item">X</span>
          
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