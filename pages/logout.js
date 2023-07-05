const { I } = inject();

const cartitemcheckout = require("../pages/cartitemcheckout");

class logout extends cartitemcheckout {
  //fields

  menubutton = "#react-burger-menu-btn";
   logoutside= "#logout_sidebar_link";

  //methods

  logoutuser() {
    
    I.click(this.menubutton);
    I.wait(2);
    I.click(this.logoutside);
  }
}

module.exports = logout;