# Bank Tech Test

The program can make deposits and withdrawal. It can print the account statement with date, amount and balance.
Data is kept in memory.

## Getting started

```
git clone git@github.com:baree99/bank-tech-test.git
npm install
```

## How the code is used

```
> const BankAccount  = require("./model/bankAccount");
> var bankAccount = new BankAccount();
> bankAccount.deposit('10/01/2012', 1000);
> bankAccount.deposit('13/01/2012', 2000);
> bankAccount.withdraw('14/01/2012', 500);
> bankAccount.statement.print();
date || credit || debit || balance
14/01/2012 ||  || 500.00 || 2500.00
13/01/2012 || 2000.00 ||  || 3000.00
10/01/2012 || 1000.00 ||  || 1000.00
```


## Running tests

`mocha`
