var assert = require('assert');
var expect = require('chai').expect;
const Withdraw = require('../model/withdraw.js')

var withdraw = new Withdraw('14/01/2012')

describe('Withdraw', function(){
  it('records a date', function() {
    expect(withdraw.date).to.equal('14/01/2012')
  });
})
