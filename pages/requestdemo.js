const { I } = inject();

const login = require("../pages/login");
const Factory = require("../tests/factories/Faker1");

class requestdemo extends login {
  menubutton = "#react-burger-menu-btn";
  aboutbutton = "#about_sidebar_link";
  requestdemobutton = "//a[@href='/request-demo']//button[@type='button']";
  firstname = "#FirstName";
  lastname = "#LastName";
  email = "#Email";
  company = "#Company";
  phonenumber = "#Phone";
  country = "#Country";
  selectoption = "#Solution_Interest__c";
  intrest = "#Solution_Interest__c";
  checkbox1 = "#LblmktoCheckbox_37563_0";
  submitbutton = "button[type='submit']";
  //closebutton = "#LblmktoCheckbox_37543_0";

  requestDemoSignup(contact) {
    I.click(this.menubutton);
    I.click(this.aboutbutton);
    I.click(this.requestdemobutton);
    I.wait(2);
    I.fillField(this.firstname, contact.firstname);
    I.fillField(this.lastname, contact.lastname);
    I.fillField(this.email, contact.email);
    I.fillField(this.company, contact.company);
    I.fillField(this.phonenumber, contact.phonenumber);
    //I.click(this.country);
    I.selectOption(this.country, "India");
    I.selectOption(this.selectoption, "Sauce Mobile");
    I.click(this.checkbox1);
    I.click(this.submitbutton);
    //I.click(this.closebutton);
    console.log("Request demo submitted successfully.");
  }
}
module.exports = requestdemo;
