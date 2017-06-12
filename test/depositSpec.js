var assert = require('assert');
var expect = require('chai').expect;
const Deposit = require("../model/deposit.js")

describe("Deposit", function() {
  it("has a date", function() {
    var deposit = new Deposit('10/01/2012');
    expect(deposit.date).to.equal('10/01/2012')
  })
})
