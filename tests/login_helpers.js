//const helpers = require("@codeceptjs/helper");
const logindetails = require("../Data/user");
const login = require("./helper_helper");
const MyHelper = require("./myhelper_helper");

//const { Container } = require("codeceptjs");
//const Playwright = require("playwright");

//const { I } = inject();
//const helpers = require("@codeceptjs/helper");
// get current page
//const { page } = this.helpers.Playwright;
//const { browser } = this.helpers.Playwright;
//browser.pages(); // List of pages in the browser

/*class login_user extends Helper {
  //fields
  Username = "#user-name";
  Password = "#password";

  async loginViApi(logindetails) {
    //let page = codeceptjs.container.helpers("Playwright").page;
    //let page = CodeceptJS.Container.helpers("Playwright").page;
    window.loadURL("/");

    await page.url("/");
    //const page = await context.newPage();
    //const page = this.helpers["Playwright"].page;

    //await page.goto("https://playwright.dev/");

    // get current page
    //const { page } = this.helpers.Playwright;
    // page.url(); // Get the url of the current page
    //console.log(`Current URL is ${currentUrl}`);

    let resp = this.helpers.REST.sendRequest("auth/credentials", {
      userName: logindetails.UserName,
      Password: logindetails.Password,
    });

    if (resp.status !== 200) {
      throw new Error("Error during login via login");
    }
  }
}
module.exports = login_user;*/
let login1 = new MyHelper();

Feature("helper");

Scenario("Table check ALL", ({ I }) => {
  I.amOnPage("/");
  // this.config.defaultHost;
  //login1.loginViApi(logindetails);
  login1.doAwesomeThings();

  I.wait(2);

  //I.wait(3);
});
