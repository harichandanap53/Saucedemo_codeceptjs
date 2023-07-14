const { Faker, es } = require("@faker-js/faker");
//const Faker1 = require("./factories/Faker1");

const Faker1 = require("../tests/factories/Faker1");

//const codeceptJS = require("@codeceptJS");

//const codecep = require("@codecpetjs");
Feature("Faker");

let Faker1 = new Faker1();
console.log(Faker1._locale());

let faker1 = new Faker({ locale: [es] });
Scenario("FakerDemo", ({ I }) => {
  //I.amOnPage("https://esm.sh/v128/@faker-js/faker@8.0.2/es2022/faker.mjs");
  /*let fname = faker1.person.firstName();

  let lname = faker1.person.lastName();

  let image = faker1.image.avatar();*/

  console.log(`Nombre ${fname} Apellido ${lname}`);

  // const randomName = faker1.name.findName("Pedro");

  const randomEmail = faker1.internet.email();

  //codeceptJS.output("Hola soy un mensaje de output");
  const name = `${fname}${lname}${randomEmail}`;
  //expect(true).to.be.equal(false,"Error en el test");

  console.log(name);
  I.wait(4);
});
