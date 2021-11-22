# [![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6314963&assignment_repo_type=AssignmentRepo)

## AppSalud

"App Salud" es una app enfocada desde el TDD para la gestión de un caso de uso de salud.

## PASOS DE CONFIGURACIÓN (posteriormente van los tests)

### Paso 1

Iniciamos un proyecto con npm init.

### Paso 2

Iniciamos un proyecto git con git init.

### Paso 3

Incluimos las librerías "mocha" y "chai" como devDependencies en el npm package.json para tener Mocha y Chai en nuestro proyecto:
`` npm i -D mocha ``
`` npm i -D chai ``
*-D es para instalar la dependencia como en desarrollo, no para producción.
![Package.json completo](/doc/img/step4.png)

### Paso 4

Ponemos en scripts del package.json:
``"test": "mocha",
  "start": "node src/index.js"``
para tener los comandos para testear y correr nuestra app.

### Paso 5

Instalamos las dependencias con `` npm install `` ubicandonos dentro de la carpeta del proyecto.

### Paso 6

Ejecutamos el proyecto:
  **- Para testear: ``` npm test ```
  **- Para correrlo con NodeJS: ``` npm start ```
  **- Para correrlo en el navegador: Abrimos el index.html dentro de /src/ (necesitas el apunte de abajo para que esto funcione).

#### Apunte para incluir una versión HTML (Web compatible) al proyecto:

* Necesitas instalar un modulo de npm de forma global llamado Browserify:
``npm install g browserify``

* Después necesitas introducir este comando usando browserify:

``browserify src/index.js -o src/bundle.js``

*Nos aseguramos de que tienes el bundle.js dentro de la carpeta src/ y en el index.html (dentro de src) tienes el src del Script tag apuntando a "bundle.js".

## TESTS

* Ubicados en la carpeta /test/ , recordando que esto se ejecuta con `npm test` de NodeJS desde la linea de comandos dentro del proyecto.

### Clase Bascula

#### Primer test de Bascula

Testeamos el constructor:

![Bascula constructor test](/doc/img/test/bascula_1.png)

#### Segundo test de Bascula

Testeamos si el método `calcularIMC()` devuelve lo que toca:

![Bascula calcularIMC() test](/doc/img/test/bascula_2.png)

### Clase Paciente

#### Primer test de Paciente

Testeamos el constructor:

![Paciente constructor test](/doc/img/test/paciente_1.png)

#### Segundo test de Paciente

Testeamos si el método `obtenerEdad()` devuelve lo que toca:

![Paciente obtenerEdad() test](/doc/img/test/paciente_2.png)

### Clase Termometro

#### Primer test de Termometro

Testeamos el constructor:

![Termometro constructor test](/doc/img/test/termometro_1.PNG)

El constructor de Termometro lo testeamos de manera sencilla empleando `expect.(objeto)to.be.a.(tipo_objeto);`

#### Segundo test de Termometro

Testeamos si el método `convertirFarenheitACelsius(farenheit)` devuelve lo que toca:

![Termometro convertirFarenheitACelsius(farenheit) test](/doc/img/test/termometro_2.png)
