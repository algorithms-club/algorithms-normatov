'use strict';


class ElementOfList {

    constructor(value, previous) {
        this._elements = [];
        this._elements['value'] = value;
        this._elements['previous'] = previous;
        this._elements['next'] ;
    }

}

let lastElement;
let firstElement;

class LinkedList {

//add to end
    push(element) {
        let elementOfList;
        if (!(firstElement instanceof ElementOfList)) {
            elementOfList = new ElementOfList(element, element);
            firstElement = elementOfList;
            lastElement = elementOfList;
        }
        else {
            elementOfList = new ElementOfList(element, lastElement);
            // lastElement._elements['next'] = elementOfList; TODO
            lastElement = elementOfList;
        }
    }

//get and remove from end
    pop() {
        if (!(lastElement instanceof ElementOfList)) {
            throw  new Error("List is empty");
        }
        let element = lastElement._elements['value'];
        lastElement = lastElement._elements['previous'];
        return element;
    }

    // add to start
    shift(element) {
        let elementOfList;
        if (!(firstElement instanceof ElementOfList)) {
            elementOfList = new ElementOfList(element, element);
            firstElement = elementOfList;
            lastElement = elementOfList;
        }
        else {
            elementOfList = new ElementOfList(element, lastElement);
            let secondElement = firstElement;
            firstElement = elementOfList;
            secondElement._elements['previous'] = firstElement;
            firstElementю_elements['next'] = secondElement;
        }

    }

    //get and remove from start TODO
    unshift() {
        if (!(firstElement instanceof ElementOfList)) {
            throw  new Error("List is empty");
        }
        let element = firstElement._elements['value'];
        firstElement = firstElement._elements['next'];
        return element;
    }
}

module.exports = LinkedList;

