import './css/TodoCounter.css';

function TodoCounter ({total, completed}){
  var barCounterFilled = (completed/total)*100 + "%";
    return (
      <><h1 className='TodoCounter'>
        Has completado <span>{completed}</span> de <span>{total}</span> ToDo
      </h1>
      
      <div className="bar-counter-container" >
        <div className='progress-bar' style={{width: barCounterFilled}} ></div>
      </div></>
    );
  }

  export { TodoCounter };