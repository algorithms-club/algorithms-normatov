'use strict';

class BinaryHeap {

    constructor() {
        this._elements = [];
    }

    push(value) {
        this._elements.push(value);
        this._rebuildThree(0);
        return true;
    }

    getHeap() {

        return this._elements;
    }

    concat(array) {
        this._elements = this._elements.concat(array);
    }

    _rebuildThree(index) {

        let size = this._elements.length;

        if (index * 2 + 1 < size && this._elements[index * 2 + 1]>this._elements[index]) {
            this._rebuildThree(index * 2 + 1);
            this._change(index * 2 + 1, index);
        }
        if (index * 2 + 1 < size && this._elements[index * 2 + 1]>this._elements[index]) {
            this._rebuildThree(index * 2 + 2);
            this._change(index * 2 + 2, index);
        }
    }

    _change(indexOne, indexTwo) {
            let temp = this._elements[indexOne];
            this._elements[indexOne] = this._elements[indexTwo];
            this._elements[indexTwo] = temp;
    }

}
module.exports = BinaryHeap;