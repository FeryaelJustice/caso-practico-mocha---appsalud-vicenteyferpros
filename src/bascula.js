class Bascula {

    constructor(pesos, alturas, fechas, anotaciones) {
        this.pesos = pesos;
        this.alturas = alturas;
        this.fechas = fechas;
        this.anotaciones = anotaciones;
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