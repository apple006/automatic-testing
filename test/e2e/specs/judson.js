// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL
    console.log(devServer)

    browser
      .url(devServer + '/judson')
      .waitForElementVisible('#content', 5000)
      .assert.elementPresent('#content')
      .assert.containsText('h1', '我的第一个')
      .end()
  }
}
