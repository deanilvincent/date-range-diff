const assert = require("chai").assert;

var app = require("../index");

describe("Index test", () => {
  it("Should return undefined if both date are empty", () => {
    assert.equal(app(), undefined);
  });

  it("Should return undefined if it's first date is empty.", () => {
    assert.equal(app("", "2020-01-26"), undefined);
  });

  it("Should return undefined if it's second date is empty", () => {
    assert.equal(app("2020-01-26", ""), undefined);
  });

  it("Should return error if date result is negative value", () => {
    assert.equal(app("2020-01-24", "2020-01-26"), undefined);
  });

  it("Should equal to day difference", () => {
    assert.equal(app("2020-01-26", "2020-01-24").days, 2);
  });

  it("Should return type of object", () => {
    assert.typeOf(app("2020-02-26", "2020-01-24"), "object");
  });
});
