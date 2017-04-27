'use strict';

let bubbleSort = require('./methods/bubbleSort/bubble-sort');
let coverByTile = require('./methods/coverByTile/coverByTile.js');
let UnionFind = require('./methods/UnionFind/unionFind.js');

let algolib = {
    bubbleSort,
    coverByTile,
    UnionFind
}

module.exports = algolib;