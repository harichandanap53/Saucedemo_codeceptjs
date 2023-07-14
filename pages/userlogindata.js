const { I } = inject();

class userdata {
  username = "#user-name";
  password = "#password";

  loginbutton = { css: "#login-button" };

  sendForm(username, password) {
    {
      I.fillField(this.username, username);
      I.fillField(this.password, password);
      I.click(this.loginbutton);
    }
  }
}
module.exports = userdata;
