'use strict';

const algolib = require('../index.js');

describe.only('#quikUnion', function () {
    it('#should create proper data structure', function () {
        let qu = new algolib.quickUnion();
        qu.connect.should.be.instanceOf(Function);
        qu.isConnected.should.be.instanceOf(Function);
        qu.count.should.be.instanceOf(Function);
        qu.component.should.be.instanceOf(Function);
    })


    it('#isConnected should return false if not connected', function () {
        let qu = new algolib.quickUnion();
        let isElementConnected = qu.isConnected(3, 5);
        isElementConnected.should.be.false();
    })

    it('#isConnected should return true if 2 elements are connected', function () {
        let qu = new algolib.quickUnion();
        qu.connect(3, 5);
        let isElementConnected = qu.isConnected(3, 5);
        isElementConnected.should.be.eql(true);
    })
    it('#isConnected should return true if 3 elements are connected', function () {
        let qu = new algolib.quickUnion();
        qu.connect(3, 5);
        qu.connect(3, 1);
        let isElementConnected = qu.isConnected(1, 5);
        isElementConnected.should.be.eql(true);
    })
    it('#isConnected should return true if 5 elements are connected', function () {
        let qu = new algolib.quickUnion();
        qu.connect(3, 5);
        qu.connect(3, 1);
        qu.connect(4, 2);
        qu.connect(5, 4);
        let isElementConnected = qu.isConnected(4, 3);
        isElementConnected.should.be.eql(true);
    })
    it('#count should return number not only when we have 2 components', function () {
        let qu = new algolib.quickUnion();
        qu.connect(3, 6);
        qu.connect(8, 10);
        let numberOfComponents = qu.count();
        numberOfComponents.should.be.eql(2);
    })

    it('#count should return number not only when we have 1 component', function () {
        let qu = new algolib.quickUnion();
        qu.connect(3, 6);
        let numberOfComponents = qu.count();
        numberOfComponents.should.be.eql(1);
    })

    it('#count should return number not only when we have 3 components', function () {
        let qu = new algolib.quickUnion();
        qu.connect(3, 6);
        qu.connect(7, 5);
        qu.connect(8, 2);
        let numberOfComponents = qu.count();
        numberOfComponents.should.be.eql(3);
    })

    it('#component should return component name if component has 2 elements', function () {
        let qu = new algolib.quickUnion();
        qu.connect(2, 1);
        let nameOfComponent = qu.component(1);
        nameOfComponent.should.be.eql(2);
    })

    it('#component should return undefined, because element not exist', function () {
        let qu = new algolib.quickUnion();
        qu.connect(1, 2);
        let nameOfComponent = qu.component(5);
        (nameOfComponent === undefined).should.be.true()
    })

    it('#component should return component name if component has more than 3 elements', function () {
        let qu = new algolib.quickUnion();
        qu.connect(1, 2);
        qu.connect(2, 3);
        qu.connect(1, 5);
        let nameOfComponent = qu.component(1);
        nameOfComponent.should.be.eql(5);
    })

    it('#component should return component name if component has more than 2 elements', function () {
        let qu = new algolib.quickUnion();
        qu.connect(1, 2);
        qu.connect(2, 3);
        let nameOfComponent = qu.component(2);
        nameOfComponent.should.be.eql(3);
    })

    it('#isConnected should connect the smaller tree to bigger one', function () {
        let qu = new algolib.quickUnion();
        qu.connect(3, 5);
        qu.connect(3, 1);
        qu.connect(4, 2);
        qu.connect(5, 4);
        let nameOfComponent = qu.component(2);
        nameOfComponent.should.be.eql(4);
    })

    it('#isConnected should connect the smaller tree to bigger one', function () {
        let qu = new algolib.quickUnion();
        qu.connect(3, 5);
        qu.connect(3, 1);
        qu.connect(4, 2);
        qu.connect(4, 5);
        let nameOfComponent = qu.component(2);
        nameOfComponent.should.be.eql(4);
    })
})
