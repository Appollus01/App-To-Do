import "./css/TodoArt.css"
import fondo from './img/4-04.jpg'

function TodoArt () {
    return (
        <div className="art-container">

            <h2>Cosas por hacer.</h2>
            <img src={fondo} alt="Portada">

            </img>
            
            <p>Este michi te ayudara a revisar las actividades por hacer.</p>
        </div>
    );
}

export {TodoArt};