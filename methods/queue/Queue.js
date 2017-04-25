'use strict';

let linkedList = require('../LinkedList/LinkedListArray.js');

class Queue {

    constructor() {
        this._queue = new linkedList;
    }

    insert(element) {
        return this._queue.push(element);
    }

    get() {
        return this._queue.unshift();
    }
}

module.exports = Queue;