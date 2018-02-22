# GeoWeb-BrowserTests
For GeoWeb software, it is required to assure that its components and functionalities remain working over code commits and versions. Likewise, this should apply across multiple browsers (more precise a specific range of browsers and versions, which is currently described as 'modern versions of Firefox and Chrome').
Manually performing these regression and cross-browser tests each time there is a code commit, is a very labor intensive task. This repository houses specifically regression - end-to-end - tests and cross browser tests, whereas the unit tests are included in the GeoWeb-FrontEnd and GeoWeb-BackEnd repositories themselves.

## Technology
To automate performing aforementioned tests, `mocha` and `webdriverio` are used.

## How to perform the test suite run
This section describes how to run and write tests

### Install dependencies
Dependencies installation is very simple: `npm install`. Make sure you use Node v7.10.1 or higher.

### Run the test suite
All individual tests are in the `tests` directory. To run the suite: use `run-testSuite.sh`.
