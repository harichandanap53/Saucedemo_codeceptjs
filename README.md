# Saucedemo_codeceptjs

Codeceptjs E2E Testing
CodeceptJS is a new testing framework for end-to-end testing with WebDriver (or others). It abstracts browser interaction to simple steps written from a user perspective. A simple test that verifies the "Welcome" text is present on a main page of a site will look like this:
Feature("demo");
Scenario(‘check welcome page on site’,({I})=>{
I.amOnPage(‘/’); //url mentioned in codeceptjs.conf file
I.see(‘welcome’);
});




Why CodeceptJS?
CodeceptJS is a successor of Codeception, a popular full-stack testing framework for PHP. With CodeceptJS your scenario-driven functional and acceptance tests will be as simple and clean as possible. You don't need to worry about the asynchronous nature of NodeJS or about various APIs of Selenium, Puppeteer, Protractor, TestCafe, etc. as CodeceptJS unifies them and makes them work as they synchronously.

Features
Based on the Mocha testing framework.
Designed for scenario-driven acceptance testing in BDD-style
Uses ES6 natively without a transpiler.
It also plays nice with TypeScript.
Smart locators: use names, labels, matching text, CSS, or XPath to locate elements.
Interactive debugging shell: pause the test at any point and try different commands in a browser.
Easily create tests, page objects, and step objects with CLI generators.

Install
command: npm install codeceptjs --save
Move to directory where you'd like to have your tests (and codeceptjs config) stored, and run

command: npx codeceptjs init
to create and configure the test environment. It is recommended to select playwright from the list of helpers if you need to write Selenium WebDriver tests.

After that create your first test by executing:

command:npx codeceptjs generate:test
Now test is created and can be executed with

command: npx codeceptjs run
If you want to write your tests using TypeScript just generate standard Type Definitions by executing:

command:npx codeceptjs def .
Usage
Learn CodeceptJS by examples. Let's assume we have CodeceptJS installed and Playwright helper enabled.
Basics
Let's see how we can handle basic form testing:
Feature("login");

Scenario(’test something’,({I})=>{
I.amOnPage(‘https://www.saucedemo.com’);
I.fillfield(‘username’,’standard_user’);
I.fillfield(‘password’,’secret_sauce’);
I.click(‘login’);
I.see(‘Sawglabs’);
I.dontsee(‘login’);
});



All actions are performed by I object; assertions functions start with see function. In this examples all methods of I are taken from playwright helper, see reference to learn how to use them.

Let's execute this test with run command. Additional option --steps will show us the running process. We recommend use --steps or --debug during development.

command: npx codeceptjs run --steps

This will produce an output:
 


  CodeceptJS has an ultimate feature to help you develop and debug you test. You can pause execution of test in any place and use interactive shell to try different actions and locators. Just add pause() call at any place in a test and run it.

Interactive shell can be started outside test context by running:

command: npx codeceptjs shell

Actions
We filled form with fillField methods, which located form elements by their label. The same way you can locate element by name, CSS or XPath locators in tests:

I.fillfield(‘username’,’standard_user’);
I.fillfield(‘password’,secret_sauce’);



 Assertions
Assertions start with see or dontSee prefix. In our case we are asserting that string 'User is valid' is somewhere in a webpage. However, we can narrow the search to particular element by providing a second parameter:
  
I.see(‘SwagLabs’);
I.dontsee(‘login’);


PageObjects
CodeceptJS provides the most simple way to create and use page objects in your test. You can create one by running

command: npx codeceptjs gpo
It will create a page object file for you and add it to config. Let's assume we created one named loginPage:
include: {
    I: "./steps_file.js",

    loginPage: "./pages/login.js",


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

You can easily inject it to test by providing its name in test arguments:
Feature("login");

const { correctLoginUser } = require("../Data/login_Data");
const login = require("../pages/login");

let login1 = new login();

/*Before(({ I }) => {
  I.openbrowser();
});*/

Scenario("user login", ({ I }) => {
  I.amOnPage("/");
  login1.fillLoginFields(correctLoginUser);
  I.see("Swag Labs");
}).tag("@smoke1");


