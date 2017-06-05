'use strict';

class BinarySearchTree {

    constructor(value) {
        this._element = {
            left: 'undefined',
            right: 'undefined',
            value: value,
        }
    }

    push(value) {
        if (this._element.value === undefined && this._element.left == 'undefined' && this._element.right == 'undefined') {
            this._element.value = value;
            return;
        }

        if (this._element.left == 'undefined' && value < this._element.value) {
            this._element.left = new BinarySearchTree(value);
        }

        if (this._element.left != 'undefined' && value < this._element.value ) {
            this._element.left.push(value);
        }


        if (this._element.right == 'undefined' && value > this._element.value) {
            this._element.right = new BinarySearchTree(value);
        }

        if (this._element.right != 'undefined' && value > this._element.value ) {
            this._element.right.push(value);
        }

    }

    getMin() {
        if (this._element.left == 'undefined') {
            return this._element.value;
        }
        else {
           return this._element.left.getMin();
        }
    }

    getMax() {
        if (this._element.right == 'undefined') {
            return this._element.value;
        }
        else {
            return this._element.right.getMax();
        }
    }

}

module
    .exports = BinarySearchTree;