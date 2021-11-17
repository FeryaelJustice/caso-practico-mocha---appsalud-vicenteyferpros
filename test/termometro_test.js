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
        let termometroObtenerNumeroAnotaciones = new Termometro();
        assert.equal(termometroObtenerNumeroAnotaciones, "");
    });
    //anotarTemperatura
    it('check anotarTemperatura', function () {
        let termometroAnotarTemperatura = new Termometro();
        assert.equal(termometroAnotarTemperatura, "");
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