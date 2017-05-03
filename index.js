'use strict';

let bubbleSort = require('./methods/bubbleSort/bubble-sort');
let coverByTile = require('./methods/coverByTile/coverByTile.js');
let quickUnion = require('./methods/QuickUnion/QuickUnion.js');
let watermelon = require('./methods/watermelon/watermelon.js');
let beautifulyear = require('./methods/beautifulyear/beautifulyear.js');
let stones = require('./methods/stones/stones.js');
let chat = require('./methods/chat/chat.js');


let algolib = {
    bubbleSort,
    coverByTile,
    quickUnion,
    watermelon,
    beautifulyear,
    stones,
    chat,
}

module.exports = algolib;