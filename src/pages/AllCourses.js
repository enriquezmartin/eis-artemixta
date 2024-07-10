import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseDisplay from "../molecules/CourseDisplay";
import './styles/AllCourses.css'

const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    const [profs, setProfs] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const coursesResponse = await axios.get(`${process.env.REACT_APP_API_URL}/api/courses`);
                const profsResponse = await axios.get(`${process.env.REACT_APP_API_URL}/api/prof`);
                setCourses(coursesResponse.data);
                setProfs(profsResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Error fetching data');
            }
        };

        fetchData();
    }, []);

    const findProfessorById = (id) => {
        return profs.find(prof => prof.id === id);
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
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default AllCourses

