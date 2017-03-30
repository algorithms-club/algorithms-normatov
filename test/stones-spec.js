'use strick';

const algolib = require('../index.js');

describe.only('#stonesInLine', function () {

    it('count quantity of stones for deleting if line size is 3 and  stones follow as RRG ', function () {
        let quantity = algolib.stones.getMinStonesToDell(3, 'RRG');
        quantity.should.be.eql(1);
    });

    it('count quantity of stones for deleting if line size is 5 and  stones follow as RRRRR ', function () {
        let quantity = algolib.stones.getMinStonesToDell(5, 'RRRRR');
        quantity.should.be.eql(4);
    });

    it('count quantity of stones for deleting if line size is 1 and  stones follow as B ', function () {
        let quantity = algolib.stones.getMinStonesToDell(1, 'B');
        quantity.should.be.eql(0);
    });

});

