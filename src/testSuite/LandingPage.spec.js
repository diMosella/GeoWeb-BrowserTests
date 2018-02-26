const { expect } = require('chai');
const { LandingPage } = require('../pages/landing.page');


describe('(Page) LandingPage', () => {

  let landingPage;

  before(() => {
    landingPage = new LandingPage();
  });

  it('should have the right title', () => {
    expect(landingPage.getTitle()).to.eql('Test');
  });
});
