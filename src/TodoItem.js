function TodoItem (prompt){
    return (
      <li>
        <span>V </span>
        <p>{prompt.text}</p>
        <span>X</span>
      </li>
    );
  }

  export { TodoItem };