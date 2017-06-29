'use strict';

const algolib = require('../index.js');
var assert = require('assert');

describe.only('TSP', function () {

    describe('#data structure', function () {
        it('#should create proper data structure', function () {
            let graph = new algolib.TSP;
            graph.addNode.should.be.instanceOf(Function);
        });

    });
    describe('#addNode(node)', function () {
        it('#addNode(node) should return true, if  1 element added to graph', function () {
            let graph = new algolib.TSP;
            graph.addNode(new algolib.Node('Kyiv','Chernigiv',15)).should.eql(true);
        });
    });

    describe('#find(node)', function () {
        it('#find(node) should count approximately total distance', function () {
            let graph = new algolib.TSP;
            graph.addNode(new algolib.Node('Kyiv','Chernigiv',15)).should.eql(true);
            graph.addNode(new algolib.Node('Chernigiv','Kharkiv',5));
            graph.addNode(new algolib.Node('Kharkiv','Zaporizzya',5));
            graph.addNode(new algolib.Node('Zaporizzya','Lviv',5));
            graph.addNode(new algolib.Node('Lviv','Zhitomir',2));
            graph.addNode(new algolib.Node('Zhitomir','Chernigiv',2));
            graph.addNode(new algolib.Node('Lviv','Kyiv',1));
            graph.addNode(new algolib.Node('Kharkiv','Chernigiv',2));
            console.dir(graph);
            graph.find('Kyiv').should.be.eql(34);
        });

    });
});


