var expect = require('chai').expect;
const assert = require('assert');
const sinon  = require('sinon');
const Statement = require('../model/statement.js')

describe('Statement', function() {

  var statement = new Statement();

  describe('RecordTransaction', function() {
    var testTransaction = { date: '12/06/2017', balance: 2000, credit: 2000 };
    statement.addTransaction(testTransaction)
    expect(statement.transactions).to.have.lengthOf(1)
  });

  describe('Print', function() {
    it('prints out a statement', function() {
      let spy = sinon.spy(console, 'log');
      statement.print();
      assert(spy.calledWith("date || credit || debit || balance"));
      assert(spy.calledWith("12/06/2017 || 2000 ||  || 2000"));
      spy.restore();
    });
  });
});
