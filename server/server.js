const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// Ruta para obtener todos los cursos
app.get('/api/courses', (req, res) => {
    const filePath = path.join(__dirname, 'courses.json');
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error('Error al leer los cursos:', err);
            return res.status(500).json({ message: 'Error al leer los cursos' });
        }
        try {
            const courses = JSON.parse(data);
            res.status(200).json(courses);
        } catch (parseErr) {
            console.error('Error al parsear los cursos:', parseErr);
            res.status(500).json({ message: 'Error al parsear los cursos' });
        }
    });
});

// Ruta para agregar un nuevo curso
app.post('/api/courses', (req, res) => {
    const newCourse = req.body;
    const filePath = path.join(__dirname, 'courses.json');

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error('Error al leer los cursos:', err);
            return res.status(500).json({ message: 'Error al leer los cursos' });
        }

        try {
            const courses = JSON.parse(data);
            courses.push(newCourse);

            fs.writeFile(filePath, JSON.stringify(courses, null, 2), (err) => {
                if (err) {
                    console.error('Error al guardar el curso:', err);
                    return res.status(500).json({ message: 'Error al guardar el curso' });
                }
                res.status(201).json({ message: 'Curso creado con éxito' });
            });
        } catch (parseErr) {
            console.error('Error al parsear los cursos:', parseErr);
            res.status(500).json({ message: 'Error al parsear los cursos' });
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
