Feature('requestdemo');

const { correctLoginUser, contactdetails } = require("../Data/login_Data");
const requestdemo = require("../pages/requestdemo");


let request = new requestdemo();

/*Before(({ I }) => {
  I.openbrowser();
});*/

Scenario("user login", ({ I }) => {
  I.amOnPage('/');
  request.fillLoginFields(correctLoginUser);
  I.wait(2);
  request.requestDemoSignup(contactdetails);
  //I.seeCheckboxIsChecked("#LblmktoCheckbox_37543_0");
  //I.see('Thank you for your request.');
 
  I.wait(2);
   
});
