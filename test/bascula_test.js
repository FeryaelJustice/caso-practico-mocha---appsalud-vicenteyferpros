const { assert } = require('chai');
var chai = require('chai');
var should = require('chai').should();
const Bascula = require("../src/bascula");
const bascula1 = new Bascula();

describe('bascula Test', function()
{
    it ('check if bascula is created', function(){

        // Debería pasar el test ya que está creada.
        assert.typeOf(bascula1, "Object");
    });

    it ('check if calcularIMC() is correct', function(){

        let basculaTest = new Bascula([1,2], [1.1, 1.3], new Date(), 2);
        assert.equal(basculaTest.calcularIMC(), 1.1834319526627217);
    });

    it ('check if describirIMC return Infrapeso (delgadez severa)', function(){

        assert.equal(Bascula.describirIMC(14), "Infrapeso (delgadez severa)")
    });

    it ('check if describirIMC return Infrapeso (delgadez moderada)', function(){

        assert.equal(Bascula.describirIMC(16), "Infrapeso (delgadez moderada)")
    });

    it ('check if describirIMC return Infrapeso (delgadez aceptable)', function(){

        assert.equal(Bascula.describirIMC(18), "Infrapeso (delgadez aceptable)")
    });

    it ('check if describirIMC return Peso normal', function(){

        assert.equal(Bascula.describirIMC(22), "Peso normal")
    });

    it ('check if describirIMC return Sobrepeso', function(){

        assert.equal(Bascula.describirIMC(28), "Sobrepeso")
    });

    it ('check if describirIMC return Obeso (Tipo I)', function(){

        assert.equal(Bascula.describirIMC(32), "Obeso (Tipo I)")
    });

    it ('check if describirIMC return Obeso (Tipo II)', function(){

        assert.equal(Bascula.describirIMC(39), "Obeso (Tipo II)")
    });

    it ('check if describirIMC return Obeso (Tipo III)', function(){

        assert.equal(Bascula.describirIMC(55), "Obeso (Tipo III)")
    });
});