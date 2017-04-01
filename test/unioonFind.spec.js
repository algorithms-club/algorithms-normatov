'use strick'
const algolib = require('../index.js');


describe.only('#unionFind', function () {
    it('should create proper data structure', function () {
        let uf = new algolib.UnionFind();
        uf.connect.should.be.instanceOf(Function);
        uf.isConnected.should.be.instanceOf(Function);

        // uf.connect(3,6);
        // uf.connect(2,4);
        // uf.isConnected(2,6); //false
        // uf.isConnected(4,2); //true
    })

    it('should #isConnected return false if not connected', function () {
        let uf = new algolib.UnionFind();
        let isElementConnected = uf.isConnected(23, 2323);
        isElementConnected.should.be.false();
    })

    it('should #isConnected return true if elements are connected', function () {
        let uf = new algolib.UnionFind();
        uf.connect(3, 6);
        let isElementConnected = uf.isConnected(3, 6);
        isElementConnected.should.be.eql(true);
    })

    it('should #isConnected return true if elements are connected', function () {
        let uf = new algolib.UnionFind();
        uf.connect(3, 6);
        let isElementConnected = uf.isConnected(6, 3);
        isElementConnected.should.be.eql(true);
    })

    it('should #isConnected return true if 3 elements are connected', function () {
        let uf = new algolib.UnionFind();
        uf.connect(3, 6);
        uf.connect(3, 10);
        let isElementConnected = uf.isConnected(10, 6);
        isElementConnected.should.be.eql(true);
    })

    it('should #count return count of elements in list', function () {
        let uf = new algolib.UnionFind();
        uf.connect(3, 6);
        uf.connect(3, 10);
        let count = uf.count();
        count.should.be.eql(3);
    })

    it('should #count return count of elements in list', function () {
        let uf = new algolib.UnionFind();
        uf.connect(3, 6);
        uf.connect(3, 10);
        uf.connect(12, 10);
        let count = uf.count();
        count.should.be.eql(4);
    })

    it('should #count return count of elements in list', function () {
        let uf = new algolib.UnionFind();
        let count = uf.count();
        count.should.be.eql(0);
    })

    it('should #component return count of elements in compomnent', function () {
        let uf = new algolib.UnionFind();
        uf.connect(12, 10);
        uf.connect(12, 11);
        let count = uf.component(11);
        count.should.be.eql(3);
    })

    it('should #component return count of elements in compomnent', function () {
        let uf = new algolib.UnionFind();
        uf.connect(12, 10);
        uf.connect(12, 11);
        uf.connect(10, 15);
        let count = uf.component(15);
        count.should.be.eql(4);
    })

})
