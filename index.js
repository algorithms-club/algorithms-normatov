'use strict';

let bubbleSort = require('./bubble-sort');
let coverByTile = require('./entry-test/coverByTile.js');
let UnionFind = require('./unionFind.js');

let algolib = {
    bubbleSort,
    coverByTile,
    UnionFind
}

module.exports = algolib;