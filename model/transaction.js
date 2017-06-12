const Transaction = function(balance) {
  this.date = new Date(Date.now());
  this.balance = balance;
}

Transaction.prototype.credit = function(amount) {
  this.credit = amount;
}

Transaction.prototype.debit = function(amount) {
  this.debit = amount;
}

module.exports = Transaction;
