const Bascula = require('./bascula');
class Paciente {

    constructor(nombre, apellidos, fechaNacimiento) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.registroBascula = new Bascula();
    }

    saludar() {
        return `Hola, soy ${this.nombre} ${this.apellidos}`;
    }

    obtenerNombre() {
        return this.nombre;
    }

    modificarNombre(nombre) {
        this.nombre = nombre;
    }

    obtenerApellidos() {
        return this.apellidos;
    }

    modificarApellidos(apellidos) {
        this.apellidos = apellidos;
    }

    obtenerFechaNacimiento() {
        return this.fechaNacimiento;
    }

    modificarFechaNacimento(fecha) {
        this.fechaNacimiento = fecha;
    }

    obtenerEdad() {
        let fechaActual = new Date();
        let edad = fechaActual.getFullYear() - this.fechaNacimiento.getFullYear();
        if (fechaActual.getMonth() < this.fechaNacimiento.getMonth()) {
            edad--;
        } else if (fechaActual.getMonth() == this.fechaNacimiento.getMonth() && fechaActual.getDate() < this.fechaNacimiento.getDate()) {
            edad--;
        }
        return edad;
    }

    modificarBascula(bascula){
        this.registroBascula = bascula;
    }

    obtenerBascula() {
        return this.registroBascula;
    }

    calcularIMC() {
        return this.registroBascula.calcularIMC()
    }

}

module.exports = Paciente;