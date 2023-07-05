Feature("login");

const login = require("../pages/login");

const { correctLoginUser } = require("../Data/login_Data");

let login1 = new login();

/*Before(({ I }) => {
  I.openbrowser();
});*/

Scenario("user login", ({ I }) => {
  I.amOnPage('/');
  login1.fillLoginFields(correctLoginUser);

  I.see('Swag Labs');
}).tag('@smoke1');
