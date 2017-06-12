var expect = require('chai').expect;
const Transaction = require('../model/transaction.js');

describe('Transaction', function() {

  var transaction = new Transaction("12/06/2017",2000);

  it("records the day of the transaction", function() {
    expect(transaction.date).to.equal("12/06/2017");
  });

  it('records the balance of the account', function(){
    expect(transaction.balance).to.equal(2000);
  });

  describe('Credit', function() {
    it('records the amount to be credited', function(){
      transaction.deposit(2000);
      expect(transaction.credit).to.equal(2000);
    });
  });

  describe('Debit', function() {
    it('records the amount to be debited', function(){
      transaction.withdraw(2000);
      expect(transaction.debit).to.equal(2000);
    });
  });
});
