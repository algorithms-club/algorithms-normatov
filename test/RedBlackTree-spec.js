'use strict';

const algolib = require('../index.js');
var assert = require('assert');

describe('RedBlackTree', function () {
    describe.only('#data structure', function () {
        it('#should create proper data structure', function () {
            let rbt = new algolib.RedBlackTree;
            rbt.push.should.be.instanceOf(Function);
            rbt.getCount.should.be.instanceOf(Function);
            rbt.getMin.should.be.instanceOf(Function);
            rbt.getMax.should.be.instanceOf(Function);
            rbt._leftRotate.should.be.instanceOf(Function);
            rbt._rightRotate.should.be.instanceOf(Function);
            rbt.flipColors.should.be.instanceOf(Function);
        });
    });
    describe.only('#push function', function () {
        it('#should push one element to tree', function () {
            let rbt = new algolib.RedBlackTree();
            rbt.push(10);
            rbt.getMin().should.eql(10);
            rbt.push(11);
            rbt.getMin().should.eql(10);
            rbt.getMax().should.eql(11);
            rbt.push(12);
            rbt.getMax().should.eql(12);
            rbt.push(13);
            rbt.getMax().should.eql(13);
            rbt.push(9);
            rbt.getMin().should.eql(9);
        });
    });
});
