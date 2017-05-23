'use strict';


class ElementOfList {

    constructor(value, previous) {
        this._elements = [];
        this._elements['value'] = value;
        this._elements['previous'] = previous;
    }

}

class LinkedList {

    constructor() {
        this._firstElement;
        this._lastElement;
    }

    push(value) {
        let elementOfList;
        if (!(this._firstElement instanceof ElementOfList)) {
            elementOfList = new ElementOfList(value, value);
            this._firstElement = elementOfList;
            this._lastElement = elementOfList;
        }
        else {
            elementOfList = new ElementOfList(value, this._lastElement);
            this._lastElement._elements['next'] = elementOfList;
            this._lastElement = elementOfList;
        }
        return true;
    }

    pop() {
        if (!(this._lastElement instanceof ElementOfList)) {
            throw  new Error("List is empty");
        }
        let element = this._lastElement._elements['value'];
        this._lastElement = this._lastElement._elements['previous'];
        return element;
    }

    shift(value) {
        let elementOfList;
        if (!(this._firstElement instanceof ElementOfList)) {
            elementOfList = new ElementOfList(value, value);
            this._firstElement = elementOfList;
            this._lastElement = elementOfList;
        }
        else {
            elementOfList = new ElementOfList(value, this._lastElement);
            let secondElement = this._firstElement;
            this._firstElement = elementOfList;
            secondElement._elements['previous'] = this._firstElement;
            this._firstElement._elements['next'] = secondElement;
        }
        return true;
    }

    unshift() {
        if (!(this._firstElement instanceof ElementOfList)) {
            throw  new Error("List is empty");
        }
        let element = this._firstElement._elements['value'];
        this._firstElement = this._firstElement._elements['next'];
        return element;
    }
}

module.exports = LinkedList;

