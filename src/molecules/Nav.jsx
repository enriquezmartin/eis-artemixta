import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/Nav.css'

const Nav = () => {
    return (
        <nav>
            <NavLink className= {
                ({isActive} ) => (isActive ? "activo" : "inactivo")
            } to="/">Inicio</NavLink>

            <NavLink className= {
                ({isActive} ) => (isActive ? "activo" : "inactivo")
            } to="/paneladmin">Panel de Admin</NavLink>
        </nav>
    )
}

export default Nav