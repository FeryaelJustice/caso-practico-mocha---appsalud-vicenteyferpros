const { assert, expect, should } = require('chai');
const Paciente = require("../src/paciente");

describe('paciente Test', function () {
    //Constructor
    it('check if paciente is created', function () {
        let paciente1 = new Paciente();
        expect(paciente1).to.be.a('object');
        // assert.typeOf(paciente1, "Object");
    });

    //saludar()
    it('saludar()', function () {
        let pacienteSaludo = new Paciente("Maximo", "Fernandez", new Date());
        let expected = "Hola, soy Maximo Fernandez";
        assert.equal(pacienteSaludo.saludar(), expected, "mensaje");
    });

    //obtenerNombre()
    it('obtenerNombre()', function () {
        let pacienteNombre = new Paciente("Maximo", "Fernandez", new Date());
        let expected = "Maximo";
        assert.equal(pacienteNombre.obtenerNombre(), expected, "mensaje");
    });

    //modificarNombre()
    it('modificarNombre()', function () {
        let pacienteModificarNombre = new Paciente(1, "Fernandez", new Date());
        let expected = "Error";
        assert.equal(pacienteModificarNombre.modificarNombre(), expected, "mensaje");
    });

    //obtenerApellidos()
    it('obtenerApellidos()', function () {
        let pacienteApellido = new Paciente("Maximo", "Fernandez", new Date());
        let expected = "Fernandez";
        assert.equal(pacienteApellido.obtenerApellidos(), expected, "mensaje");
    });

    //modificarApellidos()
    it('modificarApellidos()', function () {
        let pacienteModificarApellido = new Paciente("Maximo", 1, new Date());
        let expected = "Error";
        assert.equal(pacienteModificarApellido.modificarApellidos(), expected, "mensaje");
    });

    //obtenerFechaNacimiento()
    it('obtenerFechaNacimiento()', function () {
        let fecha = new Date(1970, 10, 20, 20, 30, 10, 0);
        let pacienteNacimiento = new Paciente("Maximo", "Fernandez", fecha);
        let expected = fecha;
        assert.equal(pacienteNacimiento.obtenerFechaNacimiento(), expected, "mensaje");
    });

    //modificarFechaNacimiento()
    it('modificarFechaNacimiento()', function () {
        let pacienteModificarFecha = new Paciente("Maximo", 1, 0);
        let expected = "Error";
        assert.equal(pacienteModificarFecha.modificarFechaNacimento(), expected, "mensaje");
    });

    //obtenerEdad()
    it('obtenerEdad()', function () {
        let fecha = new Date(2020, 10, 20, 20, 30, 10, 0);
        let pacienteEdad = new Paciente("Maximo", 1, fecha);
        let expected = 1;
        assert.equal(pacienteEdad.obtenerEdad(), expected, "mensaje");
    });

    //modificarBascula()
    it('modificarBascula()', function () {
        let pacienteBascula = new Paciente("Pepe", "Fernandez", new Date());
        let expected = "Error";
        assert.equal(pacienteBascula.modificarBascula(0), expected, "mensaje");
    });

    //obtenerBascula()
    it('obtenerBascula()', function () {
        let pacienteBascula = new Paciente("Pepe", "Fernandez", new Date());
        assert.typeOf(pacienteBascula.obtenerBascula(), "Object");
    });

    //calcularIMC()
    it('calcularIMC()', function () {
        let pacienteIMC = new Paciente("Juan", "Alberto", new Date());
        pacienteIMC.registroBascula.pesos.push(20);
        pacienteIMC.registroBascula.alturas.push(170);
        //assert.equal(pacienteIMC.calcularIMC(), 0.0006920415224913495);
        pacienteIMC.calcularIMC().should.equal(0.0006920415224913495);
    });
});