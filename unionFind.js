'use strict';

class UnionFind {

    constructor() {
        this._elements = [];
    }

    connect(a, b) {

        if (this.isConnected(a, b)) return;

        if (isNaN(this._elements[a])) {
            this._elements[a] = a;
            // this._elements[1]=1;
        }

        this._elements[b] = isNaN(this._elements[b]) ? b : this._elements[b];
        let componentA = this._elements[a];
        let componentB = this._elements[b];

        for (let i = 0; i < this._elements.length; i++) {
            if (this._elements[i] == componentA) {
                this._elements[i] = componentB;
            }
        }


    }

    isConnected(a, b) {
        // [undefined,undefined]
        if (isNaN(this._elements[a]) || isNaN(this._elements[b])) {
            return false;
        }
        return this._elements[a] === this._elements[b];
    }

    count() {
        let count = 0;
        let components = [];
        for (let i = 0; i < this._elements.length; i++) {
            if (!isNaN(this._elements[i])) {
                if (isUnique(components, this._elements[i])) {
                    components[count] = this._elements[i];
                    count++;
                }
            }
        }
        return count;
    }


    component(a) {


        return this._elements[a];

    }

}
function isUnique(array, element) {
    for (var j = 0; j < array.length; j++) {
        if (array[j] == element) return false;
    }
    return true;
}

module.exports = UnionFind;