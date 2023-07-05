const { I } = inject();

class login {
  //fields
  Username = "#user-name";
  Password = "#password";
  loginButton = "#login-button";
 

  //methods
  fillLoginFields(user) {
    I.fillField(this.Username, user.Username);
    I.fillField(this.Password, user.Password);
    I.click(this.loginButton);
  }
}

module.exports = login;
