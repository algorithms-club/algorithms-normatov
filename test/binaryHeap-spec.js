'use strict';

const algolib = require('../index.js');
var assert = require('assert');

describe.only('BinaryHeap', function () {
    describe('#data structure', function () {
        it('#should create proper data structure', function () {
            let heap = new algolib.binaryHeap();
            heap.push.should.be.instanceOf(Function);
            heap._rebuildThree.should.be.instanceOf(Function);
        });
    });
    it('add element to binary heap', function () {
        let heap = new algolib.binaryHeap();
        heap.push(10);
        heap.push(11);
        heap.getHeap().should.be.eql([11,10]);
    });
   /* it('add element to binary heap', function () {
        let heap = new algolib.binaryHeap();
        heap.push(10);
        heap.push(11);
        heap.push(1);
        heap.push(16);
        heap.getHeap().should.be.eql([16,11,10,1]);
    });*/
    /*it('rebuild array to binary heap', function () {
        let heap = new algolib.binaryHeap();
       let arrayToHeap=[1,2,4,5,6,8,11,9,16,10];
        heap.concat(arrayToHeap);
        heap._rebuildThree(0);
        heap.getHeap().should.be.eql([11,10,1]);
    });*/
});
