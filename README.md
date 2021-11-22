[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6314963&assignment_repo_type=AssignmentRepo)

# AppSalud
"App Salud" es una app enfocada desde el TDD para la gestión de un caso de uso de salud.

## PASOS

### Paso 1:
Iniciamos un proyecto con npm init.

### Paso 2:
Iniciamos un proyecto git con git init.

### Paso 3:
Incluimos las librerías "mocha" y "chai" como devDependencies en el npm package.json para tener Mocha y Chai en nuestro proyecto:
`` npm i -D mocha ``
`` npm i -D chai ``
* -D es para instalar la dependencia como en desarrollo, no para producción.

### Paso 4:
Ponemos en scripts del package.json:
`` "test": "mocha",
   "start": "node src/index.js"
``
para tener los comandos para testear y correr nuestra app.

### Paso 5:
Instalamos las dependencias con `` npm install `` ubicandonos dentro de la carpeta del proyecto.

### Paso 6:
Ejecutamos el proyecto:
  ** - Para testear: ``` npm test ```
  ** - Para correrlo con NodeJS: ``` npm start ```
  ** - Para correrlo en el navegador: Abrimos el index.html dentro de /src/ (necesitas el apunte de abajo para que esto funcione).

#### Apunte para incluir una versión HTML (Web compatible) al proyecto:

- Necesitas instalar un modulo de npm de forma global llamado Browserify:
`` npm install g browserify ``

- Después necesitas introducir este comando usando browserify:

``browserify src/index.js -o src/bundle.js ``

*Nos aseguramos de que tienes el bundle.js dentro de la carpeta src/ y en el index.html (dentro de src) tienes el src del Script tag apuntando a "bundle.js".
