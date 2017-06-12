var assert = require('assert');
var expect = require('chai').expect;
const BankAccount = require("../model/bankAccount.js")

describe("BankAccount", function() {
  it("initialize with zero balance", function() {
    bankAccount = new BankAccount()
    expect(bankAccount.balance).to.equal(0)
  })
})
