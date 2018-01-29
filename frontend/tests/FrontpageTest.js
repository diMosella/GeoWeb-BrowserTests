const { promise } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;

// Util imports
const PageUtils = require('../utils/PageUtils');

// Pages
let homePage;

describe('Home page', function() {
    this.timeout(10000);
    let driver;

    before(() => {
        driver = require('../browserConfig').init();
        [homePage] = PageUtils.initializePages(driver, 'titlebar.page');
    });

    beforeEach(() => {
        homePage.navigate()
    });

    it('Renders two Adaguc panels when the default "Dual Column" layout is selected', (done) => {
        homePage.selectDualLayout().then((adagucPanels) => expect(adagucPanels).to.have.length(2)).then(() => done());
    });

    it('Can save a preset with a random name', (done) => {
        const randomName = Math.random().toString(36).substring(7);
        (async () => {
            await homePage.savePreset(randomName);
            await homePage.navigate();
            const suggestions = await homePage.retrievePreset(randomName);
            expect(suggestions).to.have.length(1);
            await homePage.navigate();
            const no_suggestions = await homePage.retrievePreset(randomName + 'a');
            expect(no_suggestions).to.have.length(0);
            done();
        })()
    });

    after((done) => {
       driver.quit()
       .then(() => done())
    });
});
