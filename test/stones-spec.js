'use strick';

const algolib = require('../index.js');

describe.only('#stonesInLine', function () {

    it('count quantity of stones for deleting if line size is 3 and  stones follow as RRG ', function () {
        let quantity = algolib.stones.getMinStonesToDell(3, 'RRG');
        quantity.should.be.eql(1);
    });

    it('count quantity of stones for deleting if line size is 2 and  stones follow as RR ', function () {
        let quantity = algolib.stones.getMinStonesToDell(2, 'RR');
        quantity.should.be.eql(1);
    });

    it('count quantity of stones for deleting if line size is 1 and  stones follow as B ', function () {
        let quantity = algolib.stones.getMinStonesToDell(1, 'B');
        quantity.should.be.eql(0);
    });

    it('count quantity of stones for deleting if line size is 3 and  stones follow as RRR ', function () {
        let quantity = algolib.stones.getMinStonesToDell(3, 'RRR');
        quantity.should.be.eql(2);
    });

    it('count quantity of stones for deleting if line size is 4 and  stones follow as RRRR ', function () {
        let quantity = algolib.stones.getMinStonesToDell(4, 'RRRR');
        quantity.should.be.eql(3);
    });

    it('count quantity of stones for deleting if line size is 4 and  stones follow as BRBG ', function () {
        let quantity = algolib.stones.getMinStonesToDell(4, 'BRBG');
        quantity.should.be.eql(0);
    });

    it('count quantity of stones for deleting if line size is 2 and  stones follow as BG ', function () {
        let quantity = algolib.stones.getMinStonesToDell(2, 'BRBG');
        quantity.should.be.eql(0);
    });

    it('count quantity of stones for deleting if line size is 4 and  stones follow as RBBR ', function () {
        let quantity = algolib.stones.getMinStonesToDell(4, 'RBBR');
        quantity.should.be.eql(1);
    });

    it('count quantity of stones for deleting if line size is 50 and  stones follow as GRBGGRBRGRBGGBBBBBGGGBBBBRBRGBRRBRGBBBRBBRRGBGGGRB ', function () {
        let quantity = algolib.stones.getMinStonesToDell(50, 'GRBGGRBRGRBGGBBBBBGGGBBBBRBRGBRRBRGBBBRBBRRGBGGGRB');
        quantity.should.be.eql(18);
    });

});

