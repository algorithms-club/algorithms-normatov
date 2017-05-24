'use strict';
let binaryHeap = require('../binaryHeap/binaryHeap');

class PriorityQueue {

    constructor() {
        this._queue = new binaryHeap;
    }

    get() {
        return this._queue.getRoot();
    }

    push(value) {
        this._queue.push(value);
        return true;
    }

}
module.exports = PriorityQueue;