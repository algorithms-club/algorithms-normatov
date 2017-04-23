'use strict';

class LinkedList {

    constructor() {
        this._elements = [];
    }

//add to end
    push(element) {

        if (isNaN(this._elements['firstElement'])) {
            this._elements['firstElement'] = element;
            this._elements['prevElement'] = element;
            this._elements['lastElement'] = element;
        }
        else {
            this._elements['prevElement'] = this._elements['lastElement'];
            this._elements['value'] = element;
            this._elements['lastElement'] = element;

        }
        console.log('lastElement=' + this._elements['lastElement']);
        console.log('prevElement=' + this._elements['prevElement']);
    }

//get and remove from end
    pop() {
        let element = this._elements['lastElement'];
        this._elements['lastElement'] = this._elements['prevElement'];
        return element;
    }

    // add to start
    shift(element) {

    }

    //get and remove from start
    unshift() {

    }

}

module.exports = LinkedList;

