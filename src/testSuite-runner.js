const webdriver = require('webdriverio');

const launcher = new webdriver.Launcher('./wdio.conf.js', { desiredCapabilities: { browserName: 'chrome' }});
console.log('Starting GeoWeb test suite runner...');
launcher.run().then((code) => {
  console.log('Completing GeoWeb test suite runner with code', code);
  process.exit(code);
}, (error) => {
  console.error('GeoWeb test suite runner couldn\'t start', error.stacktrace);
  process.exit(1);
});
