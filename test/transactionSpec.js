var expect = require('chai').expect;
const Transaction = require('../model/transaction.js')

var transaction = new Transaction('10/01/2012', 2000);

describe('Transaction', function() {
  it('records a date', function() {
    expect(transaction.date).to.equal('10/01/2012')
  });

  it('records the balance of the account', function(){
    expect(transaction.balance).to.equal(2000)
  });

  it('records the amount to be credited', function(){
    transaction.credit(2000)
    expect(transaction.credit).to.equal(2000)
  });

  it('records the amount to be debited', function(){
    transaction.debit(2000)
    expect(transaction.debit).to.equal(2000)
  });

});
