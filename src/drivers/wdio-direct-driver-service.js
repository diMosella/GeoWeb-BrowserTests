/**
 * @class DirectDriverService
 * @description This class intents to abstract away specific browser usage and provide a direct way of accessing the browser specific webdrivers.
 * @todo 1. Detect which browsers (and versions) are available
 * @todo 2. Define and load necessary webdrivers
 * @todo 3. Load necessary webdriver configurations
 * @todo 4. Control the webdrivers (start/stop)
*/

class DirectDriverService {

  onPrepare(config, capabilities) {
    // TODO: something before the workers launch
  }

  onComplete(exitCode, config, capabilities) {
    // TODO: something after the workers shutdown
  }
}

export default DirectDriverService;
