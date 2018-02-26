const url = require('url');

const URL = '/';
const elementSelectors = {
  layoutButton: '#layoutbutton',
  layout1: '#singleLayoutButton',
  layout1_1: '#dualLayoutButton',
  layout1_1_1: '#tripleColumnLayoutButton',
  layout1_2: '#tripleUnevenLayoutButton',
  layout1_3: '#quadUnevenLayoutButton',
  layout1_1_1_1: '#quadColLayoutButton',
  layout2_2: '#quadLayoutButton',
  layoutAdagucPanel: '[id^=adagucPanel]',
  layoutSavePresetNameInput: 'input[placeholder=\'Preset name\']',
  layoutSavePresetButton: '#layoutmodal > div:nth-child(9) > div.col-8 > div:nth-child(2) > div > div > button',
  layoutLoadPresetNameInput: 'input[placeholder=\'Type the preset name\']',
  layoutLoadPresetSuggestions: '#layoutmodal ul.dropdown-menu li:not(.disabled)',
  layoutModalExitButton: '.modal-dialog .modal-footer button',
  fullscreenButtonIcon: 'header nav span[class~=fa-expand]',
  fullscreenExitButton: 'button[title=\'Exit full screen mode\']',
  body: 'body'
};

class LandingPage {
  constructor () {
  }

  visit() {
    browser.url(URL);
  }

  getTitle () {
    return browser.getTitle();
  }

  setLayout (layoutName) {
    browser.click(elementSelectors.layoutButton);
    let buttonSelector;
    switch (layoutName) {
      case '1':
      buttonSelector = elementSelectors.layout1;
      break;
      case '1-1':
      buttonSelector = elementSelectors.layout1_1;
      break;
      case '1-1-1':
      buttonSelector = elementSelectors.layout1_1_1;
      break;
      case '1-2':
      buttonSelector = elementSelectors.layout1_2;
      break;
      case '1-3':
      buttonSelector = elementSelectors.layout1_3;
      break;
      case '1-1-1-1':
      buttonSelector = elementSelectors.layout1_1_1_1;
      break;
      case '2-2':
      buttonSelector = elementSelectors.layout2_2;
      break;
      default:
      break;
    }
    if (buttonSelector) {
      browser.waitForVisible(buttonSelector);
      browser.click(buttonSelector);
      browser.click(elementSelectors.layoutModalExitButton);
      browser.waitUntil(() => {
        return browser.getAttribute(elementSelectors.body, 'class').indexOf('modal-open') === -1;
      });
    }
  }

  savePreset (presetName) {
    browser.click(elementSelectors.layoutButton);
    browser.waitForVisible(elementSelectors.layoutSavePresetNameInput);
    browser.setValue(elementSelectors.layoutSavePresetNameInput, presetName);
    browser.click(elementSelectors.layoutSavePresetButton);
    browser.click(elementSelectors.layoutModalExitButton);
    browser.waitUntil(() => {
      return browser.getAttribute(elementSelectors.body, 'class').indexOf('modal-open') === -1;
    });
  }

  enterFullscreenMode () {
    browser.element(elementSelectors.fullscreenButtonIcon).element('..').click();
    browser.waitForVisible(elementSelectors.fullscreenExitButton);
  }

  exitFullscreenMode () {
    browser.click(elementSelectors.fullscreenExitButton);
    browser.waitForVisible(elementSelectors.fullscreenButtonIcon);
  }

  getLoadPresetOptionsCount (presetName) {
    browser.click(elementSelectors.layoutButton);
    browser.waitForVisible(elementSelectors.layoutLoadPresetNameInput);
    browser.setValue(elementSelectors.layoutLoadPresetNameInput, presetName);
    return browser.elements(elementSelectors.layoutLoadPresetSuggestions).value.length;
  }

  getAdagucPanelCount () {
    return browser.elements(elementSelectors.layoutAdagucPanel).value.length;
  }

  getUrlFragment () {
    const currentUrl = url.parse(browser.getUrl());
    return currentUrl.hash;
  }
}

module.exports.LandingPage = LandingPage;
