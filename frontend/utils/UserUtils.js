const PageUtils = require('./PageUtils');

module.exports = {
    loginAs: function(driver, username, password) {
        let [userAreaMenu, loginPage] = PageUtils.initializePages(driver, 'user-area-menu.page', 'login.page');

        userAreaMenu.navigate();
        userAreaMenu.clickLoginLink();
        loginPage.waitUntilVisible();
        loginPage.login(username, password);
        return userAreaMenu.waitUntilVisible();
    }
};
