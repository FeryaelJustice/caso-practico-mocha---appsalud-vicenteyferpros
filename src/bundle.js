(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
class Bascula {

    constructor(pesos, alturas, fechas, anotaciones) {
        this.pesos = pesos;
        this.alturas = alturas;
        this.fechas = fechas;
        this.anotaciones = anotaciones;
    }

    obtenerNumeroAnotaciones() {
        return this.anotaciones;
    }

    anotarPesoAltura(peso, altura, fecha) {
        if (peso == undefined && peso == null) {
            return "peso not defined";
        }
        this.pesos.push(peso);
        if (altura !== undefined && altura != null) {
            this.alturas.push(altura);
        } else {
            this.alturas.push(1);
        }
        if (fecha !== undefined && fecha != null) {
            this.fechas.push(fecha);
        } else {
            this.fechas.push(new Date());
        }
        this.anotaciones += 1;
    }

    obtenerPesoMaximo() {
        let pesoMaximo = this.pesos[0];
        for (let i = 0; i < this.pesos.length; i++) {
            if (this.pesos[i] > pesoMaximo) {
                pesoMaximo = this.pesos[i];
            }
        }
        return pesoMaximo;
    }

    obtenerPesoMinimo() {
        let pesoMinimo = this.pesos[0];
        for (let i = 0; i < this.pesos.length; i++) {
            if (this.pesos[i] < pesoMinimo) {
                pesoMinimo = this.pesos[i];
            }
        }
        return pesoMinimo;
    }

    calcularIMC() {
        let peso = this.pesos[this.pesos.length - 1]
        let altura = this.alturas[this.alturas.length - 1]
        return peso / (altura * altura);
    }

    static describirIMC(imc) {
        if (imc < 16) {
            return 'Infrapeso (delgadez severa)'
        } else if (imc >= 16 && imc < 17) {
            return 'Infrapeso (delgadez moderada)'
        } else if (imc >= 17 && imc < 18.5) {
            return 'Infrapeso (delgadez aceptable)'
        } else if (imc >= 18 && imc < 25) {
            return 'Peso normal'
        } else if (imc >= 25 && imc < 30) {
            return 'Sobrepeso'
        } else if (imc >= 30 && imc < 35) {
            return 'Obeso (Tipo I)'
        } else if (imc >= 35 && imc < 40) {
            return 'Obeso (Tipo II)'
        } else if (imc >= 40) {
            return 'Obeso (Tipo III)'
        }
    }

}

module.exports = Bascula;
},{}],2:[function(require,module,exports){
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

termometro.createTable([["row 1, cell 1", "row 1, cell 2"], ["row 2, cell 1", "row 2, cell 2"]]);
},{"./bascula":1,"./paciente":3,"./termometro":4}],3:[function(require,module,exports){
const Bascula = require('./bascula');
class Paciente {

    constructor(nombre, apellidos, fechaNacimiento) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.registroBascula = new Bascula([10, 20], [160, 170], [new Date(), new Date()], 0);
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
},{"./bascula":1}],4:[function(require,module,exports){
class Termometro {

    constructor(temperaturas, fechas, anotaciones) {
        this.temperaturas = temperaturas;
        this.fechas = fechas;
        this.anotaciones = anotaciones;
    }

    obtenerNumeroAnotaciones() {
        return this.anotaciones;
    }

    anotarTemperatura(temperatura, fecha) {
        if ((temperatura == undefined && temperatura == null) || (fecha == undefined && fecha == null)) {
            return "Temperatura or fecha are not defined";
        }
        this.temperaturas.push(temperatura);;
        this.anotaciones += 1;
        return "Success"
    }

    obtenerTemperaturaMax() {
        let temperaturaMax = this.temperaturas[0];
        for (let i = 0; i < this.temperaturas.length; i++) {
            if (this.temperaturas[i] > temperaturaMax) {
                temperaturaMax = this.temperaturas[i];
            }
        }
        return temperaturaMax;
    }

    obtenerTemperaturaMin() {
        let temperaturaMin = this.temperaturas[0];
        for (let i = 0; i < this.temperaturas.length; i++) {
            if (this.temperaturas[i] < temperaturaMin) {
                temperaturaMin = this.temperaturas[i];
            }
        }
        return temperaturaMin;
    }

    obtenerTemperaturaMedia() {
        if (this.temperaturas.length <= 0) {
            return "No hay temperaturas";
        }
        let suma = 0;
        for (let i = 0; i < this.temperaturas.length; i++) {
            suma += this.temperaturas[i];
        }
        return suma / this.temperaturas.length;
    }

    obtenerTablaTemperaturasHTML(tableData,) {
        var table = document.createElement('table');
        var tableBody = document.createElement('tbody');

        tableData.forEach(function (rowData, rowIndex) {
            var row = document.createElement('tr');

            rowData.forEach(function (cellData) {
                var cell = document.createElement('td');
                cell.appendChild(document.createTextNode(cellData));
                row.appendChild(cell);
            });

            tableBody.appendChild(row);
        });

        table.appendChild(tableBody);
        document.body.appendChild(table);


        //createTable([["row 1, cell 1", "row 1, cell 2"], ["row 2, cell 1", "row 2, cell 2"]]);
    }


    static convertirCelsiusAFahrenheit(celsius) {
        if (celsius == undefined || celsius == null) {
            return "Error"
        }
        return ((celsius * 9) / 5) + 32;
    }

    static convertirFahrenheitACelsius(farenheit) {
        if (farenheit == undefined || farenheit == null) {
            return "Error"
        }
        return ((farenheit - 32) * 5) / 9;
    }
}

module.exports = Termometro
},{}]},{},[2]);
