var expect = require('chai').expect;
var {
    orm,
    makeQuestionMarks
} = require('../config/orm.js');

const range = (start, stop, step = 1) =>
    Array(Math.ceil((1 + stop - start) / step)).fill(start).map((x, y) => x + y * step)

describe("canary test", function () {
    it("should pass this canary test", function () {
        expect(true).to.be.true;
    });
});

describe("range test", function () {
    it("should give a range between start and end", function () {
        console.log("range 1: ", range(-10, 20, 4));
    })
})

describe("question marks test", function () {
    it("should create question n question marks", function () {
        console.log(makeQuestionMarks(5));
    })
})