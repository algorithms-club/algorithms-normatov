'use strict';

const algolib = require('../index.js');
var assert = require('assert');

describe.only('BinarySearchTree', function () {
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
        it('#should push same elements to tree', function () {
            let bs = new algolib.BinarySearchTree();
            bs.push(1);
            bs.push(1);
            bs.push(1);
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
        it('#should push ten elements to tree', function () {
            let bs = new algolib.BinarySearchTree();
            bs.push(2);
            bs.getMin().should.be.eql(2);
            bs.getMax().should.be.eql(2);
            bs.push(1);
            bs.getMax().should.be.eql(2);
            bs.getMin().should.be.eql(1);
            bs.push(3);
            bs.getMin().should.be.eql(1);
            bs.getMax().should.be.eql(3);
            bs.push(4);
            bs.getMax().should.be.eql(4);
            bs.getMin().should.be.eql(1);
            bs.push(-1);
            bs.getMax().should.be.eql(4);
            bs.getMin().should.be.eql(-1);
            bs.push(-3);
            bs.getMax().should.be.eql(4);
            bs.getMin().should.be.eql(-3);
            bs.push(-5);
            bs.getMax().should.be.eql(4);
            bs.getMin().should.be.eql(-5);
            bs.push(5);
            bs.getMax().should.be.eql(5);
            bs.getMin().should.be.eql(-5);
            bs.push(15);
            bs.getMax().should.be.eql(15);
            bs.getMin().should.be.eql(-5);
            bs.push(10);
            bs.getMin().should.be.eql(-5);
            bs.getMax().should.be.eql(15);
        });
    });
    describe('#getCount function', function () {
        it('#should return count of nods, if  tree root has 2 nods', function () {
            let bs = new algolib.BinarySearchTree();
            bs.push(2);
            bs.push(1);
            bs.push(3);
            bs.getCount().should.eql(3);
        });
        it('#should return count of nods, if  tree root has 5  nods', function () {
            let bs = new algolib.BinarySearchTree();
            bs.push(2);
            bs.push(1);
            bs.push(3);
            bs.push(4);
            bs.push(5);
            bs.getCount().should.eql(5);
        });
    });
});
