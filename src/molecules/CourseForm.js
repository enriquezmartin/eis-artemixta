import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from "../atoms/Button";
import './styles/Forms.css'

const CourseForm = () => {
    const [formData, setFormData] = useState({
        clase: '',
        sede: '',
        profesor: '',
        nivel: '',
    });

    const [message, setMessage] = useState('');
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Obtener todos los cursos al cargar el componente
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/courses');
                setCourses(response.data);
            } catch (error) {
                console.error('Error al obtener los cursos:', error);
            }
        };

        fetchCourses();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { clase, sede, profesor, nivel } = formData;
        if (clase && sede && profesor && nivel) {
            try {
                const response = await axios.post('http://localhost:5000/api/courses', formData);
                console.log('Response:', response.data);
                setMessage(response.data.message);
                setCourses([...courses, formData]);
            } catch (error) {
                console.error('Error al crear el curso:', error);
                setMessage('Hubo un error al crear el curso');
            }
        } else {
            setMessage('Todos los campos son obligatorios');
        }
    };

    const handleBackClick = () => {
        navigate('/paneladmin');
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-25'>
                        <label>Clase:</label>
                    </div>
                    <div className='col-75'>
                        <select name="clase" value={formData.clase} onChange={handleChange}>
                            <option value="">Seleccione una clase</option>
                            <option value="danza clásica">Danza clásica</option>
                            <option value="jazz">Jazz</option>
                            <option value="danza contemporánea">Danza contemporánea</option>
                            <option value="canto">Canto</option>
                            <option value="actuación">Actuación</option>
                        </select>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-25'>
                        <label>Sede:</label>
                    </div>
                    <div className='col-75'>
                        <select name="sede" value={formData.sede} onChange={handleChange}>
                            <option value="">Seleccione una sede</option>
                            <option value="microcentro">Microcentro</option>
                            <option value="zona sur">Zona sur</option>
                            <option value="zona norte">Zona norte</option>
                        </select>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-25'>
                        <label>Profesor/a:</label>
                    </div>
                    <div className='col-75'>
                        <input
                            type="text"
                            name="profesor"
                            value={formData.profesor}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-25'>
                        <label>Nivel de la clase:</label>
                    </div>
                    <div className='col-75'>
                        <select name="nivel" value={formData.nivel} onChange={handleChange}>
                            <option value="">Seleccione un nivel</option>
                            <option value="principiante">Principiante</option>
                            <option value="intermedio">Intermedio</option>
                            <option value="avanzado">Avanzado</option>
                        </select>
                    </div>
                </div>
                <div className='buttons'>
                    <Button type="submit" text="Crear curso"/>
                    <Button type="button" text="Volver" handleClick={handleBackClick}/>
                </div>
                {message && <p>{message}</p>}
            </form>

        </div>
    );
};

export default CourseForm;
