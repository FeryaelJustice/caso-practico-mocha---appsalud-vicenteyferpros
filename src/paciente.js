const Bascula = require('./bascula');
class Paciente {

    constructor(nombre, apellidos, fechaNacimiento) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.registroBascula = new Bascula([10, 20], [160, 170], [new Date(), new Date()], 2);
    }

    saludar() {
        return `Hola, soy ${this.nombre} ${this.apellidos}`;
    }

    obtenerNombre() {
        return this.nombre;
    }

    modificarNombre(nombre) {
        if (typeof nombre === "string") {
            this.nombre = nombre;
        } else {
            return "Error"
        }
    }

    obtenerApellidos() {
        return this.apellidos;
    }

    modificarApellidos(apellidos) {
        if (typeof apellidos === "string") {
            this.apellidos = apellidos;
        } else {
            return "Error"
        }
    }

    obtenerFechaNacimiento() {
        return this.fechaNacimiento;
    }

    modificarFechaNacimento(fecha) {
        if (typeof fecha === "date") {
            this.fecha = fecha;
        } else {
            return "Error"
        }
    }

    obtenerEdad() {
        let fechaActual = new Date();
        let edad = fechaActual.getFullYear() - this.fechaNacimiento.getFullYear();
        let mes = fechaActual.getMonth() - this.fechaNacimiento.getMonth();
        let dia = fechaActual.getDate() - this.fechaNacimiento.getDate();
        if (mes < 0 || (mes === 0 && dia < 0)) {
            edad--;
        }
        return edad;
    }

    modificarBascula(bascula) {
        if (typeof bascula === "object") {
            this.bascula = bascula;
        } else {
            return "Error"
        }
    }

    obtenerBascula() {
        return this.registroBascula;
    }

    calcularIMC() {
        return this.registroBascula.calcularIMC()
    }

}

module.exports = Paciente;