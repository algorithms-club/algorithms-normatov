'use strict';

class BinaryHeap {

    constructor() {
        this._elements = [];
    }

    push(value) {
        this._elements.push(value);
        let arraySize = this._elements.length;
        this._upElementToRoot(arraySize - 1);
        return true;
    }

    getHeap() {

        return this._elements;
    }

    concat(array) {
        this._elements = this._elements.concat(array);
    }

    _upElementToRoot(index) {
        if (index == 0) return;
        let parentIndex = Math.floor((index - 1) / 2);
        if (this._elements[parentIndex] < this._elements[index]) {
            this._change(parentIndex, index);
            this._upElementToRoot(parentIndex);
        }
    }

    _rebuildTree() {
        for(let i=this._elements.length-1;i>=0;i--){
            this._upElementToRoot(i);
        }
    }

    _change(indexOne, indexTwo) {
        let temp = this._elements[indexOne];
        this._elements[indexOne] = this._elements[indexTwo];
        this._elements[indexTwo] = temp;
    }

    getRoot() {
        if (this._elements.length==0) {
            throw  new Error("List is empty");
        }
        let root = this._elements.shift();
        this._rebuildTree();
        return root;
    }

}
module.exports = BinaryHeap;