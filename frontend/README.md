# End-to-End frontend test
This structure performs an end-to-end test for the GeoWeb frontend using Selenium and mocha.


# How to run
This section describes how to run and write tests

## Install dependencies
Dependencies installation is very simple: `npm install`
Make sure you use Node v7.10.1 or higher

## Run tests
Running tests is also very simple. All tests are in the `tests` directory.
Running each test is done by using mocha as test runner.
This is achieved by running 'npm test'
### Running tests by hand with global mocha installation
This is achieved by running: `node --harmony mocha tests/*`.
### Running test by hand with local mocha installation
If you do not have mocha globally installed then you can run: `node --harmony node_modules/.bin/mocha tests/* `

# Troubleshooting
This section described common problems we discovered and how to fix them.

## Firefox exits with a WebDriverError
This might be due to having an invalid SSL certificate.
Firefox cannot handle this and exits and efforts to make Firefox not verify SSL certificates are so far unsuccessful.
TODO: fix Firefox SSL certificate ignore.

Solution: Use Chrome. Chrome is with respect to SSL certificates like a honeybadger: it just doesn't care.

## It doesn't even start up and quits with a weird exception immediatly
This is due to a bug in Selenium 3.4.0 which is fixed in the next version which is isn't released yet.
For a fix, see [here](https://github.com/mozilla/geckodriver/issues/683#issuecomment-298202408).
