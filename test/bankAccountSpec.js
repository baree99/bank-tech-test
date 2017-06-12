var expect = require('chai').expect;
const BankAccount = require('../model/bankAccount.js')

describe('BankAccount', function() {

  var bankAccount;

  beforeEach(function() {
    bankAccount = new BankAccount();
  });

  it('initialize with zero balance', function() {
    expect(bankAccount.balance).to.equal(0)
  });

  describe('Deposit', function() {
    it('adds the amount to the account balance', function() {
      bankAccount.deposit(1000);
      expect(bankAccount.balance).to.equal(1000)
    });

    it('creates a new transaction and records it in the statement', function() {
      bankAccount.deposit(2000);
      expect(bankAccount.statement.transactions[0].balance).to.equal(2000);
      expect(bankAccount.statement.transactions[0].credit).to.equal(2000);
    });
  });

  describe('Withdraw', function() {
    it('deducts the amount from the account balance', function() {
      bankAccount.withdraw(500)
      expect(bankAccount.balance).to.equal(-500)
    });

    it('creates a new transaction and records it in the statement', function() {
      bankAccount.withdraw(1000);
      expect(bankAccount.statement.transactions[0].balance).to.equal(-1000);
      expect(bankAccount.statement.transactions[0].debit).to.equal(1000);
    });
  });
});
