'use strict';

const algolib = require('../index.js');
var assert = require('assert');

describe('Queue', function () {

    describe('#data structure', function () {

        it('#should create proper data structure', function () {
            let queue = new algolib.queue();
            queue.insert.should.be.instanceOf(Function);
            queue.get.should.be.instanceOf(Function);
        });

    });
    describe('#insert(element)', function () {

        it('#insert(element) should return true, if  1 element will pushed to queue', function () {
            let queue = new algolib.queue();
            queue.insert(12).should.true();
        });

        it('#insert 1 element to queue', function () {
            let queue = new algolib.queue();
            queue.insert(12);
            let element = queue.get();
            element.should.be.eql(12);
        });

        it('#insert 2 elements to queue', function () {
            let queue = new algolib.queue();
            queue.insert(12);
            queue.insert(13);
            let element = queue.get();
            element.should.be.eql(12);
        });

        it('#insert 3 elements to queue', function () {
            let queue = new algolib.queue();
            queue.insert(12);
            queue.insert(13);
            queue.insert(14);
            let element = queue.get();
            element.should.be.eql(12);
        });

    });

    describe('#get()', function () {

        it('#get() should return one element from queue', function () {
            let queue = new algolib.queue();
            queue.insert(12);
            queue.get().should.be.eql(12);
        });

        it('#get() should return two elements from queue', function () {
            let queue = new algolib.queue();
            queue.insert(12);
            queue.insert(13);
            queue.get().should.be.eql(12);
            queue.get().should.be.eql(13);
        });

        it('#get() should throw exception if queue is empty', function () {
            let queue = new algolib.queue();
            assert.throws(queue.get, Error, 'List is empty');
        });
    });
});


