const { I } = inject();

const login = require("../pages/login");

class additemtocart extends login {
  //fields

  cartname = "#add-to-cart-sauce-labs-backpack";
  cartItem = "div[id='shopping_cart_container'] a span";

  //methods--cart item

  cartName() {
    //Items in Cart
    I.click(this.cartname);
    I.wait(2);
    I.click(this.cartItem);
  }
}

module.exports = additemtocart;
