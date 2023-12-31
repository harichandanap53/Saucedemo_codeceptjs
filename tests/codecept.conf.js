const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      url: "https://www.saucedemo.com",
      show: true,
      browser: "chromium",
    },
    REST: {
      endpoint: "https://www.saucedemo.com",
    },
    /*MyHelper: {
      require: "./myhelper_helper.js",
      defaultHost: "http://mysite.com/api",
    },*/
    // },
    //DATA FACTORY

    ApiDataFactory: {
      endpoint: "https://www.saucedemo.com",
      cleanup: false,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      factories: {
        user: {
          factory: "../tests/Faker1",
          create: (data) => ({ method: "POST", url: "/api", data }),
        },
      },
    },
  },

  include: {
    I: "./steps_file.js",

    loginPage: "./pages/login.js",
    additemtocartPage: "./pages/additemtocart.js",
    cartitemcheckoutPage: "./pages/cartitemcheckout.js",
    requestdemoPage: "./pages/requestdemo.js",
    logoutPage: "./pages/logout.js",
  },
  bootstrap: null,
  mocha: {
    reporterOptions: {
      mochaFile: "output/result.xml",
      reportDir: "output",
    },
  },
  name: "POC",
  plugins: {
    screenshotOnFail: {
      enabled: true,
      screenshotsForAllureReport: true,
    },
    retryFailedStep: {
      enabled: true,
    },
    stepByStepReport: {
      enabled: true,
      // deleteSuccessful: false
    },
    allure: {
      enabled: true,
      require: "@codeceptjs/allure-legacy",
    },
  },
  multiple: {
    profile1: {
      browsers: [
        {
          browser: "firefox",
          desiredCapabilties: {
            // override capabilties related to firefox
          },
        },
        {
          browser: "chromium",
          desiredCapabilties: {
            // override capabilties related to chrome
          },
        },
      ],
    },
    profile2: {
      browsers: [
        {
          browser: "webkit",
          desiredCapabilties: {
            // override capabilties related to safari
          },
        },
      ],
    },
  },
};
