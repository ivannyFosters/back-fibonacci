// Unit test Ok with two numbers
const assertOne = require("assert");

describe("Unit Test", () => {
  it("should return 144", function () {
    assertOne.equal(12 * 12, 144);
  });

  it("should return 25", function () {
    assertOne.equal(13 + 12, 25);
  });
});

// Integration test
const chai = require("chai");
const chaiHttp = require("chai-http");
const assertTwo = chai.assert;
const { app } = require("../dist/app");
chai.use(chaiHttp);

describe("Integration Test", () => {
  it("Get Fibonacci Sequence for number 12", (done) => {
    chai
      .request(app)
      .get("/integration")
      .end((err, res) => {
        console.log(res.body);
        done();
      });
  });
});
