'use strict';

class QuickUnion {

    constructor() {
        this._elements = [];
        this._numberElementsInComponent = [];
    }

    connect(a, b) {

        if (this.isConnected(a, b)) return;
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

        if (this._numberElementsInComponent[a] < this._numberElementsInComponent[b]) {

            this._elements[rootA] = rootB;
            this._numberElementsInComponent[a] += this._numberElementsInComponent[b];
        }
        else {
            this._elements[rootB] = rootA;
            this._numberElementsInComponent[b] += this._numberElementsInComponent[a];
        }
        console.log('');

    }

    isConnected(a, b) {
        if (isNaN(this._elements[a]) || isNaN(this._elements[b])) {
            return false;
            console.log('isNaN')
        }
        let rootA = findRoot(a, this._elements);
        let rootB = findRoot(b, this._elements);
        console.log('rootA ' + rootA);
        console.log('rootB ' + rootB);
        return rootA == rootB;
    }

    count() {

    }

    component(a) {

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
