const Transaction = require('./transaction.js');
const Statement = require('./statement.js');

const BankAccount = function() {
  this.balance = 0;
  this.statement = new Statement();
};

BankAccount.prototype.deposit = function(date, amount) {
  this.balance += amount;
  this.recordTransaction(date, amount, 'credit');
};

BankAccount.prototype.withdraw = function(date, amount) {
  this.balance -= amount;
  this.recordTransaction(date, amount, 'debit');
};

BankAccount.prototype.recordTransaction = function(date, amount, type) {
  var transaction = new Transaction(date, type, amount, this.balance);
  this.statement.addTransaction(transaction);
};

module.exports = BankAccount;
