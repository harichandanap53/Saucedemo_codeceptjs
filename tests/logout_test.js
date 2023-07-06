Feature("logout");

const { I } = inject();

const { correctLoginUser } = require("../Data/login_Data");

const logout = require("../pages/logout");

let logot = new logout();

Scenario("Logout User", ({ I }) => {
  I.amOnPage("/");
  logot.fillLoginFields(correctLoginUser);
  logot.logoutuser();
});
