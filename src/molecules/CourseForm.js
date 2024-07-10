import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from "../atoms/Button";
import './styles/Forms.css'

const CourseForm = () => {
    const [course, setCourse] = useState({
        sede: '',
        fecha: '',
        hora: '',
        profesorId: '',
        nivel: ''
    });
    const [profs, setProfs] = useState([]);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProf = async () => {
            try {
                const profsResponse = await axios.get(`${process.env.REACT_APP_API_URL}/api/prof`);
                setProfs(profsResponse.data);
            } catch (error) {
                console.error('Error fetching professors:', error);
            }
        };

        fetchProf();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse((prevCourse) => ({
            ...prevCourse,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!course.sede || !course.fecha || !course.hora || !course.profesorId || !course.nivel) {
            setMessage('Todos los campos son obligatorios');
            return;
        }

        const courseToSubmit = {
            ...course,
            profesorId: parseInt(course.profesorId, 10)
        };

        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/api/courses`, courseToSubmit);
            setMessage('Curso creado con éxito');
            setCourse({
                sede: '',
                fecha: '',
                hora: '',
                profesorId: '',
                nivel: ''
            });
        } catch (error) {
            console.error('Error al crear el curso:', error);
            setMessage('Error al crear el curso');
        }
    };

    const handleBackClick = () => {
        navigate('/paneladmin');
    };

    return (
        <div className='container'>
            <form name='courseForm' onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-25'>
                        <label>Sede:</label>
                    </div>
                    <div className='col-75'>
                        <select name="sede" value={course.sede} onChange={handleChange} required>
                            <option value="">Seleccione una sede</option>
                            <option value="microcentro">Microcentro</option>
                            <option value="zona sur">Zona sur</option>
                            <option value="zona norte">Zona norte</option>
                        </select>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-25">
                        <label>Fecha:</label>
                    </div>
                    <div className='col-75'>
                        <input type="date" name="fecha" value={course.fecha} onChange={handleChange} required/>
                    </div>
                </div>

                <div className='row'>

                    <div className="col-25">
                        <label>Horario:</label>
                    </div>
                    <div className='col-75'>
                        <input type="time" name="hora" value={course.hora} onChange={handleChange} required/>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-25'>
                        <label>Profesor/a:</label>
                    </div>
                    <div className='col-75'>
                        <select name="profesorId" value={course.profesorId} onChange={handleChange} required>
                            <option value="">Seleccione un curso...</option>
                            {profs.map((prof , index) => {
                                return(
                                    <option value={prof.id} key={index}>{prof.nombre}  </option>
                                );
                            })}
                        </select>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-25'>
                        <label>Nivel de la clase:</label>
                    </div>
                    <div className='col-75'>
                        <select name="nivel" value={course.nivel} onChange={handleChange} required>
                            <option value="">Seleccione un nivel</option>
                            <option value="principiante">Principiante</option>
                            <option value="intermedio">Intermedio</option>
                            <option value="avanzado">Avanzado</option>
                        </select>
                    </div>
                </div>
                <div className='form-buttons'>
                    <Button type="submit" text="Crear curso"/>
                    <Button type="button" text="Volver" handleClick={handleBackClick}/>
                </div>
                {message && <p>{message}</p>}
            </form>

        </div>
    );
};

export default CourseForm;
