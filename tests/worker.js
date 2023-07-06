const { Workers, event } = require("codeceptjs");

/*const splitTests = () => {
    const files = [
      ['./tests/login_test.js']
    ];
  
    return files;
  }*/
const workerConfig = {
  testConfig: "./login_test.js",
  //by: splitTests
};

const customWorkers = new Workers(null, workerConfig);

const testGroups = customWorkers.createGroupsOfSuites(2);

const browsers = ["firefox", "chrome"];
/*const configs = browsers.map((browser) => {
  return {
    helpers: {
      WebDriver: { browser },
    },
  };
});*/

//for (const config of configs) {
for (group of testGroups) {
  const worker = customWorkers.spawn();
  worker.addTests(group);
  //worker.addConfig(config);
}
//}

customWorkers.bootstrapAll();

customWorkers.run();

customWorkers.teardownAll();
