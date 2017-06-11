
'use strict';

const algolib = require('../index.js');
var assert = require('assert');

describe('HashTable', function () {

    describe('#data structure', function () {
        it('#should create proper data structure', function () {
            let hashTable = new algolib.HashTable;
            hashTable.add.should.be.instanceOf(Function);
            hashTable.get.should.be.instanceOf(Function);
        });

    });
    describe('#add(key,value)', function () {
        it('#add(key,value) should return true, if  1 element added to hash table', function () {
            let hashTable = new algolib.HashTable;
            hashTable.add('Vasya','12').should.true();
        });
        it('#add(key,value) should return false, if key or value of element empty', function () {
            let hashTable = new algolib.HashTable;
            hashTable.add('','12').should.false();
            hashTable.add('Petya','').should.false();
        });

    });

    describe.only('#get(key)', function () {
        it('#get value from the hash table using values key', function () {
            let hashTable = new algolib.HashTable;
            hashTable.add('Vasya','12');
            hashTable.add('Petya','14');
            hashTable.get('Vasya').should.equal('12');
            hashTable.get('Petya').should.equal('14');
        });
        it('#get value from the hash table should return false if key does not exist', function () {
            let hashTable = new algolib.HashTable;
            hashTable.add('Vasya','12');
            hashTable.add('Petya','14');
            hashTable.get('Vasya1').should.false();
            hashTable.get('Petya1').should.false();
        });
    });
});


