var expect = require('chai').expect;
const assert = require('assert');
const sinon  = require('sinon');
const Statement = require('../model/statement.js')

var statement = new Statement();

describe('Statement', function() {
  it('initialize with an empty array of transactions', function() {
    expect(statement.transactions).to.deep.equal([])
  });

  it('prints out a statement', function() {
    statement.transactions = [{ date: new Date("2017-06-12"), balance: 2000, credit: 2000 }];
    let spy = sinon.spy(console, 'log');
    statement.print();
    assert(spy.calledWith("date || credit || debit || balance"));
    assert(spy.calledWith("6/12/2017 || 2000 ||  || 2000"));
    spy.restore();
  });
});
