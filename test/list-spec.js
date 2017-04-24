'use strict';

const algolib = require('../index.js');
var assert = require('assert');

describe.only('#list', function () {

    it('#should create proper data structure', function () {
        let list = new algolib.linkedList();
        list.push.should.be.instanceOf(Function);
        list.pop.should.be.instanceOf(Function);
        list.shift.should.be.instanceOf(Function);
        list.unshift.should.be.instanceOf(Function);
    });

    it('#pop should throw exception if list is empty', function () {
        let list = new algolib.linkedList();
        assert.throws(list.pop, Error, 'List is empty');
    });

    it('#push 1 element to list', function () {
        let list = new algolib.linkedList();
        list.push(12);
        let element = list.pop();
        element.should.be.eql(12);
    });

    it('#push 2 elements to list', function () {
        let list = new algolib.linkedList();
        list.push(12);
        list.push(13);
        let element = list.pop();
        element.should.be.eql(13);
    });

    it('#push 3 elements to list', function () {
        let list = new algolib.linkedList();
        list.push(12);
        list.push(13);
        list.push(14);
        let element = list.pop();
        element.should.be.eql(14);
    });

    it('#pop 2 elements from list', function () {
        let list = new algolib.linkedList();
        list.push(12);
        list.push(13);
        list.push(14);
        list.pop();
        let element = list.pop();
        element.should.be.eql(13);
    });

    it('#pop 3 elements from list', function () {
        let list = new algolib.linkedList();
        list.push(12);
        list.push(13);
        list.push(14);
        list.pop().should.be.eql(14);
        list.pop().should.be.eql(13);
        list.pop().should.be.eql(12);
    });

    it('#shift 3 elements to list', function () {
        let list = new algolib.linkedList();
        list.shift(12);
        list.shift(13);
        list.shift(14);
        list.pop().should.be.eql(12);
        list.pop().should.be.eql(13);
        list.pop().should.be.eql(14);
    });

    it('#unshift 3 elements from list', function () {
        let list = new algolib.linkedList();
        list.shift(12);
        list.shift(13);
        list.shift(14);
        list.unshift().should.be.eql(14);
        list.unshift().should.be.eql(13);
        list.unshift().should.be.eql(12);
    });

    it('#push 3 elements and unshift 3 elements from the list', function () {
        let list = new algolib.linkedList();
        list.push(12);
        list.push(13);
        list.push(14);
        list.unshift().should.be.eql(12);
        list.unshift().should.be.eql(13);
        list.unshift().should.be.eql(14);
    });

    it('#shift 3 elements and pop 3 elements from the list', function () {
        let list = new algolib.linkedList();
        list.shift(12);
        list.shift(13);
        list.shift(14);
        list.pop().should.be.eql(12);
        list.pop().should.be.eql(13);
        list.pop().should.be.eql(14);
    });
});


