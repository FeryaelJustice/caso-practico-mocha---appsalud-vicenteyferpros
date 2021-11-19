// Inicializciones

const Bascula = require('./bascula');
const Paciente = require('./paciente');
const Termometro = require('./termometro');

let fechaActual = new Date();

const bascula = new Bascula([1,2],[1.1,1.3],new Date(),2)
const paciente = new Paciente("Maximo","Fernandez",new Date(1970,10,20,20,30,10,0));
const termometro = new Termometro([3, 4], [fechaActual, fechaActual], 2);

// Programa

console.log(bascula.obtenerNumeroAnotaciones());
console.log(paciente.registroBascula.calcularIMC())
console.log(termometro.obtenerTemperaturaMedia())

termometro.obtenerTablaTemperaturasHTML([["row 1, cell 1", "row 1, cell 2"], ["row 2, cell 1", "row 2, cell 2"]]);