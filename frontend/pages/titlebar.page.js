const { By } = require('selenium-webdriver');
const { Page } = require('./page');
const elements =  {
    layoutButton: By.id('layoutbutton'),
    savePresetNameInput: By.xpath('/html/body/div[2]/div/div[1]/div/div/div[2]/div[5]/div[2]/div[2]/div/input'),
    loadPresetNameInput: By.xpath('/html/body/div[2]/div/div[1]/div/div/div[2]/div[5]/div[1]/div[2]/div/div[1]/div/div/div[1]/input'),
    savePresetButton: By.xpath('/html/body/div[2]/div/div[1]/div/div/div[2]/div[5]/div[2]/div[2]/div/div/button'),
    layoutButtonClickPopover: By.xpath('/html/body/div[2]/div/div[1]/div/div'),
    dualColumnButton: By.xpath('/html/body/div[2]/div/div[1]/div/div/div[2]/div[1]/div/div[2]/div/button[2]'),
    adagucPanels: By.css("div[id^=adagucPanel]"),
    suggestionsForName: By.css('a.dropdown-item:not(.disabled)')
};

const url = 'http://localhost:3000/';

class TitleBar extends Page {
    navigate() {
        this.driver.navigate().to(url);
        return this.waitUntilVisible(elements.adagucPanels);
    }


    selectDualLayout() {
        this.driver.findElement(elements.layoutButton).click();
        this.waitUntilVisible(elements.layoutButtonClickPopover);
        this.driver.findElement(elements.dualColumnButton).click();
        return this.driver.findElements(elements.adagucPanels);
    }

    savePreset(name) {
        this.driver.findElement(elements.layoutButton).click();
        this.waitUntilVisible(elements.savePresetNameInput);
        this.driver.findElement(elements.savePresetNameInput).sendKeys(name);
        return this.driver.findElement(elements.savePresetButton).click();
    }
    retrievePreset(name) {
        this.driver.findElement(elements.layoutButton).click();
        this.waitUntilVisible(elements.loadPresetNameInput);
        this.driver.findElement(elements.loadPresetNameInput).sendKeys(name);
        return this.driver.findElements(elements.suggestionsForName);

    }
}

module.exports = TitleBar;
