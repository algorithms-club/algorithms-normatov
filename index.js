'use strict';

let bubbleSort = require('./bubble-sort');
let coverByTile = require('./entry-test/coverByTile.js');
let quickUnion = require('./QuickUnion.js');

let algolib = {
    bubbleSort,
    coverByTile,
    quickUnion

}

module.exports = algolib;