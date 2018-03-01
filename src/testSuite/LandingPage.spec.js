const { expect } = require('chai');
const { LandingPage } = require('../pages/landing.page');


describe('(Page) LandingPage', () => {

  let landingPage;

  before(() => {
    landingPage = new LandingPage();
  });

  beforeEach(() => {
    landingPage.visit();
  });

  it('should have the right title', () => {
    expect(landingPage.getTitle()).to.eql('GeoWeb FrontEnd');
  });

  it('should be able to set the right ADAGUC-panel layout', () => {
    expect(landingPage.getAdagucPanelCount()).to.eql(1);
    landingPage.setLayout('1_1');
    expect(landingPage.getAdagucPanelCount()).to.eql(2);
    landingPage.setLayout('1_1_1');
    expect(landingPage.getAdagucPanelCount()).to.eql(3);
    landingPage.setLayout('1_2');
    expect(landingPage.getAdagucPanelCount()).to.eql(3);
    landingPage.setLayout('1_3');
    expect(landingPage.getAdagucPanelCount()).to.eql(4);
    landingPage.setLayout('1_1_1_1');
    expect(landingPage.getAdagucPanelCount()).to.eql(4);
    landingPage.setLayout('2_2');
    expect(landingPage.getAdagucPanelCount()).to.eql(4);
  });

  it('should be able to save a layout preset', () => {
    const randomName = Math.random().toString(36).substring(7);
    landingPage.savePreset(randomName);
    expect(landingPage.getLoadPresetOptionsCount(randomName)).to.eql(1);
    landingPage.visit();
    expect(landingPage.getLoadPresetOptionsCount(randomName + 'a')).to.eql(0);

  });

  it('should be able to toggle Fullscreen mode', () => {
    landingPage.enterFullscreenMode();
    expect(landingPage.getUrlFragment()).to.eql('#/full_screen');
    landingPage.exitFullscreenMode();
    expect(landingPage.getUrlFragment()).to.eql('#/');
  });
});
