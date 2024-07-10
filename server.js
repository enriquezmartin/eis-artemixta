const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 5000;

// Configurar CORS para permitir solicitudes desde tu dominio
const corsOptions = {
    origin: 'https://artemixta-7caea27de0d2.herokuapp.com', // tu dominio
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

let courses = require('./courses.json');
let professors = require('./prof.json');

// Obtener cursos
app.get('/api/courses', (req, res) => {
    res.json(courses);
});

// Crear curso
app.post('/api/courses', (req, res) => {
    const newCourse = req.body;
    newCourse.id = courses.length ? courses[courses.length - 1].id + 1 : 1;
    courses.push(newCourse);
    fs.writeFileSync('courses.json', JSON.stringify(courses));
    res.status(201).json(newCourse);
});

// Obtener profesores
app.get('/api/prof', (req, res) => {
    res.json(professors);
});

// Crear profesor
app.post('/api/prof', (req, res) => {
    const newProfessor = req.body;
    newProfessor.id = professors.length ? professors[professors.length - 1].id + 1 : 1;
    professors.push(newProfessor);
    fs.writeFileSync('prof.json', JSON.stringify(professors));
    res.status(201).json(newProfessor);
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en ${PORT}`);
});
