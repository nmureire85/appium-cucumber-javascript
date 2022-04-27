const { When, Then } = require('@cucumber/cucumber');
const settingsScreen = require('../../screenobjects/settings.screen');

When(/^User navigates to the settings screen$/, function () {
    settingsScreen.settingsTab.click();
  });

Then(/^settings screen is loaded successfully$/, function () {
    expect(settingsScreen.settingsTitle).toBeDisplayed();
  });

Then(/^settings screen loser option is displayed$/, function () {
   expec(settingsScreen.loserOption).toBeDisplayed();
  });