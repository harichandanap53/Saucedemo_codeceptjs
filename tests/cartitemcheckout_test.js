Feature("CART CHECKOUT");

const { locator } = require("codeceptjs");
const { correctLoginUser, cartcheckinfo } = require("../Data/login_Data");

const additemtocart = require("../pages/additemtocart");
const cartitemcheckout = require("../pages/cartitemcheckout");

let itemcheckout = new cartitemcheckout();

const logout = require("../pages/logout");

let logot = new logout();

Scenario("checkout item successfull", ({ I }) => {
  I.amOnPage("/");

  itemcheckout.fillLoginFields(correctLoginUser);
  I.wait(2);

  itemcheckout.cartName();

  I.wait(2);

  itemcheckout.cartlistcheckout();

  I.wait(2);

  itemcheckout.checkoutYourInformation(cartcheckinfo);
  I.dontSee('cancel');
  I.wait(2);

  logot.logoutuser();
 

  I.wait(2);
});


