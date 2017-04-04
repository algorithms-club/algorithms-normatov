'use strick'
const algolib = require('../index.js');


describe.only('#unionFind', function () {
    it('should create proper data structure', function () {
        let uf = new algolib.UnionFind();
        uf.connect.should.be.instanceOf(Function);
        uf.isConnected.should.be.instanceOf(Function);
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

    it('should #isConnected return true if 3 elements are connected', function () {
        let uf = new algolib.UnionFind();
        uf.connect(3, 6);
        uf.connect(3, 10);
        let isElementConnected = uf.isConnected(10, 6);
        isElementConnected.should.be.eql(true);
    })

    it('should #count return number of components if we have 2 components', function () {
        let uf = new algolib.UnionFind();
        uf.connect(3, 6);
        uf.connect(8, 10);
        let numberOfComponents = uf.count();
        numberOfComponents.should.be.eql(2);
    })

    it('should #count return number of components if we have 1 component', function () {
        let uf = new algolib.UnionFind();
        uf.connect(3, 6);
        let numberOfComponents = uf.count();
        numberOfComponents.should.be.eql(1);
    })

    it('should #count return number of components if we have 3 components', function () {
        let uf = new algolib.UnionFind();
        uf.connect(3, 6);
        uf.connect(7, 5);
        uf.connect(8, 2);
        let numberOfComponents = uf.count();
        numberOfComponents.should.be.eql(3);
    })

    it('should #component return component name ', function () {
        let uf = new algolib.UnionFind();
        uf.connect(1, 2);
        let nameOfComponent = uf.component(1);
        nameOfComponent.should.be.eql(2);
    })

    it('should #component return undefined, because element not exist', function () {
        let uf = new algolib.UnionFind();
        uf.connect(1, 2);
        let nameOfComponent = uf.component(5);
        (nameOfComponent === undefined).should.be.true()
    })

    it('should #component return component name', function () {
        let uf = new algolib.UnionFind();
        uf.connect(1, 2);
        uf.connect(2, 3);
        uf.connect(1, 5);
        let nameOfComponent = uf.component(1);
        nameOfComponent.should.be.eql(5);
    })

    it('should #component return component name', function () {
        let uf = new algolib.UnionFind();
        uf.connect(1, 2);
        uf.connect(2, 3);
        let nameOfComponent = uf.component(2);
        nameOfComponent.should.be.eql(3);
    })

})
