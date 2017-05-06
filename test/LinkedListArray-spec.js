'use strict';

const algolib = require('../index.js');
var assert = require('assert');

describe('LinkedListArray', function () {

    describe('#data structure', function () {

        it('#should create proper data structure', function () {
            let list = new algolib.linkedListArray();
            list.push.should.be.instanceOf(Function);
            list.pop.should.be.instanceOf(Function);
            list.shift.should.be.instanceOf(Function);
            list.unshift.should.be.instanceOf(Function);
        });

    });
    describe('#push(element)', function () {

        it('#push(element) should return true, if  1 element will pushed to list', function () {
            let list = new algolib.linkedListArray();
            list.shift(12).should.true();
        });

        it('#push 1 element to list', function () {
            let list = new algolib.linkedListArray();
            list.push(12);
            let element = list.pop();
            element.should.be.eql(12);
        });

        it('#push 2 elements to list', function () {
            let list = new algolib.linkedListArray();
            list.push(12);
            list.push(13);
            let element = list.pop();
            element.should.be.eql(13);
        });

        it('#push 3 elements to list', function () {
            let list = new algolib.linkedListArray();
            list.push(12);
            list.push(13);
            list.push(14);
            let element = list.pop();
            element.should.be.eql(14);
        });

    });

    describe('#pop()', function () {

        it('#pop should throw exception if list is empty', function () {
            let list = new algolib.linkedListArray();
            assert.throws(list.pop, Error, 'List is empty');
        });

        it('#pop 2 elements from list', function () {
            let list = new algolib.linkedListArray();
            list.push(12);
            list.push(13);
            list.push(14);
            list.pop();
            let element = list.pop();
            element.should.be.eql(13);
        });

        it('#pop all elements from list', function () {
            let list = new algolib.linkedListArray();
            list.push(12);
            list.push(13);
            list.push(14);
            list.pop().should.be.eql(14);
            list.pop().should.be.eql(13);
            list.pop().should.be.eql(12);
        });

    });

    describe('#shift(element) and #unshift()', function () {

        it('#unshift should throw exception if list is empty', function () {
            let list = new algolib.linkedListArray();
            assert.throws(list.unshift, Error, 'List is empty');
        });

        it('#shift(element) should return true, if  1 element will shifted to list', function () {
            let list = new algolib.linkedListArray();
            list.push(12).should.true();
        });

        it('#shift 3 elements to list', function () {
            let list = new algolib.linkedListArray();
            list.shift(12);
            list.shift(13);
            list.shift(14);
            list.pop().should.be.eql(12);
            list.pop().should.be.eql(13);
            list.pop().should.be.eql(14);
        });

        it('#unshift 3 elements from list', function () {
            let list = new algolib.linkedListArray();
            list.shift(12);
            list.shift(13);
            list.shift(14);
            list.unshift().should.be.eql(14);
            list.unshift().should.be.eql(13);
            list.unshift().should.be.eql(12);
        });

    });

    describe('#all methods together', function () {

        it('#push 3 elements and unshift 3 elements from the list', function () {
            let list = new algolib.linkedListArray();
            list.push(12);
            list.push(13);
            list.push(14);
            list.unshift().should.be.eql(12);
            list.unshift().should.be.eql(13);
            list.unshift().should.be.eql(14);
        });

        it('#shift 3 elements and pop 3 elements from the list', function () {
            let list = new algolib.linkedListArray();
            list.shift(12);
            list.shift(13);
            list.shift(14);
            list.pop().should.be.eql(12);
            list.pop().should.be.eql(13);
            list.pop().should.be.eql(14);
        });

    });
});


