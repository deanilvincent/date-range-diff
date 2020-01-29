const assert = require("chai").assert;

var app = require("../index");

describe("Index test", () => {
  it("Should equal to date difference", () => {
    assert.equal(app("2020-01-26", "2020-01-24"), 2);
  });

  it("Should return undefined if both date are empty", ()=>{
    assert.equal(app(), undefined);
  })

  it("Should return undefined if it's first date is empty.", () => {
    assert.equal(app("", "2020-01-26"), undefined);
  });

  it("Should return undefined if it's second date is empty", () => {
    assert.equal(app("2020-01-26", ""), undefined);
  });

  it("Should return error if date result is negative value", () => {
    assert.equal(
      app("2020-01-24", "2020-01-26"),
      "Invalid date result. Negative value."
    );
  });

});
