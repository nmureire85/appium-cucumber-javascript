const { When, Then } = require('@cucumber/cucumber');
const userMenuScreen = require('../../screenobjects/usermenu.screen');

When(/^User slides menu by dragging from left edge of screen$/, function () {
  userMenuScreen.scrollFromLeftEdge();
  });

When(/^menu screen is displayed$/, function () {
    expect(userMenuScreen.userMenuScreenButton).toBeDisplayed();
  });
  
When(/^User interacts with button$/, function () {
   userMenuScreen.userMenuScreenButton.click();
  });

Then(/^an alert is displayed to user$/, function () {
   expect(userMenuScreen.menuAlert).toBeDisplayed();
});