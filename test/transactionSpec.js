var expect = require('chai').expect;
const Transaction = require('../model/transaction.js')

var transaction = new Transaction(2000);

describe('Transaction', function() {
  it("records the day of the transaction", function() {
    var today = new Date(Date.now())
    expect(transaction.date.toLocaleDateString('en-US')).to.equal(today.toLocaleDateString('en-US'))
  });

  it('records the balance of the account', function(){
    expect(transaction.balance).to.equal(2000)
  });

  describe('Credit', function() {
    it('records the amount to be credited', function(){
      transaction.credit(2000);
      expect(transaction.credit).to.equal(2000)
    });
  });

  describe('Debit', function() {
    it('records the amount to be debited', function(){
      transaction.debit(2000);
      expect(transaction.debit).to.equal(2000)
    });
  });
});
