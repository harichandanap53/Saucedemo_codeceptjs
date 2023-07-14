const Helper = require("@codeceptjs/helper");
//const { page } = this.helpers.Playwright;
const { correctLoginUser } = require("../Data/login_Data");

class MyHelper extends Helper {
  doAwesomeThings() {
    console.log("Hello from MyHelpr");
  }

  doAwesomeThingsWithPlaywright() {
    const { Playwright } = this.helpers;
    Playwright.click("Awesome");
  }

  constructor(config) {
    console.log(config.defaultHost);
    config.defaultHost += "/api";
    console.log(config.defaultHost);
    super(config);
  }

  //request.baseURL = config.defaultHost;
}

module.exports = MyHelper;
