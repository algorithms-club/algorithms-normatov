'use strict';

let linkedList = require('../LinkedList/LinkedListArray.js');

class Stack {

    constructor() {
        this._stack = new linkedList;
    }

    insert(element) {
        return this._stack.push(element);
    }

    get() {
        return this._stack.pop();
    }
}

module.exports = Stack;