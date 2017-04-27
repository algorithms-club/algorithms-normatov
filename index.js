'use strict';

let bubbleSort = require('./methods/bubbleSort/bubble-sort');
let coverByTile = require('./methods/coverByTile/coverByTile.js');
let quickUnion = require('./methods/QuickUnion/QuickUnion.js');

let algolib = {
    bubbleSort,
    coverByTile,
    quickUnion

}

module.exports = algolib;