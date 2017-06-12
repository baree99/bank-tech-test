var expect = require('chai').expect;
const Statement = require('../model/statement.js')

var statement = new Statement();

describe('Statement', function() {
  it('initialize with an empty array of transactions', function() {
    expect(statement.transactions).to.deep.equal([])
  });
});
