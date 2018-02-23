const webdriver = require('webdriverio');

module.exports = {
  init: () => {
    const browserChoice = process.argv[process.argv.length - 1];
    console.log('bC', browserChoice);
    const options = {};
    options.desiredCapabilities = {
      browserName: 'chrome'
    };
    /* switch (browserChoice.toLowerCase()) {
      case 'ie':
      // explicit fallthrough
      case 'edge':
        require('ie64driver');
        const isWin = /^win/.test(process.platform);
        if (!isWin) {
          console.log(`HAHAHAHA echt? op ${process.platform}?`);
          process.exit(1);
        }
        capabilities = webdriver.Capabilities.ie();
        break;
      case 'safari':
        capabilities = webdriver.Capabilities.safari();
        break;
      case 'firefox':
        require('geckodriver');
        capabilities = webdriver.Capabilities.firefox();
        break;
      default:
        require('chromedriver');
        if (browserChoice !== 'chrome') {
          console.log('WARNING: using fallback browser Chrome');
        }
        capabilities = webdriver.Capabilities.chrome();
        var chromeOptions = {
          'args': ['--start-maximized'],
        };
        capabilities.set('chromeOptions', chromeOptions);
        break;
    }
    const builder = new webdriver.Builder().withCapabilities(capabilities);
    const driver = builder.build();

    return driver; */
    return webdriver.remote().init();
  }
};
