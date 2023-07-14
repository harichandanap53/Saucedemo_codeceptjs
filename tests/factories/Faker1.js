const { Factory } = require("rosie");
const { faker } = require("@faker-js/faker");

module.exports = new Factory()
  /*.attr("developer", () => faker.developer.name("patrick"))
  .attr("tester", () => faker.tester.name("patrick"));

EmployeeFactory();
{
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new developer(name);
        break;
      case 2:
        return new tester(name);
        break;
    }
  };
}

//module.exports = new EmpFactory()
// no need to set id, it will be set by REST API*/
  .attr("firstname", () => faker.person.findName())
  .attr("lastname", () => faker.persom.findName())
  .attr("email", () => faker.internet.email())
  .attr("company", () => faker.company.name())
  .attr("phonenumber", () => faker.phone.number({ min: 1000000, max: 9999999 }))
  .attr("country", () => faker.location.country());

create: (data) => ({ method: "post", url: "/posts", data });
//.attr("dname", () => faker.developer.name())
//.attr("tname", () => faker.tester.name());

/*create: function(data){
    return{
      method:"POST",
      headers:{
        'Content-Type':"application/json; charset=utf-8"
        },
        body:JSON.stringify({"dname":this._attrs["dname"],"tname":
        this._attrs['tname']})};
        };*/
