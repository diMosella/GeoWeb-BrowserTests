// const PageUtils = require('../utils/PageUtils');
const { expect } = require('chai');

describe('(Page) LandingPage', () => {

  let driver;
  let landingPage;

  before(() => {
    console.log('before');
    driver = require('../driverConfig').init();
    // [landingPage] = PageUtils.initializePages(driver, 'landing.page');
  });

  it('should have the right title', () => {
    driver.url('/');
    driver.getTitle().then((title) => {
      expect(title).to.eql('GeoWeb FrontEnd');
    })
    .end()
    .catch((error) => {
      console.error('ERROR: ', error);
    })
  });
});
