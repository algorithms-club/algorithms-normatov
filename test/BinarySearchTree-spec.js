'use strict';

const algolib = require('../index.js');
var assert = require('assert');

describe('BinarySearch', function () {
    describe('#data structure', function () {
        it('#should create proper data structure', function () {
            let bs = new algolib.BinarySearchTree();
            bs.push.should.be.instanceOf(Function);
            bs.getMin.should.be.instanceOf(Function);
            bs.getMax.should.be.instanceOf(Function);
        });
    });
    describe('#push function', function () {
        it('#should push one element to tree', function () {
            let bs = new algolib.BinarySearchTree();
            bs.push(1);
            bs.getMax().should.be.eql(1);
            bs.getMin().should.be.eql(1);
        });
        it('#should push three elements to tree', function () {
            let bs = new algolib.BinarySearchTree();
            bs.push(2);
            bs.push(1);
            bs.push(3);
            bs.getMin().should.be.eql(1);
            bs.getMax().should.be.eql(3);
        });
        it.only('#should push ten elements to tree', function () {
            let bs = new algolib.BinarySearchTree();
            bs.push(2);
            bs.push(1);
            bs.push(3);
            bs.push(4);
            bs.push(-1);
            bs.push(-3);
            bs.push(-5);
            bs.push(5);
            bs.push(15);
            bs.push(10);
            bs.getMin().should.be.eql(-5);
            bs.getMax().should.be.eql(15);
        });
    });
});
