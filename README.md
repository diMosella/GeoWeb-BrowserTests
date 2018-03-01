# GeoWeb-BrowserTests
For GeoWeb software, it is required to assure that its components and functionalities remain working over code commits and versions.

Likewise, this should apply across multiple browsers (more precise a specific range of browsers and versions, which is currently described as 'modern versions of Firefox and Chrome').

Manually performing these regression and cross-browser tests each time there is a code commit, is a very labor intensive task.

This repository houses specifically regression - end-to-end - tests and cross browser tests, whereas the unit tests are included in the GeoWeb-FrontEnd and GeoWeb-BackEnd repositories themselves.

## Technology
To automate performing aforementioned tests, `mocha` and `webdriverio` are used. For the time being (see the TODO section) the service

## How to perform the test suite run
This section describes how to run and write tests

### Install dependencies
Dependencies installation is very simple: `npm install`. Make sure you use Node v7.10.1 or higher.

### Run the test suite
All individual tests are in the `tests` directory. To run the suite: use `npm start`. You can also specify a browser to use: `npm start -- -b <browsername>`. Currently for `<browsername>` you can choose `chrome` or `firefox`.

## TODO
- [x] To use a framework which better handles the `Promise`s and is more lightweight (`webdriverio` vs `selenium-webdriver`)
- [ ] To facilitate in starting the browser specific webdrivers, the `wdio-webdriver-service` is currently used. The `wdio-selenium-standalone-service` could also be used, but this introduces additional requirements (like having java runtime installed) and adds an intermediate proxy, which turns out to be slowing down the test process.
The beforementioned `wdio-webdriver-service` is a lightweight wrapper which just starts a `chromedriver` / `geckodriver` with proper configuration whenever the test suite is run. It should be a very simple task to replace the webdriver-service with a custom service, allowing for adding other browsers (real and virtual (`phantomjs`)) as well.
- [ ] To extend the webdriver configurations, see [configure webdriver with additional browsers](https://medium.com/@jlchereau/how-to-configure-webdrivier-io-with-selenium-standalone-and-additional-browsers-9369d38bc4d1)
- [ ] To really build a number of useful tests
