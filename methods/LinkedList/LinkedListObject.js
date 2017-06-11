'use strict';

class LinkedListObject {

    constructor(value, previous) {
        this._firstElement;
        this._lastElement;
        this._element = {
            value: value,
            previous: previous,
            next: 'undefined'
        };
    }

    _find(value) {

        if (this._element.value == value) {
            return this._element;
        }
        else if (this._element.next != 'undefined') {
            return this._element.next._find(value);
        }
        return false;
    }


    get(value) {
        if(this._firstElement==undefined) return false;
        if (this._firstElement._element.value == value) return this._firstElement._element;
        else if (this._firstElement._element.next != 'undefined') {
            return this._firstElement._element.next._find(value);
        }
        return false;
    }

    push(value) {
        let elementOfList;
        if (this._firstElement === undefined) {
            elementOfList = new LinkedListObject(value, value);
            this._firstElement = elementOfList;
            this._lastElement = elementOfList;
        }
        else {
            elementOfList = new LinkedListObject(value, this._lastElement);
            this._lastElement._element.next = elementOfList;
            this._lastElement = elementOfList;
        }
        return true;
    }

    pop() {
        if (this._lastElement === undefined) {
            return false;
        }
        let element = this._lastElement._element.value;
        this._lastElement = this._lastElement._element.previous;
        return element;
    }

    shift(value) {
        let elementOfList;
        if (this._firstElement === undefined) {
            elementOfList = new LinkedListObject(value, value);
            this._firstElement = elementOfList;
            this._lastElement = elementOfList;
        }
        else {
            elementOfList = new LinkedListObject(value, this._lastElement);
            let secondElement = this._firstElement;
            this._firstElement = elementOfList;
            secondElement._element.previous = this._firstElement;
            this._firstElement._element.next = secondElement;
        }
        return true;
    }

    unshift() {
        if (this._firstElement === undefined) {
            return false;
        }
        let element = this._firstElement._element.value;
        this._firstElement = this._firstElement._element.next;
        return element;
    }
}

module.exports = LinkedListObject;


