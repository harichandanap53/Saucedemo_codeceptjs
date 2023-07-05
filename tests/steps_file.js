// in this file you can append custom step methods to 'I' object

module.exports = function () {
  return actor({
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    //openbrowser:function(Username, Password){
    //this.amOnPage('/');
    /*this.fillField('Username', Username);
        this.fillField('Password', Password);
        this.click('Submit');*/
  });
};
