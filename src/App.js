import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Calculator.css";
import "./Formulario.css";
import "./Operations.css";

import Calculator from "./Pages/Calculator";
import Formulario from "./Pages/Formulario";
import Operations from "./Pages/Operations";

import Menu from "./components/Menu";

export default function App() {
    return (<>
    <h1>Bienvenido usuario</h1>
    <p>Este trabajo fue realizado por <strong>Francisco Delgado Martínez</strong> del grupo: TI51BIS</p>
        <BrowserRouter>
            <Routes>
                <Route path="/Celsius" element={<Calculator />} />
                <Route path="/Formulario" element={<Formulario />} />
                <Route path="/Operaciones" element={<Operations />} />
            </Routes>

            <Menu />
        </BrowserRouter>
    </>)
}