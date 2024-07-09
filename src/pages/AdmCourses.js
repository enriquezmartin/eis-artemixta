import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseDisplay from "../molecules/CourseDisplay";
import './styles/AllCourses.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdmCourses = () => {
    const [courses, setCourses] = useState([]);
    const [profs, setProfs] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const coursesResponse = await axios.get('http://localhost:5000/api/courses');
                const profsResponse = await axios.get('http://localhost:5000/api/prof');
                setCourses(coursesResponse.data);
                setProfs(profsResponse.data);
            } catch (error) {
                console.error('Error al recolectar los datos:', error);
                setError('Error al recolectar los datos');
            }
        };

        fetchData();
    }, []);

    const findProfessorById = (id) => {
        return profs.find(prof => prof.id === id);
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('¿Estás seguro de que quieres borrar este curso?');
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:5000/api/courses/${id}`);
                setCourses(courses.filter(course => course.id !== id));
                toast.success('Curso borrado con éxito');
            } catch (error) {
                console.error('Error deleting course:', error);
                setError('Error deleting course');
                toast.error('Error al borrar el curso');
            }
        }
    };

    return (
        <div className="course-list-container">
            {error && <p className="error-message">{error}</p>}
            <ul className="course-list">
                {courses.map((course, index) => {
                    const professor = findProfessorById(course.profesorId);
                    return (
                        <li key={index} className="course-list-item">
                            <CourseDisplay course={course} professor={professor} />
                            <button className="delete-button" onClick={() => handleDelete(course.id)}>Borrar</button>
                        </li>
                    );
                })}
            </ul>
            <ToastContainer />
        </div>
    );
};

export default AdmCourses;
