const { until } = require('selenium-webdriver');

class Page {
    constructor(driver) {
        this.driver = driver;
    }

    waitUntilVisible(elem) {
        return this.driver.wait(until.elementLocated(elem));
    }
}

module.exports.Page = Page;
