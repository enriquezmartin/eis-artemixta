const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));


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
            // Generar un ID único para el nuevo curso
            let newId = 1;
            if (courses.length > 0) {
                const maxId = Math.max(...courses.map(p => p.id));
                newId = maxId + 1;
            }

            const courseWithId = { id: newId, ...newCourse };
            courses.push(courseWithId);

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

app.delete('/api/courses/:id', (req, res) => {
    const { id } = req.params;
    const filePath = path.join(__dirname, 'courses.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading courses file');
        } else {
            let courses = JSON.parse(data);
            courses = courses.filter(course => course.id !== parseInt(id));
            fs.writeFile(filePath, JSON.stringify(courses, null, 2), (err) => {
                if (err) {
                    res.status(500).send('Error writing courses file');
                } else {
                    res.send('Course deleted');
                }
            });
        }
    });
});

// Ruta para obtener todos los profesores
app.get('/api/prof', (req, res) => {
    const filePath = path.join(__dirname, 'prof.json');
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error('Error al leer los profesores:', err);
            return res.status(500).json({ message: 'Error al leer los profesores' });
        }
        try {
            const profs = JSON.parse(data);
            res.status(200).json(profs);
        } catch (parseErr) {
            console.error('Error al parsear los profesores:', parseErr);
            res.status(500).json({ message: 'Error al parsear los profesores' });
        }
    });
});

// Ruta para agregar un nuevo profesor
app.post('/api/prof', (req, res) => {
    const newProf = req.body;
    const filePath = path.join(__dirname, 'prof.json');

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error('Error al leer los profesores:', err);
            return res.status(500).json({ message: 'Error al leer los profesores' });
        }

        try {
            const profs = JSON.parse(data);

            // Generar un ID único para el nuevo profesor
            let newId = 1;
            if (profs.length > 0) {
                const maxId = Math.max(...profs.map(p => p.id));
                newId = maxId + 1;
            }

            const profWithId = { id: newId, ...newProf };
            profs.push(profWithId);

            fs.writeFile(filePath, JSON.stringify(profs, null, 2), (err) => {
                if (err) {
                    console.error('Error al guardar el profesor:', err);
                    return res.status(500).json({ message: 'Error al guardar el profesor' });
                }
                res.status(201).json({ message: 'Profesor creado con éxito', id: newId });
            });
        } catch (parseErr) {
            console.error('Error al parsear los profesores:', parseErr);
            res.status(500).json({ message: 'Error al parsear los profesores' });
        }
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en:${port}`);
});
