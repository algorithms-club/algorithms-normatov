'use strict';

const algolib = require('../index.js');
var assert = require('assert');

describe('Stack', function () {

    describe('#data structure', function () {

        it('#should create proper data structure', function () {
            let stack = new algolib.stack();
            stack.insert.should.be.instanceOf(Function);
            stack.get.should.be.instanceOf(Function);
        });

    });
    describe('#insert(element)', function () {

        it('#insert(element) should return true, if  1 element will pushed to stack', function () {
            let stack = new algolib.stack();
            stack.insert(12).should.true();
        });

        it('#insert 1 element to stack', function () {
            let stack = new algolib.stack();
            stack.insert(12);
            let element = stack.get();
            element.should.be.eql(12);
        });

        it('#insert 2 elements to stack', function () {
            let stack = new algolib.stack();
            stack.insert(12);
            stack.insert(13);
            let element = stack.get();
            element.should.be.eql(13);
        });

        it('#insert 3 elements to stack', function () {
            let stack = new algolib.stack();
            stack.insert(12);
            stack.insert(13);
            stack.insert(14);
            let element = stack.get();
            element.should.be.eql(14);
        });

    });

    describe('#get()', function () {

        it('#get() should return one element from stack', function () {
            let stack = new algolib.stack();
            stack.insert(12);
            stack.get().should.be.eql(12);
        });

        it('#get() should return two elements from stack', function () {
            let stack = new algolib.stack();
            stack.insert(12);
            stack.insert(13);
            stack.get().should.be.eql(13);
            stack.get().should.be.eql(12);
        });

        it('#get() should throw exception if stack is empty', function () {
            let stack = new algolib.stack();
            assert.throws(stack.get, Error, 'List is empty');
        });
    });
});


