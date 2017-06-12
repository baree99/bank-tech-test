const Statement = function() {
  this.transactions = [];
};

Statement.prototype.print = function () {
    header();
    body(this.transactions);

    function header() {
      console.log("date || credit || debit || balance")
    };

    function body(transactions) {
      transactions.forEach(function(element) {
        console.log(
          element.date.toLocaleDateString('en-US') +
          " || " +
          ifDefined(element.credit) +
          " || " +
          ifDefined(element.debit) +
          " || " +
          element.balance
        )
    });

    function ifDefined(value) {
      return (value ? value : "")
    };

  };
};


module.exports = Statement;
