'use strick';

const algolib = require('../index.js');

describe('#chat', function () {

    it('Did Vasya success say hello with phrase ahhellllloou ', function () {
        let IsSuccess = algolib.chat.isSucceessSayHello('ahhellllloou');
        IsSuccess.should.be.eql('YES');
    });

    it('Did Vasya success say hello with phrase hlelo ', function () {
        let IsSuccess = algolib.chat.isSucceessSayHello('hlelo');
        IsSuccess.should.be.eql('NO');
    });
});


