'use strick';

const algolib = require('../index.js');

describe('#beautifulyear', function(){

	it('find beautiful year if start year=1000', function(){
		let decision = algolib.beautifulyear.getYear(1000);
		decision.should.be.eql(1023);
	});

	it('find beautiful year if start year=9000', function(){
		let decision = algolib.beautifulyear.getYear(9000);
		decision.should.be.eql(9012);
	});


	it('find beautiful year if start year=1111', function(){
		let decision = algolib.beautifulyear.getYear(1111);
		decision.should.be.eql(1203);
	});


});

