'use strict';

let bubbleSort = require('./bubble-sort');
let coverByTile = require('./entry-test/coverByTile.js');
let watermelon = require('./entry-test/watermelon.js');
let beautifulyear = require('./entry-test/beautifulyear.js');
let stones = require('./entry-test/stones.js');

let algolib = {
    bubbleSort,
    coverByTile,
    watermelon,
    beautifulyear,
    stones
}

module.exports = algolib;