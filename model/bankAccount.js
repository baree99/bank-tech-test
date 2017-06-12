const BankAccount = function() {
    this.balance = 0;
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

module.exports = BankAccount;
