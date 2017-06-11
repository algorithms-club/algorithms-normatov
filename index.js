'use strict';

let bubbleSort = require('./methods/bubbleSort/bubble-sort');
let coverByTile = require('./methods/coverByTile/coverByTile.js');
let UnionFind = require('./methods/UnionFind/unionFind.js')
let quickUnion = require('./methods/QuickUnion/QuickUnion.js');
let watermelon = require('./methods/watermelon/watermelon.js');
let beautifulyear = require('./methods/beautifulyear/beautifulyear.js');
let stones = require('./methods/stones/stones.js');
let chat = require('./methods/chat/chat.js');
let sort = require('./methods/sorting/Sort');
let linkedListArray = require('./methods/LinkedList/LinkedListArray.js');
let linkedListObject = require('./methods/LinkedList/LinkedListObject.js');
let stack = require('./methods/stack/Stack.js');
let queue = require('./methods/queue/Queue.js');
let BinaryHeap = require('./methods/binaryHeap/binaryHeap.js');
let priorityQueue = require('./methods/priorityQueue/priorityQueue.js');
let HashTable = require('./methods/hashTable/HashTable');
let HashTableLL = require('./methods/hashTable/HashTableLL');

let algolib = {
    bubbleSort,
    coverByTile,
    UnionFind,
    watermelon,
    beautifulyear,
    stones,
    chat,
    sort,
    linkedListArray,
    stack,
    queue,
    linkedListObject,
    quickUnion,
    BinaryHeap,
    priorityQueue,
    HashTable,
    HashTableLL
}

module.exports = algolib;