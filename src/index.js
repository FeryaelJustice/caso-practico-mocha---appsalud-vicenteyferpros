const Paciente = require('./paciente');
const Bascula = require('./bascula');

const bascula = new Bascula([1,2],[1.1,1.3],new Date(),2)

console.log(bascula.calcularIMC())