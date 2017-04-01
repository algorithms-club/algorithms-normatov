'use strick'

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
        for (let i = 0; i < this._elements.length; i++) {
            if (!isNaN(this._elements[i])) {
                count++;
            }
        }
        return count;
    }

    component(a) {
        let count = 0;
        for (let i = 0; i < this._elements.length; i++) {

            if (this._elements[i] === a) count++;
        }
        return count;

    }

}

module.exports = UnionFind;