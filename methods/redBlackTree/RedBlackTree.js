'use strict';

let BinarySearchTree = require('../binarySearchTree/BinarySearchTree');
class RedBlackTree extends BinarySearchTree {

    constructor(value) {
        super(value);
        this._element.color = true;
    }

    _leftRotate(element) {
        let x = element.right;
        element.right = x.left;
        x.left = element;
        x.color = element.color;
        element.color = true;
        return x;
    }

    _rightRotate(element) {
        let x = element.left;
        element.left = x.right;
        x.right = element;
        x.color = element.color;
        element.color = true;
        return x;
    }

    flipColors(element) {
        element.color = !element.color;
        element.left.color = !element.left.color;
        element.right.color = !element.right.color;
    }

    push(value) {
        if (value == this._element.value) return;
        if (this._element.value === undefined && this._element.left == 'undefined' && this._element.right == 'undefined') {
            this._element.count++;
            this._element.value = value;
            return;
        }
        if (this._element.left.color == true && this._element.right.color == true) this.flipColors(this._element);

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

        if (this._element.right.color == true && this._element.left.color == false) this._element = this._leftRotate(this._element);
        if (this._element.left.color == true && this._element.left.left.color == true) this._element._rightRotate(this._element);

    }
}

module
    .exports = RedBlackTree;