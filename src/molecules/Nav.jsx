import {React, useState} from 'react'
import { NavLink , useNavigate} from 'react-router-dom'
import Toggle from 'react-styled-toggle'
import './styles/Nav.css'


const Nav = () => {
    const [role, setRole] = useState('EST'); // 'estudiante' por defecto
    const navigate = useNavigate();
    const handleChange= ()  => {
        const toggled = role==='ADM' ? 'EST' : 'ADM' ;
        setRole(toggled);
        navigate("/");
    }

    return (
        <nav>
            <NavLink className={({ isActive }) => (isActive ? "activo" : "inactivo")} to="/">Inicio</NavLink>

            {role === 'ADM' && (
                <NavLink className={({ isActive }) => (isActive ? "activo" : "inactivo")} to="/paneladmin">Panel de Admin</NavLink>
            )}

            {role === 'EST' && (
                <NavLink className={({ isActive }) => (isActive ? "activo" : "inactivo")} to="/panelestudiante">Panel de Estudiante</NavLink>
            )}
            <Toggle
                defaultChecked={false}
                labelLeft='EST'
                labelRight='ADM'
                onChange={handleChange}
            />
        </nav>
    );
};

export default Nav;