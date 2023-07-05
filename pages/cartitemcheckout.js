const { I } = inject();

const additemtocart = require("../pages/additemtocart");

class cartitemcheckout extends additemtocart {
  //fields

  cartitemCheckout = "#checkout";
  backtohome= "#back-to-products";

  //Checkout: Your Information
  FirstName = "#first-name";
  LastName = "#last-name";
  PostalCode = "#postal-code";
  continue = "#continue";
  finish = "#finish";
  //Items in Cart

  cartlistcheckout() {
    I.click(this.cartitemCheckout);
  }

  checkoutYourInformation(cartcheckinfo) {
    I.fillField(this.FirstName, cartcheckinfo.FirstName);
    I.fillField(this.LastName, cartcheckinfo.LastName);
    I.fillField(this.PostalCode, cartcheckinfo.PostalCode);
    I.click(this.continue);
    I.wait(2);
    I.click(this.finish);
    I.click(this.backtohome);

  }
}

module.exports = cartitemcheckout;
