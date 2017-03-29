'use strick';

const algolib = require('../index.js');

describe.only('#watermelon', function(){

	it('make decision if weight<4', function(){
		let decision = algolib.watermelon(3);
		decision.should.be.eql("NO");
	});


	it('make decision if weight=1', function(){
		let decision = algolib.watermelon(1);
		decision.should.be.eql("NO");
	});

	it('make decision if weight=150', function(){
		let decision = algolib.watermelon(150);
		decision.should.be.eql("YES");
	});

	it('make decision if weight is even', function(){
		let decision = algolib.watermelon(44);
		decision.should.be.eql("YES");
	});

	it('make decision if weight is odd', function(){
		let decision = algolib.watermelon(43);
		decision.should.be.eql("NO");
	});

});

