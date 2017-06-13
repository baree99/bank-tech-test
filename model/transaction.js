const Transaction = function(date, type, amount, balance) {
  this.date = date;
  this[type] = amount;
  this.balance = balance;
};

module.exports = Transaction;
