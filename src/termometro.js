class Termometro {

    constructor(temperaturas, fechas, anotaciones){
        this.temperaturas = temperaturas;
        this.fechas = fechas;
        this.anotaciones = anotaciones;
    }

    obtenerNumeroAnotaciones(){
        return this.anotaciones;
    }

    anotarTemperatura(temperatura, fecha){
        if (temperatura == undefined && temperatura == null) {
            return "temperatura is not defined";
        }
        this.temperaturas.push(temperatura);
        if (fecha !== undefined && fecha != null) {
            this.fechas.push(fecha);
        }
        this.anotaciones += 1;
    }

    obtenerTemperaturaMax(){
        let temperaturaMax = this.temperaturas[0];
        for (let i = 0; i < this.temperaturas.length; i++) {
            if (this.temperaturas[i] > temperaturaMax) {
                temperaturaMax = this.temperaturas[i];
            }
        }
        return temperaturaMax;
    }

    obtenerTemperaturaMin(){
        let temperaturaMin = this.temperaturas[0];
        for (let i = 0; i < this.temperaturas.length; i++) {
            if (this.temperaturas[i] < temperaturaMin) {
                temperaturaMin = this.temperaturas[i];
            }
        }
        return temperaturaMin;
    }

    obtenerTemperaturaMedia(){
        
    }

    obtenerTablaTemperaturasHTML(){

    }

    static convertirCelsiusAFahrenheit(){
        let fahrenheit = ((temperaturas[0] * 9)/5)+32;
        for (let i = 0; i < this.temperaturas.length; i++) {
            
        }
        return fahrenheit;
    }

    static convertirFahrenheitACelsius(){
        let celsius = ((temperaturas[0] - 32)*5)/9;
        for (let i = 0; i < this.temperaturas.length; i++) {

        }
        return celsius;
    }
}

module.exports = Termometro