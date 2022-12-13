let adder = require('../../services/adder');

describe("Test de division", function(){
    let _numberA;
    let _numberB;

    it("deberia devolver la suma entre numberA y numberB", function(){
        _numberA = 6;
        _numberB = 7;

        const result = adder.add(_numberA, _numberB);

        expect(result).toEqual(13);
    })
})