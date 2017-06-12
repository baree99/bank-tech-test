const Deposit = function(date, amount, balance) {
  this.date = date;
  this.credit = amount;
  this.balance = balance;
}

module.exports = Deposit;
