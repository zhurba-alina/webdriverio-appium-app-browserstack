exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',

  updateJob: false,
  specs: [
    './tests/specs/multiple_test.js'
  ],
  exclude: [],

  capabilities: [{
    name: 'multiple_appium_test',
    build: 'webdriver-browserstack',
    realMobile: true,
    device: 'iPhone 7',
    automationName: "XCUITest",
    app: 'bs://<hashed app-id>',
    'browserstack.debug': true
  }],

  logLevel: 'verbose',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 30000
  }
};
