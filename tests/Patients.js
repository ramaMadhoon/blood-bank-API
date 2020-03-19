const tape = require("tape");
const supertest = require("supertest");
const app = require("../src/app");
tape("tests calling patients endpoint", t => {
  supertest(app)
    .get("/patients")
    .expect(200)
    .end((err, result) => {
      t.equal(result.body[1].name, "nidaa", "name of second patient is nidaa");
      t.end();
    });
});