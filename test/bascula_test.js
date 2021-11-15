const { assert } = require('chai');
var chai = require('chai');
var should = require('chai').should();
const Bascula = require("../src/bascula");
const bascula1 = new Bascula();

describe('bascula Test', function()
{
    //Constructor
    it ('check if bascula is created', function(){

        assert.typeOf(bascula1, "Object");
    });

    //calcularIMC()
    it ('check if calcularIMC() is correct', function(){

        let basculaTest = new Bascula([1,2], [1.1, 1.3], new Date(), 2);
        assert.equal(basculaTest.calcularIMC(), 1.1834319526627217);
    });

    //describirIMC()
    it ('check if describirIMC() return Infrapeso (delgadez severa)', function(){

        assert.equal(Bascula.describirIMC(14), "Infrapeso (delgadez severa)")
    });

    it ('check if describirIMC() return Infrapeso (delgadez moderada)', function(){

        assert.equal(Bascula.describirIMC(16), "Infrapeso (delgadez moderada)")
    });

    it ('check if describirIMC() return Infrapeso (delgadez aceptable)', function(){

        assert.equal(Bascula.describirIMC(18), "Infrapeso (delgadez aceptable)")
    });

    it ('check if describirIMC() return Peso normal', function(){

        assert.equal(Bascula.describirIMC(22), "Peso normal")
    });

    it ('check if describirIMC() return Sobrepeso', function(){

        assert.equal(Bascula.describirIMC(28), "Sobrepeso")
    });

    it ('check if describirIMC() return Obeso (Tipo I)', function(){

        assert.equal(Bascula.describirIMC(32), "Obeso (Tipo I)")
    });

    it ('check if describirIMC() return Obeso (Tipo II)', function(){

        assert.equal(Bascula.describirIMC(39), "Obeso (Tipo II)")
    });

    it ('check if describirIMC() return Obeso (Tipo III)', function(){

        assert.equal(Bascula.describirIMC(55), "Obeso (Tipo III)")
    });

    //obtenerNumeroAnotaciones()
    it ('obtenerNumeroAnotaciones()', function(){
        let basculaTestAnotaciones = new Bascula([1,2], [1.1, 1.3], new Date(), 2);
        let expected = 2;
        assert.equal(basculaTestAnotaciones.obtenerNumeroAnotaciones(), expected, "[message]");
    });

    //anotarPesoAltura()
    it ('anotarPesoAltura()', function(){
        let basculaTestPesoAltura = new Bascula([1,2], [1.1, 1.3], null, 2);
        let expected = "peso not defined";
        assert.equal(basculaTestPesoAltura.anotarPesoAltura(null,20,null), expected, "[message]");
    });

    //obtenerPesoMaximo()
    it ('obtenerPesoMaximo()', function(){
        let basculaTestPesoMaximo = new Bascula([1,2], [1.1, 1.3], new Date(), 2);
        let expected = 2;
        assert.equal(basculaTestPesoMaximo.obtenerPesoMaximo(), expected, "[message]");
    });

    //obtenerPesoMinimo()
    it ('obtenerPesoMinimo()', function(){
        let basculaTestPesoMinimo = new Bascula([1,2], [1.1, 1.3], new Date(), 2);
        let expected = 1;
        assert.equal(basculaTestPesoMinimo.obtenerPesoMinimo(), expected, "[message]");
    });
});