const helper = require("@codeceptjs/helper");
const logindetails = require("../Data/user");
//declare const codeceptjs_helper: typeof CodeceptJS.Helper;
class login extends helper {
  //fields
  Username = "#user-name";
  Password = "#password";

  async loginViApi(logindetails) {
    //let page = codeceptjs.container.helpers("Playwright").page;
    //let page = CodeceptJS.Container.helpers("Playwright").page;
    //window.loadURL("/");

    await page.url("/");

    let resp = this.helpers.REST.sendRequest("auth/credentials", {
      Username: logindetails.Username,
      Password: logindetails.Password,
    });

    if (resp.status !== 200) {
      throw new Error("Error during login via login");
    }
  }
}

module.exports = login;
