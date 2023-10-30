# AppLogictics

Aplicación básica con registro e inicio de sesión de usuarios, emulando una empresa de paquetería, donde puedes ver una tabla de precios por kg, listados de usuarios, registros de envíos (lectura, escritura y eliminación) y empresas de transporte (operaciones CRUD).

Vale la pena señalar que se requieren algunas mejoras estéticas para una experiencia visual mejorada.

Además, se ha implementado un sistema basado en roles en la API.

## Backend con ![Nest.js](https://img.shields.io/badge/Nest.js-E0234E?style=for-the-badge&logo=nestjs&logoColor=white), ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white), y ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

Antes de continuar, asegúrese de tener Docker y Node.js instalados en su sistema.

:heavy_check_mark: [Node.js](https://nodejs.org/)

:whale: [Docker](https://www.docker.com/products/docker-desktop/)

### Inicializar Backend
 Una vez que los tenga instalados, abra su terminal, vaya al directorio 'backend' y ejecute 'docker-compose up -d'. Este comando construirá la imagen de la base de datos MySQL con tablas predefinidas y también iniciará el backend.

El backend se ejecutará en http://localhost:3001.

 ### Comandos
 En el directorio ./backend

 docker-compose up -d

 Si tienes algún problema con docker-compose, ejecuta npm i

## Frontend con ![Angular Logo](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white) y ![TypeScript Logo](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

### Inicializar Frontend
Para inicializar el frontend, siga estos pasos:

Abra su terminal.

Navegue al directorio ./frontend.

Ejecute el comando npm i.

Ejecute el comando ng serve.

Esto iniciará el servidor de desarrollo para su aplicación Angular. Asegúrese de tener Angular CLI instalado y configurado correctamente antes de ejecutar este comando.

El frontend estará disponible en http://localhost:4200.

### Comandos
En el directorio ./frontend 

npm i

ng serve

### Usuario de prueba
email: test@test.es

password: 123456

#### Contact

Email: pablodamasor@gmail.com

Linkedin: https://www.linkedin.com/in/pablodamasortega/
