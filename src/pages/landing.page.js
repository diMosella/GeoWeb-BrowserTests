const elements = {
  // layoutButton: By.id('layoutbutton')
};

class LandingPage {
  constructor(browser) {
    console.log('Constructor LandingPage called');
    this.browser = browser;
  }
}

module.exports.LandingPage = LandingPage;
