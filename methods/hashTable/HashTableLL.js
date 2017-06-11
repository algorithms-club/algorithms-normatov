'use strict';
let LinkedList = require('../LinkedList/LinkedListObject');


class HashTable {

    constructor() {
        this._elemets = [];

    }

    add(key, value) {
        if (key == '' || value == '') return false;
        let index = key.hashCode();
        if (this._elemets[index] = undefined) {
            this._elemets[index] = new LinkedList();
            this._elemets[index].push(value);
        }
        else this._elemets[index].push(value);
        return true;
    }

    get(key) {
        let index = key.hashCode();
        if (this._elemets[index] != undefined) {
            while (this._elemets[index]._elemets.next!='undefined'){


            }
            return this._elemets[index].get()
        }
        else return false;
    }

}

String.prototype.hashCode = function () {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    return hash;
};

module.exports = HashTable;
