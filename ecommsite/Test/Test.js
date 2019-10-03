const expect = require("chai").expect;
const request = require("request");

describe("API Routes Test", () => {
 it("Get Request To Root", done => {
   request("http://localhost:3001", (err, res, body) => {
     expect(res.statusCode).to.equal(200);
     done();
   });
 });
 it("Get Request Made From Products", done => {
   request("http://localhost:3001/api/products/", (err, res, body) => {
     expect(res.statusCode).to.equal(200);
     done();
   });
 });
})
 it("Get Request Made From Contacts", done => {
   request("http://localhost:3001/api/contact", (err, res, body) => {
     expect(res.statusCode).to.equal(200);
     done();
   });
 });
 it("Certain porducts", done => {
   request("http://localhost:3001", (err, res, body) => {
     expect(res.statusCode).to.equal(200);
     done();
   });
 });

