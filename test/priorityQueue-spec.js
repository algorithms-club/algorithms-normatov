'use strict';

const algolib = require('../index.js');
var assert = require('assert');

describe('PriorityQueue', function () {

    describe('#data structure', function () {

        it('#should create proper data structure', function () {
            let priorityQueue = new algolib.priorityQueue();
            priorityQueue.push.should.be.instanceOf(Function);
            priorityQueue.get.should.be.instanceOf(Function);
        });

    });
    describe('#push(element)', function () {

        it('#push(element) should return true, if  1 element will pushed to priorityQueue', function () {
            let priorityQueue = new algolib.priorityQueue();
            priorityQueue.push(12).should.true();
        });
        it('#insert 1 element to priorityQueue', function () {
            let priorityQueue = new algolib.priorityQueue();
            priorityQueue.push(12);
            let element = priorityQueue.get();
            element.should.be.eql(12);
        });

        it('#insert 2 _elements to priorityQueue', function () {
            let priorityQueue = new algolib.priorityQueue();
            priorityQueue.push(12);
            priorityQueue.push(13);
            let element = priorityQueue.get();
            element.should.be.eql(13);
        });

        it('#insert 3 _elements to priorityQueue', function () {
            let priorityQueue = new algolib.priorityQueue();
            priorityQueue.push(12);
            priorityQueue.push(13);
            priorityQueue.push(14);
            let element = priorityQueue.get();
            element.should.be.eql(14);
        });

    });

    describe('#get()', function () {

        it('#get() should return one element from priorityQueue', function () {
            let priorityQueue = new algolib.priorityQueue();
            priorityQueue.push(12);
            priorityQueue.get().should.be.eql(12);
        });

        it('#get() should return two _elements from priorityQueue', function () {
            let priorityQueue = new algolib.priorityQueue();
            priorityQueue.push(12);
            priorityQueue.push(13);
            priorityQueue.get().should.be.eql(13);
            priorityQueue.get().should.be.eql(12);
        });

        it('#get() should throw exception if priorityQueue is empty', function () {
            let queue = new algolib.queue();
            assert.throws(queue.get, Error, 'List is empty');
        });
    });
});


