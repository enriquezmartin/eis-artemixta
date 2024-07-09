import React from 'react';
import './styles/CourseDisplay.css';

const CourseDisplay = ({ course, professor }) => {
    return (
        <div className="course-card">
            <div className="course-card-title">
                Clase: {course.clase}
            </div>
            <div className="course-card-content">
                <p>Sede: {course.sede}</p>
                <p>Fecha: {course.fecha}</p>
                <p>Hora: {course.hora}</p>
                <p>Profesor/a: {professor ? professor.id : '' } {professor ? professor.nombre : 'Desconocido'}</p>
                <p>Nivel: {course.nivel}</p>
            </div>
        </div>
    );
};

export default CourseDisplay;
