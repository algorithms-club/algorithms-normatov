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
        if (element.right == undefined) return;
        let x = element;
        let y = element.right;
        y = x.right;
        x.right = y.left;
        if (y.left != undefined) {
            y.left.parent = x;
            y.parent = x.parent;
        }
        if (x.parent == undefined)
            this._root = y;
        else if (x == x.parent.left) x.parent.left = y;
        else {
            x.parent.right = y;
            y.left = x;
        }
        x.parent = y;
    }

    _rightRotate() {

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