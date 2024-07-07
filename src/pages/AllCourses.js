import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllCourses = () => {
    //const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
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

    return (
        <div>
            <h2>Todos los cursos</h2>
            <ul>
                {courses.map((course, index) => (
                    <li key={index}>
                        Clase: {course.clase}, Sede: {course.sede}, Profesor/a: {course.profesor}, Nivel: {course.nivel}
                    </li>
                ))}
            </ul>
        </div>
    )
};
export default AllCourses

