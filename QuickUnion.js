'use strict';

class QuickUnion {

    constructor() {
        this._elements = [];
        this._numberElementsInComponent = [];
    }

    connect(a, b) {

        // if (this.isConnected(a, b)) return;
        if (isNaN(this._elements[a])) {
            this._elements[a] = a;
            this._numberElementsInComponent[a] = 1;
        }
        if (isNaN(this._elements[b])) {
            this._elements[b] = b;
            this._numberElementsInComponent[b] = 1;
        }
        let rootA = findRoot(a, this._elements);
        let rootB = findRoot(b, this._elements);

        if (this._numberElementsInComponent[rootA] < this._numberElementsInComponent[rootB]) {
            this._elements[rootA] = b;
            this._numberElementsInComponent[rootA] += this._numberElementsInComponent[rootB];
        }
        else {
            this._elements[rootB] = a;
            this._numberElementsInComponent[rootB] += this._numberElementsInComponent[rootA];
        }
    }

    isConnected(a, b) {
        let rootA = findRoot(a);
        console.log(rootA);
        let rootB = findRoot(b);
        console.log(rootB);
        return rootA == rootB;
    }

    count() {

    }

    component(a) {

    }

}
function findRoot(element, arrayOfelements) {
    if (isNaN(arrayOfelements) || isNaN(arrayOfelements[element])) return element;
    else findRoot(arrayOfelements[element])
}

module.exports = QuickUnion;
