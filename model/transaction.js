const Transaction = function(balance) {
  this.date = new Date(Date.now());
  this.balance = balance;
}

Transaction.prototype.deposit = function(amount) {
  this.credit = amount;
}

Transaction.prototype.withdraw = function(amount) {
  this.debit = amount;
}

module.exports = Transaction;
