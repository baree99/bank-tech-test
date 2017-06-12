const Transaction = function(date, balance) {
  this.date = date;
  this.balance = balance;
};

Transaction.prototype.deposit = function(amount) {
  this.credit = amount;
};

Transaction.prototype.withdraw = function(amount) {
  this.debit = amount;
};

module.exports = Transaction;
