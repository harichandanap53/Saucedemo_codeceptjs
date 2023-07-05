Feature("ADD Item To Cart");

const { correctLoginUser } = require("../Data/login_Data");

const additemtocart = require("../pages/additemtocart");

let addcart = new additemtocart();

Scenario("ADD Item To Cart", ({ I }) => {
  I.amOnPage("/");
  addcart.fillLoginFields(correctLoginUser);
  I.wait(2);
  addcart.cartName();
  I.see('$29.99');
}).tag('@smoke2');
