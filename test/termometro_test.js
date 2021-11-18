const { assert } = require('chai');
var chai = require('chai');
var should = require('chai').should();
const Termometro = require("../src/termometro");
const termometro1 = new Termometro();

describe('termometro Test', function () {
    //Constructor
    it('check if termometro is created', function () {
        assert.typeOf(termometro1, "Object");
    });
    //obtenerNumeroAnotaciones
    it('check obtenerNumeroAnotaciones', function () {
        let fecha = new Date(1970, 10, 20, 20, 30, 10, 0)
        let termometroObtenerNumeroAnotaciones = new Termometro([3, 4], [fecha, fecha], 2);
        assert.equal(termometroObtenerNumeroAnotaciones.obtenerNumeroAnotaciones(), 2);
    });
    //anotarTemperatura
    it('check anotarTemperatura', function () {
        let fecha = new Date(1970, 10, 20, 20, 30, 10, 0)
        let temperatura = 30;
        let fechaActual = new Date();
        let termometroAnotarTemperatura = new Termometro([1, 3], [fecha, fecha], 2);
        assert.equal(termometroAnotarTemperatura.anotarTemperatura(temperatura,null), "Error");
    });
    //obtenerTemperaturaMax
    it('check obtenerTemperaturaMax', function () {
        let termometroObtenerTemperaturaMax = new Termometro();
        assert.equal(termometroObtenerTemperaturaMax, "");
    });
    //obtenerTemperaturaMin
    it('check obtenerNumeroobtenerTemperaturaMinAnotaciones', function () {
        let termometroObtenerTemperaturaMin = new Termometro();
        assert.equal(termometroObtenerTemperaturaMin, "");
    });
    //obtenerTemperaturaMedia
    it('check obtenerTemperaturaMedia', function () {
        let termometroObtenerTemperaturaMedia = new Termometro();
        assert.equal(termometroObtenerTemperaturaMedia, "");
    });
    //convertirCelsiusAFarenheit
    it('check obtenerNumeroAnotaciones', function () {
        let termometroConvertirCelsiusAFarenheit = new Termometro();
        assert.equal(termometroConvertirCelsiusAFarenheit, "");
    });
    //convertirFarenheitACelsius
    it('check convertirFarenheitACelsius', function () {
        let termometroconvertirFarenheitACelsius = new Termometro();
        assert.equal(termometroconvertirFarenheitACelsius, "");
    });
})