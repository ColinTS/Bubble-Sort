/*jshint esversion: 6*/
const chai = require('chai');
const expect = chai.expect;

const sort = require('../sort.js');

describe('bubble sort', () => {

  it('should return an array', () => {
      expect(sort).to.be.a('object');
    });

  it('should sort an unsorted array', () => {
      expect(sort.mrSortyPants([5,4,3,2,1])).to.deep.equal([1,2,3,4,5]);
      expect(sort.mrSortyPants([5,4,3,-2,1])).to.deep.equal([-2,1,3,4,5]);
    });

});

describe('quick sort', () => {

  it('should be a function', () => {
      expect(sort.howBoutAQuickie).to.be.a('function');
    });

  it('should sort an unsorted ray', () => {
      expect(sort.howBoutAQuickie([4,1,9,2,12,3])).to.deep.equal([1,2,3,4,9,12]);
    });


});