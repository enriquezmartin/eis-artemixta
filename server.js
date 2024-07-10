const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 5000;

//const apiUrl = process.env.REACT_APP_API_URL;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors({ origin: "https://artemixta-7caea27de0d2.herokuapp.com", credentials: true })) //https://artemixta-7caea27de0d2.herokuapp.com

let courses = require(`./courses.json`);
let professors = require('./prof.json');

// Obtener cursos
app.get(`/api/courses`, (req, res) => {
    return res.json(courses);
});

// Crear curso
app.post(`/api/courses`, (req, res) => {
    const newCourse = req.body;
    newCourse.id = courses.length ? courses[courses.length - 1].id + 1 : 1;
    courses.push(newCourse);
    fs.writeFileSync('courses.json', JSON.stringify(courses));
    res.status(201).json(newCourse);
});

// Eliminar curso
app.delete(`/api/courses/:id`, (req, res) => {
    const { id } = req.params;
    const courseIndex = courses.findIndex(course => course.id === parseInt(id, 10));

    if (courseIndex !== -1) {
        courses.splice(courseIndex, 1);
        fs.writeFileSync('courses.json', JSON.stringify(courses));
        res.status(200).json({ message: 'Curso eliminado con éxito' });
    } else {
        res.status(404).json({ message: 'Curso no encontrado' });
    }
});


// Obtener profesores
app.get(`/api/prof`, (req, res) => {
    return res.json(professors);
});

// Crear profesor
app.post(`/api/prof`, (req, res) => {
    const newProfessor = req.body;
    newProfessor.id = professors.length ? professors[professors.length - 1].id + 1 : 1;
    professors.push(newProfessor);
    fs.writeFileSync('prof.json', JSON.stringify(professors));
    res.status(201).json(newProfessor);
});

app.get(`*`, (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en ${PORT}`);
});
