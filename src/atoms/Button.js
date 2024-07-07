import React from 'react'
import './styles/Button.css'

const Button = ({type, handleClick, text}) => {
    return (
        <button className="myButton" type={type} onClick={handleClick}>{text}</button>
    )
}
export default Button