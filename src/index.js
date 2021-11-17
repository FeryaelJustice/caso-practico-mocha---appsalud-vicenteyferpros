const Paciente = require('./paciente');
const Bascula = require('./bascula');

const bascula = new Bascula([1,2],[1.1,1.3],new Date(),2)
const paciente = new Paciente("Maximo","Fernandez",new Date(1970,10,20,20,30,10,0));

/*console.log(bascula.calcularIMC())
console.log(paciente.obtenerFechaNacimiento())
*/

console.log(paciente.registroBascula.calcularIMC())