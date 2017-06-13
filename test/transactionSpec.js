var expect = require('chai').expect;
const Transaction = require('../model/transaction.js');

describe('Transaction', function() {

  var transaction;

  it("records the day of the transaction", function() {
    transaction = new Transaction("12/06/2017", 2000);
    expect(transaction.date).to.equal("12/06/2017");
  });

  it('records a debit', function(){
    transaction = new Transaction("12/06/2017", 'debit', 2000, 2000);
    expect(transaction.debit).to.equal(2000);
  });

  it('records a credit', function(){
    transaction = new Transaction("12/06/2017", 'credit', 2000, 2000);
    expect(transaction.credit).to.equal(2000);
  });

  it('records the current balance of the account', function(){
    transaction = new Transaction("12/06/2017", 'credit', 2000, 2000);
    expect(transaction.balance).to.equal(2000);
  });

});
