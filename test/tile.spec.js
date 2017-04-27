'use strict';

const algolib = require('../index.js');

describe('#coverByTile', function () {

    it('should count amount of titles to cover area (integer)', function () {
        let titlesAmount = algolib.coverByTile(5, 3, 2);
        titlesAmount.should.be.eql(6);
    });


    it('should count amount of titles to cover area (float)', function () {
        let titlesAmount = algolib.coverByTile(0.5, 1.3, 0.2);
        titlesAmount.should.be.eql(21);
    });

});

