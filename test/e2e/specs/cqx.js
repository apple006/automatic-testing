// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
module.exports = {
  'it blogs to cqx': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL
    console.log(devServer)

    browser
      .url(devServer)
      .waitForElementVisible('#example', 1000)
      .url(devServer + '/#/cqx/')
      .click('input[value="One"]')
      .pause(1000)
      .assert.containsText('#example', 'this is a text for test')
      .end()
  }
}
