# eis-artemixta
Repositorio de entrega para la materia Elementos de ingeniería de software - UNQ.
## Cómo levantar la aplicación localmente:
- Se debe tener instalado *NodeJS* y *npm*, en particular en este proyecto se usó **node v20.08** 
- Clonar el repositorio usando el comando:

        git clone https://github.com/enriquezmartin/eis-artemixta

- Navegar hacia el directorio recien creado que contiene el repositorio, usando el comando:

        cd <nombre_del_directorio>

- dentro del directorio, correr los comandos: 

        git checkout develop
        npm install

para pasar a la branch que funciona localmente e instalar todas las dependencias usadas por React en el proyecto. Esto puede demorar unos minutos.
- Compilar la aplicación usando el comando:

        npm run build

NOTA: Si nos dice que la ejecución de scripts no está permitida (Windows 10/11) se debe abrir una consola como administrador y correr el comando:

        Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

- Levantar la aplicación usando el comando:

        npm start

La misma se abre por defecto en http://localhost:3000.

- Levantar el servidor de nodejs que sirve como backend usando el comando

        node server/server.js

  El mismo escucha peticiones en http://localhost:5000.
