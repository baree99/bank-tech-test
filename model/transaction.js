const Transaction = function(date, balance) {
  this.date = date;
  this.balance = balance;
}

Transaction.prototype.credit = function(amount) {
  this.credit = amount;
}

Transaction.prototype.debit = function(amount) {
  this.debit = amount;
}

module.exports = Transaction;
