const { assert, expect } = require('chai');

const Termometro = require("../src/termometro");

describe('termometro Test', function () {
    //Constructor
    it('check if termometro is created', function () {
        let termometro1 = new Termometro();
        assert.typeOf(termometro1, "Object");
    });
    //obtenerNumeroAnotaciones
    it('check obtenerNumeroAnotaciones', function () {
        let fecha = new Date(1970, 10, 20, 20, 30, 10, 0)
        let termometroObtenerNumeroAnotaciones = new Termometro([3, 4], [fecha, fecha], 2);
        assert.equal(termometroObtenerNumeroAnotaciones.obtenerNumeroAnotaciones(), 2);
    });
    //anotarTemperatura
    it('check anotarTemperatura fecha null', function () {
        let fecha = new Date(1970, 10, 20, 20, 30, 10, 0)
        let temperatura = 30;
        let termometroAnotarTemperatura = new Termometro([1, 3], [fecha, fecha], 2);
        assert.equal(termometroAnotarTemperatura.anotarTemperatura(temperatura, null), "Temperatura or fecha are not defined");
    });
    it('check anotarTemperatura temperatura null', function () {
        let fecha = new Date(1970, 10, 20, 20, 30, 10, 0)
        let fechaActual = new Date();
        let termometroAnotarTemperatura = new Termometro([1, 3], [fecha, fecha], 2);
        assert.equal(termometroAnotarTemperatura.anotarTemperatura(null, fechaActual), "Temperatura or fecha are not defined");
    });
    //obtenerTemperaturaMax
    it('check obtenerTemperaturaMax', function () {
        let fecha = new Date(1970, 10, 20, 20, 30, 10, 0)
        let termometroObtenerTemperaturaMax = new Termometro([2,4],[fecha,fecha], 2);
        assert.equal(termometroObtenerTemperaturaMax.obtenerTemperaturaMax(), 4);
    });
    //obtenerTemperaturaMin
    it('check obtenerTemperaturaMin', function () {
        let fecha = new Date(1970, 10, 20, 20, 30, 10, 0)
        let termometroObtenerTemperaturaMin = new Termometro([2,4],[fecha,fecha], 2);
        assert.equal(termometroObtenerTemperaturaMin.obtenerTemperaturaMin(), 2);
    });
    //obtenerTemperaturaMedia
    it('check obtenerTemperaturaMedia', function () {
        let termometroObtenerTemperaturaMedia = new Termometro();
        assert.equal(termometroObtenerTemperaturaMedia, "");
    });
    //convertirCelsiusAFarenheit
    it('check convertirCelsiusAFarenheit', function () {
        let termometroConvertirCelsiusAFarenheit = new Termometro();
        assert.equal(termometroConvertirCelsiusAFarenheit, "");
    });
    //convertirFarenheitACelsius
    it('check convertirFarenheitACelsius', function () {
        let termometroconvertirFarenheitACelsius = new Termometro();
        assert.equal(termometroconvertirFarenheitACelsius, "");
    });
})