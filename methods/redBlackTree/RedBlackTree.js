'use strict';

class RedBlackTree {

    constructor(value) {
        this._root = undefined;
        this._element = {
            parent: undefined,
            left: undefined,
            right: undefined,
            value: value,
            colour: 'black',
            count: 0,
        }
    }

    _leftRotate(element) {
        element.right = element.right.left;
        if (element.right.left != undefined) {
            element.right.left.parent = element;
        }
        element.right.parent = element.parent;
        if (element == element.parent.left) element.parent.left = element.right;
        else {
            element.parent.right = element.right;
        }
        element.right.left = element;
        element.parent = element.right;
    }

    _rightRotate(element) {
        element.left = element.left.right;
        if (element.left.right != undefined) {
            element.left.right.parent = element;
        }
        element.left.parent = element.parent;
        if (element = element.parent.left) {
            element.parent.left = element.left;
        }
        else {
            element.parent.right = element.left;
        }

        element.left.right = element;
        element.parent = element.left;
    }

    push(value) {
        if (value == this._element.value) return;
        if (this._root == undefined) {
            this._element.count++;
            this._element.value = value;
            this._element.parent = 'root';
            this._root = this._element;
            return;
        }

        if (this._element.left == undefined && value < this._element.value) {
            this._element.left = new RedBlackTree(value);
            this._element.left.parent = this._element;
            this._element.count++;
            return;
        }

        if (this._element.left != undefined && value < this._element.value) {
            this._element.left.push(value);
            this._element.count++;
            return;
        }


        if (this._element.right == 'undefined' && value > this._element.value) {
            this._element.right = new RedBlackTree(value);
            this._element.right.parent = this._element;
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
    .exports = RedBlackTree;