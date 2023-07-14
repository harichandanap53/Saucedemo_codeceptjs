const { Factory } = require("rosie");
let faker = require("@faker-js/faker");

module.exports = new Factory()
  .attr("name", () => faker.name.findName())
  .attr("job", () => "leader");
