/*jshint esversion: 6*/
const chai = require('chai');
const expect = chai.expect;

const bubbleSort = require('../bubbleSort.js');

describe('sorting', () => {

  it('should return an array', () => {
      expect(bubbleSort([1,2,3])).to.be.a('object');
    });

  it('should sort an unsorted array', () => {
      expect(bubbleSort().mrSortyPants([5,4,3,2,1])).to.deep.equal([1,2,3,4,5]);
      expect(bubbleSort().mrSortyPants([5,4,3,-2,1])).to.deep.equal([-2,1,3,4,5]);
    });

});