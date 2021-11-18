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
        if(this.temperaturas.length <= 0){
            return "No hay temperaturas";
        }
        let suma = 0;
        for (let i = 0; i < this.temperaturas.length; i++) {
            suma += this.temperaturas[i];
        }
        return suma / this.temperaturas.length;
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