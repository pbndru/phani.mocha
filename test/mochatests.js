//require assert module to verify test results
const assert = require('assert');

//We can group tests here in describe -- as a parent
describe("Product Discounts", () => {
let actualAmount = 0;
before(() => {
   actualAmount = 500;
   console.log("Runs only once before all tests of Product Discounts" );
});

after(() => {
   // actualAmount = 0;
   console.log("Runs only once after all tests of Product Discounts" );
});
   
// Nested describes for product discount tests
describe("Basic Customer Discount Test", () => {
   beforeEach(() => {
      console.log( "Runs before each test for Basic customer" );
   });

   // it is used for every one test
   it("Is return 50 discount amount when basic customer discount is 10 percent for amount 500", () => {
      assert.equal(actualAmount/10, 50);
   });

   it("Is return 52 discount amount when basic customer discount is 10 percent for amount 500 plus promotion discount of 2", () => {
      assert.equal((actualAmount/10) + 2, 52);
   });
});

describe("Intermediate Customer Discount Test", () => {
   beforeEach(() => {
      console.log( "Runs before each test for Intermediate Customer" );
   });

   // it is used for every one test
   it("Is return 33.33 discount amount when intermediate customer discount is 15 percent for amount 500", () => {
      let amount = Number((actualAmount/15).toFixed(2));
      assert.equal(amount, 33.33);
   });

   it("Is return 35.33 discount amount when intermediate customer discount is 15 percent for amount 500 plus promotion of 2 percent", () => {
      let amount = Number((actualAmount/15).toFixed(2)) + Number(2);
      assert.equal(amount, 35.33);
   });
});

describe("Advanced Customer Discount Test", () => {
   beforeEach(() => {
      console.log( "Runs before each test for Advanced Customer" );
   });

   // it is used for every one test
   it("Is return 25 discount amount when advanced customer discount is 20 percent for amount 500", () => {
      let amount =  Number((actualAmount/20).toFixed(2));
      assert.equal(amount, 25);
   });

   it("Is return 27 discount amount when advanced customer discount is 20 percent for amount 500 plus promotion discount of 2", () => {
      let amount = Number((actualAmount/20).toFixed(2)) + Number(2);
      assert.equal(amount, 27);
   });
});
});