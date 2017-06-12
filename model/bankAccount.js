const Transaction = require('./transaction.js')
const Statement = require('./statement.js')

const BankAccount = function() {
    this.balance = 0;
    this.statement = new Statement();
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
  var transaction = new Transaction(this.balance);
  transaction.deposit(amount);
  this.statement.transactions.unshift(transaction);
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
  var transaction = new Transaction(this.balance);
  transaction.withdraw(amount);
  this.statement.transactions.unshift(transaction);
};



module.exports = BankAccount;
