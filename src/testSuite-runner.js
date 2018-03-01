(() => {
  const webdriver = require('webdriverio');

  getBrowserChoice = (args) => {
    if (Array.isArray(args)) {
      const browserFlagIndex = args.indexOf('-b');
      if (browserFlagIndex !== -1) {
        return process.argv[browserFlagIndex + 1].toLowerCase();
      }
    }
    return null;
  }

  getRunContext = (browserName) => {
    if (typeof browserName === 'string') {
      switch (browserName) {
        case 'firefox':
          return {
            driver: 'geckodriver',
            config: 'wdio.conf.js',
            platform: process.platform
          };
        case 'chrome':
          return {
            driver: 'chromedriver',
            config: 'wdio.conf.js',
            platform: process.platform
          };
        default:
          return null;
      }
    }
  }

  console.log('Starting GeoWeb test suite runner...');
  let browserChoice = getBrowserChoice(process.argv);
  if (typeof browserChoice === 'string') {
    console.log('...with browser choice', browserChoice);
  } else {
    console.log('...without explicit browser choice, using fallback \'chrome\' (use flags -- -b <browsername> to specify browser)');
    browserChoice = 'chrome';
  }
  const context = getRunContext(browserChoice);
  if (!context) {
    console.log('Quiting GeoWeb test suite runner: no runner configuration available');
    process.exit(1);
  }

  const launcher = new webdriver.Launcher(`./src/drivers/${context.config}`, { desiredCapabilities: { browserName: browserChoice }, path: '/', port: 9515 });
  launcher.run().then((code) => {
    console.log('Completing GeoWeb test suite runner with code', code);
    process.exit(code);
  }, (error) => {
    console.error('GeoWeb test suite runner couldn\'t start', error.stacktrace);
    process.exit(1);
  });
})();
