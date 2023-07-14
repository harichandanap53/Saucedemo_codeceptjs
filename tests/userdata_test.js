const userdata = require("../pages/userlogindata");

Feature("user_added_test");

let user_data = new DataTable(["username", "password"]);
user_data.add(["standard_user", "secret_sauce"]);
user_data.add(["locked_out_user", "secret_sauce"]);
let userdata1 = new userdata();
let data = new Data(user_data).Scenario(
  "successful user login",
  ({ I, current }) => {
    I.amOnPage("/");
    userdata1.sendForm(current.username, current.password);
    //user_addedPage.sendForm('standard_user','secret_sauce');
    I.see("SwagLabs");
  }
);
