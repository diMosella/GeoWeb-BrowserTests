const url = '/';
const elements = {
  // layoutButton: By.id('layoutbutton')
};

class LandingPage {
  constructor() {
  }

  getTitle() {
    browser.url(url);
    return browser.getTitle();
  }
}

module.exports.LandingPage = LandingPage;
