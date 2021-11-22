# caso-practico-mocha---appsalud-vicenteyferpros
"App Salud" es una app enfocada desde el TDD para la gestión de un caso de uso de salud.

[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6314963&assignment_repo_type=AssignmentRepo)
# appSalud

## PASOS

### 1

#### Apunte para HTML:

Necesitas instalar un modulo de npm de forma global llamado Browserify:
`` npm install g browserify ``

Después necesitas introducir este comando usando browserify:

``browserify src/index.js -o src/bundle.js ``

Nos aseguramos de que tienes el bundle.js dentro de la carpeta src/ y en el index.html (dentro de src) tienes el src del Script tag apuntando a "bundle.js".
