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
        });
    });
    describe('#_leftRotate(element) function', function () {
        it('#should push one element to tree', function () {
            let rbt = new algolib.RedBlackTree();
        });
    });
});
