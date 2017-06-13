const Statement = function() {
  this.transactions = [];
};

Statement.prototype.addTransaction = function(transaction) {
  this.transactions.unshift(transaction);
};

Statement.prototype.print = function () {
  header();
  body(this.transactions);
};

function header() {
  console.log("date || credit || debit || balance");
}

function body(transactions) {
  transactions.forEach(function(element) {
    console.log(
      element.date +
      " || " +
      ifDefined(element.credit) +
      " || " +
      ifDefined(element.debit) +
      " || " +
      element.balance.toFixed(2)
    );
  });
}

function ifDefined(value) {
  return (value ? value.toFixed(2) : "");
}

module.exports = Statement;
