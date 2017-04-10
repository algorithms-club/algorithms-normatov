'use strict';

class QuickUnion {

    constructor() {
        this._elements = [];
        this._numberElementsInComponent = [];
    }

    connect(a, b) {
        if (this.isConnected(a, b)) return;

        if (isNaN(this._elements[a])) this._elements[a] = a;
        if (isNaN(this._elements[b])) this._elements[b] = b;

        let rootA = findRoot(a, this._elements);
        let rootB = findRoot(b, this._elements);

        if (isNaN(this._numberElementsInComponent[rootA])) this._numberElementsInComponent[rootA] = a;
        if (isNaN(this._numberElementsInComponent[rootB])) this._numberElementsInComponent[rootB] = b;

        if (this._numberElementsInComponent[rootA] > this._numberElementsInComponent[rootB]) {
            this._elements[rootA] = rootB;
            this._numberElementsInComponent[rootB] += this._numberElementsInComponent[rootA];
        }
        else {
            this._elements[rootB] = rootA;
            this._numberElementsInComponent[rootA] += this._numberElementsInComponent[rootB];
        }
    }

    isConnected(a, b) {
        if (isNaN(this._elements[a]) || isNaN(this._elements[b])) {
            return false;
            console.log('isNaN')
        }
        let rootA = findRoot(a, this._elements);
        let rootB = findRoot(b, this._elements);
        return rootA == rootB;
    }

    count() {
        let count = 0;
        for (var nextElement = 0; nextElement < this._elements.length; nextElement++) {
            if (this._elements[nextElement] == nextElement) count++;
        }
        return count;
    }

    component(a) {
        return findRoot(a, this._elements);
    }

}
function findRoot(element, arrayOfelements) {
    /*  if (arrayOfelements[element] === element) {
     console.log('return ' + element);
     return element;
     }
     else {
     console.log('recursion '+arrayOfelements[element]);
     findRoot(arrayOfelements[element], arrayOfelements);
     }*/
//why recursion does not work? it returns correct element, but comes undefined....
    while (arrayOfelements[element] != element) {
        element = arrayOfelements[element];
    }
    return element;
}

module.exports = QuickUnion;
