Claro, aquí tienes una breve documentación para los endpoints de tu `server.js`.

## Documentación de Endpoints

### Cursos

#### Obtener Todos los Cursos

- **Endpoint:** `GET /api/courses`

- **Descripción:** Devuelve una lista de todos los cursos disponibles.

- **Respuesta Exitosa:**

  - **Código de Estado:** 200 OK

  - **Cuerpo de la Respuesta:** JSON array de cursos.

``` json
  [  
    {  
      "sede": "microcentro",  
      "fechaHora": "2024-07-10T10:00:00",  
      "profesorId": 1,  
      "nivel": "principiante"  
    },  
    ...  
  ]  
```

#### Crear un Nuevo Curso

- **Endpoint:** `POST /api/courses`

- **Descripción:** Crea un nuevo curso.

- **Cuerpo de la Solicitud:**

```json
{
  "sede": "microcentro",
  "fechaHora": "2024-07-10T10:00:00",
  "profesorId": 1,
  "nivel": "principiante"
}
```

- **Respuesta Exitosa:**

  - **Código de Estado:** 201 Created

  - **Cuerpo de la Respuesta:** JSON del curso creado.

```json
{
  "sede": "microcentro",
  "fechaHora": "2024-07-10T10:00:00",
  "profesorId": 1,
  "nivel": "principiante"
}
```
#### Eliminar un Curso

- **Endpoint:** `DELETE /api/courses/:id`

- **Descripción:** Elimina un curso específico.

- **Parámetros de la URL:**

  - `id`: El ID del curso a eliminar.

- **Respuesta Exitosa:**

  - **Código de Estado:** 200 OK

  - **Cuerpo de la Respuesta:** Mensaje de confirmación.

```json
{
  "message": "Curso eliminado"
}
```

### Profesores

#### Obtener Todos los Profesores

- **Endpoint:** `GET /api/prof`

- **Descripción:** Devuelve una lista de todos los profesores disponibles.

- **Respuesta Exitosa:**

  - **Código de Estado:** 200 OK

  - **Cuerpo de la Respuesta:** JSON array de profesores.

```json
[
  {
    "id": 1,
    "nombre": "Juan Pérez",
    "whatsapp": "+123456789",
    "ig": "juanperez",
    "dicta": "danza clásica"
  },
  ...
]
```

#### Crear un Nuevo Profesor

- **Endpoint:** `POST /api/prof`

- **Descripción:** Crea un nuevo profesor.

- **Cuerpo de la Solicitud:**

```json
{
  "nombre": "Juan Pérez",
  "whatsapp": "+123456789",
  "ig": "juanperez",
  "dicta": "danza clásica"
}
```

- **Respuesta Exitosa:**

  - **Código de Estado:** 201 Created

  - **Cuerpo de la Respuesta:** JSON del profesor creado con un ID único.

```json
{
  "id": 1,
  "nombre": "Juan Pérez",
  "whatsapp": "+123456789",
  "ig": "juanperez",
  "dicta": "danza clásica"
}
```
