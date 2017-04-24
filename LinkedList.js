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
        this.firstElement;
        this.lastElement;
    }

//add to end
    push(element) {
        let elementOfList;
        if (!(this.firstElement instanceof ElementOfList)) {
            elementOfList = new ElementOfList(element, element);
            this.firstElement = elementOfList;
            this.lastElement = elementOfList;
        }
        else {
            elementOfList = new ElementOfList(element, this.lastElement);
            this.lastElement._elements['next'] = elementOfList;
            this.lastElement = elementOfList;
        }
        return true;
    }

//get and remove from end
    pop() {
        if (!(this.lastElement instanceof ElementOfList)) {
            throw  new Error("List is empty");
        }
        let element = this.lastElement._elements['value'];
        this.lastElement = this.lastElement._elements['previous'];
        return element;
    }

    // add to start
    shift(element) {
        let elementOfList;
        if (!(this.firstElement instanceof ElementOfList)) {
            elementOfList = new ElementOfList(element, element);
            this.firstElement = elementOfList;
            this.lastElement = elementOfList;
        }
        else {
            elementOfList = new ElementOfList(element, this.lastElement);
            let secondElement = this.firstElement;
            this.firstElement = elementOfList;
            secondElement._elements['previous'] = this.firstElement;
            this.firstElement._elements['next'] = secondElement;
        }
        return true;
    }

    //get and remove from start
    unshift() {
        if (!(this.firstElement instanceof ElementOfList)) {
            throw  new Error("List is empty");
        }
        let element = this.firstElement._elements['value'];
        this.firstElement = this.firstElement._elements['next'];
        return element;
    }
}

module.exports = LinkedList;

