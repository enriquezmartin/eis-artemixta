import React from "react";
import './styles/CourseDisplay.css';

const CourseDisplay = ({course}) => {
    return (
        <div className="course-card">
            <div className="course-card-title">Clase: {course.clase}</div>
            <div className="course-card-content">Sede: {course.sede}</div>
            <div className="course-card-content">Profesor/a: {course.profesor}</div>
            <div className="course-card-content">Nivel: {course.nivel}</div>
        </div>
    );
};

export default CourseDisplay;
