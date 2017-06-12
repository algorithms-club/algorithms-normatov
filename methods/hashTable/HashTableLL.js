'use strict';
let LinkedList = require('../LinkedList/LinkedListObject');


class HashTableLL {

    constructor() {
        this._elemets = [];

    }

    add(key, value) {
        if (key == '' || value == '') return false;
        let index = HashTableLL.hashCode(0, 1);
        if (this._elemets[index] == undefined) {
            this._elemets[index] = new LinkedList();
            this._elemets[index].push(value);
        }
        else {
            this._elemets[index].push(value);
        }
        return true;
    }

    get(key,value) {
        let index = HashTableLL.hashCode(0, 1);
        if (this._elemets[index] != undefined) {
            return this._elemets[index].getNode(value)?this._elemets[index].getNode(value).value:false;
        }
        else return false;
    }


    static hashCode(start, end) {
        let hash = Math.floor(Math.random() * end) + start;
        return hash;
    }
}


module.exports = HashTableLL;
