import { NavLink } from 'react-router-dom'
import "./menu.css"

export default function Menu() {
    return (<>
    <div>
        <ul>
            <li>
                <NavLink className={({isActive}) => isActive ? "active1" : "active4"} to="/Celsius">Calcular grados</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active2" : "active4"} to="/Formulario">Formulario</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active3" : "active4"} to="/Operaciones">Suma y Multiplicación</NavLink>
            </li>
        </ul>
    </div>
    </>)
}