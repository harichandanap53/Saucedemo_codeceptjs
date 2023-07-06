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

  itemcheckout.cartName();

  itemcheckout.cartlistcheckout();

  itemcheckout.checkoutYourInformation(cartcheckinfo);
  I.dontSee("cancel");
  logot.logoutuser();
});
