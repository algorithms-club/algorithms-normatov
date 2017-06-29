'use strict'


class TSP {

    constructor(node) {
        this.graph = [];
        if (node != undefined) this.graph.push(node);
    }

    addNode(node) {
        this.graph.push(node)
        return true;
    }

    _exist(nameOfPoint) {
        for (let i = 0; i < this.graph.length; i++) {
            if (this.graph[i].name == nameOfPoint) return true
        }
        return false;

    }

    find(from) {
        console.log(from);
        let minDistance = this.graph[0].distance;
        let minNeigbor=this.graph[0].neighbor;
        let minNeigborIndex = 0;
        let totalDistance = 0;
        for (let i = 0; i < this.graph.length; i++) {
            if (this.graph[i].name == from && this._exist(this.graph[i].neighbor) && this.graph[i].distance < minDistance) {
                minDistance = this.graph[i].distance;
                minNeigbor = this.graph[i].neighbor;
                minNeigborIndex = i;
            }
        }
        totalDistance += minDistance;
        this.graph.splice(minNeigborIndex, 1);
        if (this.graph.length < 1 || !this._exist(minNeigbor)) return totalDistance;
        else return this.find(minNeigbor) + totalDistance;
    }

}
module.exports = TSP;