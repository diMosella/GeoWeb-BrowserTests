module.exports = {
    initializePages: function(driver,...pagenames) {
        let pages = [];

        pagenames.forEach(function(pagename) {
            pages.push(new (require('../pages/' + pagename))(driver));
        });

        return pages;
    }
};
