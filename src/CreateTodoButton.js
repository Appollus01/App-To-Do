import "./css/CreateTodoButton.css"

function CreateTodoButton (){
    return (
      <button className="CreateTodoButton" onClick={(event) => console.log("hiciste click")}>
        +
      </button>
    );
  }

  export { CreateTodoButton };