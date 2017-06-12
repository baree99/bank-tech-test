var assert = require('assert');
var expect = require('chai').expect;
const Deposit = require('../model/deposit.js')

var deposit = new Deposit('10/01/2012',2000);

describe('Deposit', function() {
  it('has a date', function() {
    expect(deposit.date).to.equal('10/01/2012')
  });

  it('records the amount to be credited', function(){
    expect(deposit.credit).to.equal(2000)
  });
});
