class Bascula {

    constructor(pesos, alturas, fechas, anotaciones) {
        this.pesos = pesos;
        this.alturas = alturas;
        this.fechas = fechas;
        this.anotaciones = anotaciones;
    }

    obtenerNumeroAnotaciones() {
        return this.anotaciones.length;
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
        console.log(peso, altura)
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