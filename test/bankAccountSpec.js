var expect = require('chai').expect;
const BankAccount = require('../model/bankAccount.js')

var bankAccount;

beforeEach(function() {
  bankAccount = new BankAccount();
});

describe('BankAccount', function() {
  it('initialize with zero balance', function() {
    expect(bankAccount.balance).to.equal(0)
  });

  describe('deposit', function() {
    it('adds the amount to the account balance', function() {
      bankAccount.deposit(1000)
      expect(bankAccount.balance).to.equal(1000)
    });
  });

  describe('withdraw', function() {
    it('deducts the amount from the account balance', function() {
      bankAccount.withdraw(500)
      expect(bankAccount.balance).to.equal(-500)
    });
  });
});
