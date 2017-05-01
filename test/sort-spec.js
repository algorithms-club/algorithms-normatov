'use strict';

const algolib = require('../index.js');

describe('Sorting', function () {
    describe('#everythingSort', function () {
        it('should everythingSort collections of sorting numbers', function () {
            let array = [1, 2, 3];
            let sortArray = algolib.sort.everythingSort(array, algolib.sort.compareNumbers);
            sortArray.should.be.eql([1, 2, 3]);
        });

        it('should everythingSort collections of unsorting numbers', function () {
            let array = [1, 3, 2];
            let sortArray = algolib.sort.everythingSort(array, algolib.sort.compareNumbers);
            sortArray.should.be.eql([1, 2, 3]);
        });

        it('should everythingSort collections of sorting letters', function () {
            let array = ['a', 'b', 'c'];
            let sortArray = algolib.sort.everythingSort(array, algolib.sort.compareLetters);
            sortArray.should.be.eql(['a', 'b', 'c']);
        });

        it('should everythingSort collections of sorting letters', function () {
            let array = ['a', 'c', 'b'];
            let sortArray = algolib.sort.everythingSort(array, algolib.sort.compareLetters);
            sortArray.should.be.eql(['a', 'b', 'c']);
        });

    });
    describe('#insertionSort', function () {

        it('should sort collection of numbers', function () {
            let array = [2, 1, 6, 3, 5, 4, 7, 10, 8, 9];
            let sortArray = algolib.sort.insertionSort(array);
            sortArray.should.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        });
        it('should return empty collection when empty collection was passed', function () {
            let array = [];
            let sortArray = algolib.sort.insertionSort(array);
            sortArray.should.be.eql([]);
        });
        it('should return sorted collection if sorted collection was passed', function () {
            let array = [1, 2, 3];
            let sortArray = algolib.sort.insertionSort(array);
            sortArray.should.be.eql([1, 2, 3]);
        });
    });
    describe('#selectionSort', function () {
        it('should sort collection of numbers', function () {
            let array = [2, 1, 3, 5, 4];
            let sortArray = algolib.sort.selectionSort(array);
            sortArray.should.be.eql([1, 2, 3, 4, 5]);
        });
        it('should return empty collection when empty collection was passed', function () {
            let array = [];
            let sortArray = algolib.sort.selectionSort(array);
            sortArray.should.be.eql([]);
        });
        it('should return sorted collection if sorted collection was passed', function () {
            let array = [1, 2, 3];
            let sortArray = algolib.sort.selectionSort(array);
            sortArray.should.be.eql([1, 2, 3]);
        });
    });
    describe('#shellSort', function () {
        it('should sort collection of numbers', function () {
            let array = [2, 1, 6, 3, 5, 4, 7, 10, 8, 9];
            let sortArray = algolib.sort.shellSort(array);
            sortArray.should.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        });
        it('should return empty collection when empty collection was passed', function () {
            let array = [];
            let sortArray = algolib.sort.shellSort(array);
            sortArray.should.be.eql([]);
        });
        it('should return sorted collection if sorted collection was passed', function () {
            let array = [1, 2, 3];
            let sortArray = algolib.sort.shellSort(array);
            sortArray.should.be.eql([1, 2, 3]);
        });
    });
    describe('#isSorted', function () {
        it('should return true if collection is sorted', function () {
            let array = [1, 2, 3];
            let result = algolib.sort.isSorted(array, algolib.sort.compareNumbers);
            result.should.be.true();
        });
        it('should return false if collection is sorted', function () {
            let array = [2, 1, 3];
            let result = algolib.sort.isSorted(array, algolib.sort.compareNumbers);
            result.should.be.false();
        });
        it('should return true if collection is empty', function () {
            let array = [];
            let result = algolib.sort.isSorted(array, algolib.sort.compareNumbers);
            result.should.be.true();
        });
    });
    describe('#shuffle', function () {
        it('should return shuffle collection if collection is sorted', function () {
            let array = [1, 2, 3];
            let shuffleArray = algolib.sort.shuffle(array);
            algolib.sort.isSorted(shuffleArray, algolib.sort.compareNumbers).should.be.false();
        });
        it('should return shuffle collection collection is not sorted', function () {
            let array = [2, 1, 3];
            let shuffleArray = algolib.sort.shuffle(array);
            algolib.sort.isSorted(shuffleArray, algolib.sort.compareNumbers).should.be.false();
        });
        it('should return empty collection if collection is empty', function () {
            let array = [];
            let shuffleArray = algolib.sort.shuffle(array);
            algolib.sort.isSorted(shuffleArray).should.be.true();
        });
    });

});