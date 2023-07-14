Feature("requestdemo");

const { correctLoginUser, contactdetails } = require("../Data/login_Data");
const requestdemo = require("../pages/requestdemo");
const Factory = require("./factories/Faker1");

let request = new requestdemo();

/*Before(({ I }) => {
  I.openbrowser();
});*/

Scenario("user login", async ({ I }) => {
  I.amOnPage("/");
  request.fillLoginFields(correctLoginUser);

  let post = await I.have("post");
  I.haveMultiple("comment", 2, { postId: post.id });

  request.requestDemoSignup(contactdetails);
  //I.seeCheckboxIsChecked("#LblmktoCheckbox_37543_0");
  //I.see('Thank you for your request.');
});
