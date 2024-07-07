import React from "react";
const CourseDisplay = ({course}) => {
    return(
        <>
            Clase: {course.clase}, Sede: {course.sede}, Profesor/a: {course.profesor}, Nivel: {course.nivel}
        </>
    )
};
export default CourseDisplay;