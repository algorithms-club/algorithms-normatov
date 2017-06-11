'use strict';

class HashTable {

    constructor() {
        this._elemets = [];

    }

    add(key, value) {
        if (key == '' || value == '') return false;
        this._elemets[key.hashCode()] = value;
        return true;
    }

    get(key) {
        if (this._elemets[key.hashCode()]!=undefined) return this._elemets[key.hashCode()];
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
