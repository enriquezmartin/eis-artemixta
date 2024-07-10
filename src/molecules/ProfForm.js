import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from "../atoms/Button";
import './styles/Forms.css'

const ProfForm = () => {
    const [profesor, setProfesor] = useState({
        nombre: '',
        whatsapp: '',
        ig: '',
        dicta: '',
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfesor((prevProfesor) => ({
            ...prevProfesor,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!profesor.nombre || !profesor.whatsapp || !profesor.ig || !profesor.dicta) {
            setMessage('Todos los campos son obligatorios');
            return;
        }

        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/api/prof`, profesor);
            setMessage('Profesor creado con éxito');
            setProfesor({
                nombre: '',
                whatsapp: '',
                ig: '',
                dicta: '',
            });
        } catch (error) {
            console.error('Error al crear el profesor:', error);
            setMessage('Error al crear el profesor');
        }
    };

    const handleBackClick = () => {
        navigate('/paneladmin');
    };

    return (
        <div className='container'>
            <form name='professorForm' onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-25'>
                        <label>Nombre y Apellido:</label>
                    </div>
                    <div className='col-75'>
                        <input
                            type="text"
                            name="nombre"
                            value={profesor.nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-25'>
                        <label>Whatsapp:</label>
                    </div>
                    <div className='col-75'>
                        <input type="text" name="whatsapp" value={profesor.whatsapp} onChange={handleChange} required/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-25'>
                        <label>Instagram:</label>
                    </div>
                    <div className='col-75'>
                        <input type="text" name="ig" value={profesor.ig} onChange={handleChange} required/>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-25'>
                        <label>Dicta:</label>
                    </div>
                    <div className='col-75'>
                        <select name="dicta" value={profesor.dicta} onChange={handleChange} required>
                            <option value="">Seleccionar</option>
                            <option value="danza clásica">Danza Clásica</option>
                            <option value="jazz">Danza Jazz</option>
                            <option value="danza contemporánea">Danza Contemporánea</option>
                            <option value="canto">Canto</option>
                            <option value="actuación">Actuación</option>
                        </select>
                    </div>
                </div>

                <div className='buttons'>
                    <Button type="submit" text="Agregar profe"/>
                    <Button type="button" text="Volver" handleClick={handleBackClick}/>
                </div>
                {message && <p>{message}</p>}
            </form>

        </div>
    );
};

export default ProfForm;
