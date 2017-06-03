'use strict';

const algolib = require('../index.js');
var assert = require('assert');

describe('BinaryHeap', function () {
    describe('#data structure', function () {
        it('#should create proper data structure', function () {
            let heap = new algolib.BinaryHeap();
            heap.push.should.be.instanceOf(Function);
            heap._upElementToRoot.should.be.instanceOf(Function);
            heap._rebuildTree.should.be.instanceOf(Function);
            heap.getRoot.should.be.instanceOf(Function);
        });
    });
    it('add two elements to binary heap', function () {
        let heap = new algolib.BinaryHeap();
        heap.push(10);
        heap.push(11);
        heap.getHeap().should.be.eql([11, 10]);
    });
    it('add three elements to binary heap', function () {
        let heap = new algolib.BinaryHeap();
        heap.push(10);
        heap.push(11);
        heap.push(1);
        heap.getHeap().should.be.eql([11, 10, 1]);
    });
    it('add ten elements to binary heap', function () {
        let heap = new algolib.BinaryHeap();
        heap.push(1);
        heap.push(2);
        heap.push(4);
        heap.push(5);
        heap.push(6);
        heap.push(8);
        heap.push(11);
        heap.push(9);
        heap.push(16);
        heap.push(10);
        heap.getHeap().should.be.eql([16, 11, 8, 9, 10, 2, 6, 1, 5, 4]);
    });
    it('rebuild array to binary heap', function () {
        let heap = new algolib.BinaryHeap();
        let arrayToHeap = [1, 2, 4, 5, 6, 8, 11, 9, 16, 10];
        heap.concat(arrayToHeap);
        for(let i=arrayToHeap.length-1;i>=0;i--){
        heap._upElementToRoot(i);
        }
        heap.getHeap().should.be.eql([16, 10, 11, 9, 2, 8, 4, 1, 5, 6]);
    });
    it('get root of binary heap', function () {
        let heap = new algolib.BinaryHeap();
        heap.push(1);
        heap.push(2);
        heap.push(4);
        heap.push(5);
        heap.push(6);
        heap.push(8);
        heap.push(11);
        heap.push(9);
        heap.push(16);
        heap.push(10);
        heap.getRoot().should.be.eql(16);
        heap.getRoot().should.be.eql(11);
        heap.getRoot().should.be.eql(10);
        heap.getRoot().should.be.eql(9);
        heap.getRoot().should.be.eql(8);
        heap.getRoot().should.be.eql(6);
        heap.getRoot().should.be.eql(5);
        heap.getRoot().should.be.eql(4);
        heap.getRoot().should.be.eql(2);
        heap.getRoot().should.be.eql(1);
    });
});
