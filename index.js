'use strict';

let bubbleSort = require('./methods/bubbleSort/bubble-sort');
let coverByTile = require('./methods/coverByTile/coverByTile.js');
let watermelon = require('./methods/watermelon/watermelon.js');
let beautifulyear = require('./methods/beautifulyear/beautifulyear.js');
let stones = require('./methods/stones/stones.js');
let chat = require('./methods/chat/chat.js');
let linkedListArray = require('./methods/LinkedList/LinkedListArray.js');
let linkedListObject = require('./methods/LinkedList/LinkedListObject.js');
let stack = require('./methods/stack/Stack.js');
let queue = require('./methods/queue/Queue.js');

let algolib = {
    bubbleSort,
    coverByTile,
    watermelon,
    beautifulyear,
    stones,
    chat,
    linkedListArray,
    stack,
    queue,
    linkedListObject
}

module.exports = algolib;