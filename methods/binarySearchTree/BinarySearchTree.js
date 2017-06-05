'use strict';

class BinarySearchTree {

    constructor(value) {
        this._element = {
            left: 'undefined',
            right: 'undefined',
            value: value,
            count: 0,
        }
    }

    push(value) {
        if (value == this._element.value) return;
        if (this._element.value === undefined && this._element.left == 'undefined' && this._element.right == 'undefined') {
            this._element.count++;
            this._element.value = value;
            return;
        }

        if (this._element.left == 'undefined' && value < this._element.value) {
            this._element.left = new BinarySearchTree(value);
            this._element.count++;
            return;
        }

        if (this._element.left != 'undefined' && value < this._element.value) {
            this._element.left.push(value);
            this._element.count++;
            return;
        }


        if (this._element.right == 'undefined' && value > this._element.value) {
            this._element.right = new BinarySearchTree(value);
            this._element.count++;
            return;
        }

        if (this._element.right != 'undefined' && value > this._element.value) {
            this._element.right.push(value);
            this._element.count++;
            return;
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

    getCount() {
        return this._element.count;
    }

    getNode(value) {
        if (this._element.value == value) return this;
        if (value > this._element.value && this._element.right != 'undefined') return this._element.right.getNode(value);
        if (value < this._element.value && this._element.left != 'undefined') return this._element.left.getNode(value);
        return false;
    }

}

module
    .exports = BinarySearchTree;