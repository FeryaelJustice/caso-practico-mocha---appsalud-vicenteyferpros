class Paciente {

    constructor(pesos, alturas, fechas, anotaciones) {
		this.pesos = pesos;
		this.alturas = alturas;
        this.fechas = fechas;
        this.anotaciones = anotaciones;
	}

    static describirIMC(peso, altura) {
        let imc = peso / (altura * altura);
        if (imc < 18.5) {
            return "Bajo peso";
        } else if (imc < 25) {
            return "Normal";
        } else if (imc < 30) {
            return "Sobrepeso";
        } else {
            return "Obesidad";
        }
    }

}

module.exports = Paciente;